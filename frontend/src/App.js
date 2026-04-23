import './App.css';

function App() {
  const send = async () => {
    const input = document.getElementById("input");
    const chat = document.getElementById("chat");

    const message = input.value;
    if (!message) return;

    chat.innerHTML += `<div class="msg user">Bạn: ${message}</div>`;

    const res = await fetch("http://localhost:3001/api/v1/conversations/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    chat.innerHTML += `<div class="msg bot">Bot: ${data.reply}</div>`;
    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  }

  return (
    <div className="App">
      <h2>Chatbot</h2>

      <div id="chat"></div>

      <input type="text" id="input" placeholder="Nhập câu hỏi..." style={{ width: '80%' }} />
      <button onClick={send}>Gửi</button>
    </div>
  );
}

export default App;
