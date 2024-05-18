document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn việc submit form mặc định
    var user = 'admin';
    var pass = '12345';
    // Lấy giá trị của username và password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Giả sử việc kiểm tra đăng nhập thành công
    // (Thực tế bạn nên thực hiện việc kiểm tra với server tại đây)
    if (username === user && password === pass) {
        // Chuyển hướng đến trang indexs
        window.location.href = 'index.html';
    } else {
        alert('Đăng nhập thất bại. Vui lòng thử lại.');
    }
});