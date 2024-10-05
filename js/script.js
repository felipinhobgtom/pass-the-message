const messageInput = document.getElementById("message-input");

function getMessage(){
    document.getElementById("message-output").innerHTML += `<p>${messageInput.value}</p>`;
    messageInput.value = '';
}