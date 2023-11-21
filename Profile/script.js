
function validateLogin()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if( (email === '' || password === ''))
    {
        alert('Bạn chưa điền đủ thông tin đăng nhập!!');
    }else
    {
        alert('Bạn đã đăng nhập thành công');
        chuyenHuong();
    }
}

 function chuyenHuong() {
    var urlMoi = "index2.html";
    window.location.href = urlMoi;
 }










