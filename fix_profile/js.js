
function validateLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var userID = document.getElementById('userID').value;

    if (!/^[A-Za-z0-9]{6,}$/.test(userID)) {
        errorMessage.innerHTML = 'UserID không hợp lệ';
        errorMessage.style.color = "red";
        return;
      }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.innerHTML = 'Email không hợp lệ.';
      errorMessage.style.color = "red";
      return;
    }
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
         if (!passwordRegex.test(password)) {
        errorMessage.innerHTML = 'Mật khẩu không đáp ứng yêu cầu.';
        errorMessage.style.color = "red";
         return;
    }

    errorMessage.innerHTML='';
    alert('Đăng nhập thành công!');
}


