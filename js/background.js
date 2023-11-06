// 3가지 배경 이미지 랜덤 출력

const images = ["0.png", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];  // 1가지 랜덤으로 출력 (floor 내림 ↔ ceil 올림, round 반올림)

const bgImage = document.createElement("img");  // img 요소 생성

bgImage.src = `img/${chosenImage}`;  // bgImage에 chosenImage 생성

document.body.appendChild(bgImage);  // body에 bgImage 생성