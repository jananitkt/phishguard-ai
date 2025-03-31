import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const suspiciousPatterns = [
  /urgent/i,
  /click here/i,
  /verify your account/i,
  /you have won/i,
  /reset your password/i,
  /limited time offer/i,
  /free gift/i,
  /suspicious login/i,
  /confirm your identity/i,
  /act now/i,
  /account suspended/i
];

app.post("/api/check", (req, res) => {
  const emailText = req.body.text;
  const matchedKeywords = suspiciousPatterns.filter(p => p.test(emailText)).map(p => p.source);
  const count = matchedKeywords.length;

  let riskLevel = "low";
  let message = "This email appears safe.";
  let explanation = "No significant phishing indicators were detected.";

  if (count >= 2 && count < 5) {
    riskLevel = "medium";
    message = "Caution advised — some suspicious patterns found.";
    explanation = "The email includes multiple phrases that are commonly used in phishing campaigns.";
  } else if (count >= 5) {
    riskLevel = "high";
    message = "Dangerous — multiple high-risk indicators detected.";
    explanation = "This email contains several high-risk keywords and patterns. Avoid clicking links or providing personal info.";
  }

  res.json({ riskLevel, message, explanation, keywords: matchedKeywords });
});

app.listen(PORT, () => {
  console.log(`✅ Professional Phishing Detector running at http://localhost:${PORT}`);
});
