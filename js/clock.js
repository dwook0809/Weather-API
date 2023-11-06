// 현재 시간 출력

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();  // 현재 날짜 시간

    // padStart 2글자로 지정 (아니라면 0으로 추가)
    const hours = String(date.getHours()).padStart(2, "0");      // 시간 
    const minutes = String(date.getMinutes()).padStart(2, "0");  // 분
    const seconds = String(date.getSeconds()).padStart(2, "0");  // 초
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000); // 1s 마다 시간을 반복해서 호출