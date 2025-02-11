document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let user = JSON.parse(localStorage.getItem('user'));


    if (user && user.email === email && user.password === password) {
        alert('تم تسجيل الدخول بنجاح!');
        window.location.href = "profile.html"; 
    } else {
        alert('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
    }
});
