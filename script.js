const responses = [
    "Olá! Como posso ajudar?",
    "Claro, estou aqui para ajudar!",
    "Você tem alguma dúvida específica?",
    // Adicione mais respostas conforme necessário
];

const chatWindow = document.querySelector(".chat-window");
const chatForm = document.querySelector(".chat-form");
const inputField = document.querySelector(".chat-form input");

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const userMessage = inputField.value;
    displayMessage(userMessage, "user");
    inputField.value = "";
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * responses.length);
        const responseMessage = responses[randomIndex];
        displayMessage(responseMessage, "bot");
    }, 500); // Simula resposta do atendente após 500ms
});

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
}
