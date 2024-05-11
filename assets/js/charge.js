setInterval(()=> {
    let count = localStorage.getItem('count')
    let total = localStorage.getItem('total')
    let power = localStorage.getItem('power');
    if(Number(total) > power){
        localStorage.setItem('power' , `${Number(power) + Number(count)}`);
    }
}, 1000);
const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Perform validation (e.g., check against stored credentials)
            // You can use localStorage or an API to handle authentication.

            // Example validation (for demonstration purposes):
            if (username === 'admin' && password === 'secret') {
                alert('Login successful!');
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
  l