async function checkEmail() {
  const emailText = document.getElementById("emailInput").value;
  const resultBox = document.getElementById("resultBox");
  const keywordsList = document.getElementById("keywordsBox");

  resultBox.classList.add("d-none");
  resultBox.classList.remove("alert-success", "alert-warning", "alert-danger");
  keywordsList.innerHTML = "";

  const res = await fetch("/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: emailText })
  });

  const data = await res.json();
  const { riskLevel, message, keywords, explanation } = data;

  let alertClass = "alert-success";
  if (riskLevel === "medium") alertClass = "alert-warning";
  if (riskLevel === "high") alertClass = "alert-danger";

  resultBox.classList.remove("d-none");
  resultBox.classList.add(alertClass);
  resultBox.innerHTML = `<strong>🛡️ ${riskLevel.toUpperCase()} RISK</strong><br>${message}<br><em>${explanation}</em>`;

  if (keywords.length > 0) {
    keywordsList.innerHTML = "<strong>Triggered Keywords:</strong><ul class='mt-2'>" +
      keywords.map(k => `<li>${k}</li>`).join("") + "</ul>";
  }
}
