// API 베이스 URL
const URL = 'http://localhost:3000/todos';

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.
document.addEventListener('DOMContentLoaded', initTodos);

async function initTodos() {
  // 1. 데이터 가져오기
  const todos = await fetchTodos();
  // 2. 데이터 보여주기
  renderTodos(todos);
}

// Todos json 형태로 가져오기.
async function fetchTodos() {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
// todos를 입력받아 보여주기.
function renderTodos(todos) {
  //   <li>
  //   <span>todo의 컨텐트</span>
  //   <button>완료</button>
  //   <button>삭제</button>
  // </li>
  // 를 만들어다가
  // ul에 push하고 싶다.
  const todoListTag = document.querySelector('#todo-list');

  todos.forEach((todo) => {
    // 하나의 todo에 대한 태그들
    const liTag = document.createElement('li');

    // span
    const spanTag = document.createElement('span');
    const { content } = todo;
    spanTag.textContent = content;

    // complete
    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';

    // delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';

    liTag.append(spanTag, completeButton, deleteButton);
    todoListTag.append(liTag);
  });
}
