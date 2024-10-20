let users = []; // تخزين مستخدمي الموقع
let currentUser = null; // المستخدم الحالي
let chatMessages = []; // تخزين الرسائل

function login() {
    const username = document.getElementById("username").value;

    if (users.includes(username)) {
        currentUser = username;
        document.getElementById("loginSection").classList.add("hidden");
        document.getElementById("chatSection").classList.remove("hidden");
        loadChat();
    } else {
        alert("اسم المستخدم غير صحيح. يمكنك إنشاء حساب جديد.");
        document.getElementById("signupSection").classList.remove("hidden");
    }
}

function signup() {
    const newUsername = document.getElementById("newUsername").value;

    if (!users.includes(newUsername)) {
        users.push(newUsername);
        alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
        document.getElementById("signupSection").classList.add("hidden");
        document.getElementById("loginSection").classList.remove("hidden");
    } else {
        alert("اسم المستخدم موجود بالفعل.");
    }
}

function sendMessage() {
    const message = document.getElementById("message").value;
    if (message) {
        chatMessages.push(`${currentUser}: ${message}`);
        document.getElementById("message").value = '';
        loadChat();
    }
}

function loadChat() {
    const chat = document.getElementById("chat");
    chat.innerHTML = chatMessages.join('<br/>');
    chat.scrollTop = chat.scrollHeight; // التمرير لأسفل
}

function createGroup() {
    const groupName = prompt("أدخل اسم المجموعة:");
    if (groupName) {
        alert(`تم إنشاء المجموعة: ${groupName}`);
    }
}