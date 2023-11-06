// todo list 입력 및 출력

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // 배열을 문자열로 변경
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // 속성값 확인 (button의 부모속성은 li)
    li.remove();                            // 해당값 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");           // li 요소 생성
    li.id = newTodo.id;
    const span = document.createElement("span");       // span 요소 생성
    span.innerText = newTodo.text;                     // span에 입력값을 넣음
    const button = document.createElement("button");   // button 요소 생성
    button.innerText = "❌";                           // button에 X값을 넣음
    button.addEventListener("click", deleteToDo);      // 버튼 클릭시 deleteToDo 함수 실행
    li.appendChild(span);                              // li에 span을 추가
    li.appendChild(button);                            // li에 button을 추가
    toDoList.appendChild(li);                          // toDoList에 li를 추가
}   

function handleToDoSubmit(event) {
    event.preventDefault();            // 기본 동작을 막음 (새로고침)
    const newTodo = toDoInput.value;   // newTodo 입력값 저장
    toDoInput.value = "";              // 입력값 입력 후 빈값 출력
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);          // newTodo를 toDos array에 push
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);  // localStorage에 저장된 값 반환 (TODOS_KEY = todos)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}