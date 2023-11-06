// 날씨 API 사용해 현재 날씨 및 도시 출력
// lat:경도 lon:위도 API_KEY:내위치

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "982c7d3f3597ae45d587ce325b7f0971";

// openweathermap API 사용
function onGeoOk(position) {
    const lat = position.coords.latitude;   // 경도 좌표 지정
    const lon = position.coords.longitude;  // 위도 좌표 지정
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;  // 날씨 / 기온
        });
        console.log("You live in", lat, lon);
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// 위치 확인 함수 (실행, 에러)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 드림코딩 동기 비동기 11 12 13 확인 (유튜브)
// http 통신 확인, fetch .then 확인, response, data 넣은 이유 확인, promise 확인
// local session cookie storage 확인