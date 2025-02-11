let messageElement = document.getElementById('message');

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name && email && password) {
        // تخزين بيانات المستخدم في التخزين المحلي
        let user = {
            name: name,
            email: email,
            password: password
        };
        // إظهار الرسالة داخل العنصر
        messageElement.innerHTML = 'تم التسجيل بنجاح!';
        messageElement.style.color = 'green';
        
        setTimeout(function() {
            window.location.href = "login.html";
        }, 2000); // الانتظار لثانيتين قبل الانتقال إلى صفحة تسجيل الدخول
    } else {
        messageElement.innerHTML = 'الرجاء ملء جميع الحقول!';
        messageElement.style.color = 'red';
    }
});
