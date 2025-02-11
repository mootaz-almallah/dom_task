let user = JSON.parse(localStorage.getItem('user'));

if (user) {
    document.getElementById('profile-info').innerHTML = `welcome :${user.name}`;

    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    

    document.getElementById('update-profile-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let updatedName = document.getElementById('name').value;
        let updatedEmail = document.getElementById('email').value;

        user.name = updatedName;
        user.email = updatedEmail;
        localStorage.setItem('user', JSON.stringify(user)); 

        alert('تم تحديث الملف الشخصي بنجاح!');
    });
} else {
    alert('يجب عليك تسجيل الدخول أولاً!');
    window.location.href = "login.html";
}


document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('user'); 
    alert('تم تسجيل الخروج بنجاح!');
    window.location.href = "login.html"; 
});
