function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ="flex"
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ="none"
}

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_qwdqy3u",  "template_01yixuj", params).then(function (res) {
        alert("Success!" + res.status);
    })
}