import { useState } from "react";
import { predictMedicine, askAssistant } from "./gemini";
function App() {
  const [medicine, setMedicine] = useState("");
  const [stock, setStock] = useState("");
  const [usage, setUsage] = useState("");
  const [result, setResult] = useState("No prediction yet.");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function predictStock() {
  try {
    setResult("🤖 Gemini is thinking...");

    const response = await predictMedicine(
      medicine,
      stock,
      usage
    );

    setResult(response);
  } catch (error) {
    console.error(error);
    setResult("Error connecting to Gemini.");
  }
}
  async function askAI() {
  try {
    setAnswer("🤖 AI Assistant is thinking...");

    const response = await askAssistant(question);

    setAnswer(response);

  } catch (error) {
    console.error(error);
    setAnswer("Unable to contact AI Assistant.");
  }
}

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🏥 Smart Health AI</h1>
      <h3>AI Powered Health Center Dashboard</h3>

      <hr />

      <h2>Dashboard</h2>

      <p>👨‍⚕️ Doctors Present: 8</p>
      <p>🛏 Beds Available: 12</p>
      <p>🧑 Patients Today: 234</p>

      <hr />

      <h2>Medicine Stock Prediction</h2>

      <input
        placeholder="Medicine Name"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Current Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Daily Usage"
        value={usage}
        onChange={(e) => setUsage(e.target.value)}
      />

      <br /><br />

      <button onClick={predictStock}>
        Predict with AI
      </button>

      <hr />

      <h2>AI Result</h2>
      <hr />

<h2>🤖 AI Health Assistant</h2>

<input
  placeholder="Ask anything..."
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  style={{
    width: "400px",
    padding: "10px"
  }}
/>

<br /><br />

<button onClick={askAI}>
  Ask AI
</button>

<br /><br />

<div
  style={{
    background: "#1e293b",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    whiteSpace: "pre-wrap"
  }}
>
  {answer}
</div>

      
      <div
  style={{
    background: "#1e293b",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    whiteSpace: "pre-wrap",
    marginTop: "20px",
  }}
>
  {result}
</div>
    </div>
  );
}

export default App;