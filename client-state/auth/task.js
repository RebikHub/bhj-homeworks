const signin = document.querySelector('#signin');
const signinForm = document.querySelector('#signin__form');
const signoutBtn = document.querySelector('#signout__btn');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const login = document.querySelectorAll('.control')[0];
const password = document.querySelectorAll('.control')[1];
let loginText;
let passText;
let resData;
let formData = new FormData();
signinForm.action = '';
authorization();

function createNewUser() {
    formData.append('login', loginText);
    formData.append('password', passText);
}

function verification(e) {
    if (login.value === '' || password.value === '') {
        alert('Неверный логин/пароль');
        login.value = '';
        password.value = '';
    } else {
        createNewUser();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.addEventListener('load', () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                resData = JSON.parse(xhr.responseText);
                saveUser();
                getWelcome(resData);
            };
        });
        xhr.send(formData);
    };
    e.preventDefault();
};

function saveUser() {
    if (resData.success === true) {
        const user = {
            success: resData.success,
            user_id: resData.user_id,
        };
        localStorage.user = JSON.stringify(user);
    };
};

function authorization() {
    if (localStorage.user) {
        const user = JSON.parse(localStorage.user);
        console.log(user);
        getWelcome(user);
    } else {
        signin.classList.add('signin_active');
    }
};

function getWelcome(arg) {
    if (arg.success === true) {
        signin.classList.remove('signin_active');
        userId.textContent = arg.user_id;
        welcome.classList.add('welcome_active');
    } else {
        alert('Неверный логин/пароль');
        login.value = '';
        password.value = '';
    }
};

function signOut() {
    login.value = '';
    password.value = '';
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    localStorage.removeItem('user');
};

login.addEventListener('input', () => {
    if (login.value !== '') {
        loginText = login.value;
    };
});
password.addEventListener('input', () => {
    if (password.value !== '') {
        passText = password.value;
    };
});

signinForm.addEventListener('submit', verification);

signoutBtn.addEventListener('click', signOut)