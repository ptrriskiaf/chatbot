document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');

    // Daftar pertanyaan dan jawaban bot
    const botResponses = [
        { question: 'hello', answer: 'Hello! How can I assist you today?' },
        { question: 'how are you', answer: 'I am a bot. I do not have feelings, but I am here to help!' },
        // Tambahkan pasangan pertanyaan dan jawaban lainnya di sini
    ];

    sendBtn.addEventListener('click', function() {
        const userMessage = userInput.value.trim().toLowerCase(); // Mengonversi pesan pengguna menjadi lowercase
        if (userMessage !== '') {
            // Menambahkan pesan pengguna ke chatbox
            appendMessage('outgoing', userMessage);
            
            // Mencari jawaban dari bot berdasarkan pertanyaan
            const botResponse = getBotResponse(userMessage);
            
            // Menambahkan pesan balasan bot ke chatbox setelah jeda kecil
            setTimeout(() => {
                appendMessage('incoming', botResponse);
            }, 500);
            
            userInput.value = ''; // Mengosongkan textarea setelah mengirim pesan
        }
    });

    // Fungsi untuk menemukan jawaban bot berdasarkan pertanyaan pengguna
    function getBotResponse(question) {
        for (let i = 0; i < botResponses.length; i++) {
            if (question.includes(botResponses[i].question)) {
                return botResponses[i].answer;
            }
        }
        return "I'm sorry, I don't understand that. Can you ask me something else?";
    }

    // Fungsi untuk menambahkan pesan ke chatbox
    function appendMessage(type, message) {
        const newChat = document.createElement('li');
        newChat.className = `chat ${type}`;
        newChat.innerHTML = `<p>${message}</p>`;
        chatbox.appendChild(newChat);
        chatbox.scrollTop = chatbox.scrollHeight; // Agar chatbox otomatis scroll ke bawah
    }

    // Optional: Tambahkan event untuk mengirim pesan saat menekan Enter
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
});
