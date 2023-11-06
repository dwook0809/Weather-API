// 인사말

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();  // preventDefault는 기본 동작을 막음 (새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);  // loginForm을 다시 숨김
    const username = loginInput.value;  // username에 값 저장
    localStorage.setItem(USERNAME_KEY, username);  // username 값을 KEY와 함께 localStorage에 저장
    
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;  // Hello username 변수 호출
    greeting.classList.remove(HIDDEN_CLASSNAME);  // HIDDEN_CLASSNAME 삭제
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//  savedUsername이 null 이라면 onLoginSubmit 함수 호출
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}