{
  // User 인터페이스 정의, 사용자의 id, 이름, 사용자명, 이메일 정보를 포함합니다.
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  // User 배열을 나타내는 타입 별칭을 정의합니다.
  type Users = User[];

  // 비동기 함수로, 사용자 정보를 외부 API에서 가져와 프라미스로 반환합니다.
  const fetchUsers = async (): Promise<Users> => {
    try {
      // fetch 함수를 사용하여 API 호출을 진행합니다.
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // 응답이 성공적이지 않으면 에러를 발생시킵니다.
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // 응답 데이터를 JSON 형태로 변환합니다.
      const users: Users = await response.json();
      return users;
    } catch (error) {
      // 네트워크 요청에 실패했을 때 콘솔에 에러를 출력합니다.
      console.error("Fetch error:", error);
      return [];
    }
  };

  // 사용자 정보를 받아 HTML 엘리먼트를 생성하는 함수입니다.
  const createUserCard = (user: User): HTMLElement => {
    // div 엘리먼트를 생성하고 'user-card' 클래스를 추가합니다.
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    // 생성된 div에 HTML 내용을 삽입합니다.
    userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
  `;
    // userCard.innerHTML = ...과 같은 값 (태그마다 밑 구조 만들어줘야함)
    // const titleH2 = document.createElement('h2');
    // titleH2.textContent = `${user.name}`;
    // userCard.appendChild(titleH2);
    
    return userCard;
  };

  // 사용자 정보 배열을 받아 화면에 표시하는 함수입니다.
  const displayUsers = (users: Users): void => {
    // 'user-list' ID를 가진 엘리먼트를 가져옵니다.
    const userList = document.getElementById("user-list");
    if (userList) {
      // userList 내용을 초기화합니다.
      userList.innerHTML = "";
      // 사용자 정보를 순회하며 각 사용자 카드를 생성하고 추가합니다.
      users.forEach((user) => {
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      });
    }
  };

  // 사용자 정보를 필터링하는 함수입니다.
  const filterUsers = (users: Users, query: string): Users => {
    return users.filter(
      (user) =>
      // 사용자의 이름, 사용자명, 이메일 중 하나라도 쿼리 문자열을 포함하면 해당 사용자를 반환합니다.

      // 순회되고 있는 데이터.포함되어있는지 확인(매개변수로 받아오는 데이터값)
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
  };

  // 사용자 정보를 정렬하는 함수입니다.
  const sortUsers = (users: Users, key: "name" | "email"): Users => { // key에 타입을 "name"과 "email" 문자열 그 자체만 만족해야하는 리터럴 사용

    // 지정된 키(name 또는 email)를 기준으로 사용자 정보를 정렬합니다.

    // [...users]
    // >> 새로운 배열 주소값에 기존의 10명의 사용자 데이터만 복사해서 가져옴

    // 배열.sort()
    // >> 배열의 요소를 정렬할 때 사용
    // >> 콜백함수를 인자로 받음 (함수의 인자는 비교할 데이터 2가지가 입력)

    // cf) 현재 a, b 데이터는 객체(User 인터페이스)
    //      key가 name으로 전달된 경우 a.[name].localeCompare(b[name])

    // 문자열.localeCompare(문자열)
    // >> 문자열을 비교하는 메서드 (알파벳 순서에 따라 정렬할 때 유용)
    // >> 반환값(음수: a가 b보다 앞 / 0: a와 b가 동일 / 양수: b가 a보다 앞)
    // >> 오름차순 정렬
    return [...users].sort((a, b) => a[key].localeCompare(b[key]));

    // cf) 배열명.sort();
    // >> 문자열 비교에만 흔히 사용

    const numbers = [5, 30, 2, 8];
    numbers.sort();
    // 2, 5, 8, 30 (X)
    // 2, 30, 5, 8 >> 앞자리로만 비교
  };

  // 이벤트 리스너를 추가하는 함수입니다.
  const addEventListeners = (users: Users): void => {
    // 'search-input'과 'sort-select' 엘리먼트를 가져옵니다.
    const searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;
    const sortSelect = document.getElementById(
      "sort-select"
    ) as HTMLSelectElement;

    // 검색 입력 필드에 입력 이벤트 리스너를 추가합니다.
    searchInput?.addEventListener("input", () => {
      const query = searchInput.value;
      const filteredUsers = filterUsers(users, query);

      // 검색을 했을 때도 정렬 기능 적용
      const sortKey = sortSelect.value as "name" | "email";
      const sortedUsers = sortUsers(filteredUsers, sortKey);
      displayUsers(sortedUsers);
    });

    // 정렬 선택 필드에 변경 이벤트 리스너를 추가합니다.
    sortSelect?.addEventListener("change", () => {
      const query = searchInput.value;
      const filteredUsers = filterUsers(users, query);

      // 정렬 기준을 변경해도 정렬 기능 적용
      const sortKey = sortSelect.value as "name" | "email";
      const sortedUsers = sortUsers(filteredUsers, sortKey);
      displayUsers(sortedUsers);
    });
  };

  // 초기화 함수로, 사용자 데이터를 가져와 화면에 표시하고 이벤트 리스너를 설정합니다.
  const init = async (): Promise<void> => {
    // 실질적으로 데이터를 가져오는 함수(JSONPlaceholder에서 데이터를 가져오는)를 호출하는 경우 비동기적인 처리가 기본
    // a_pagination에서는 loadpage가 위에서 비동기처리 다 해서 받아오지만, 여기서는 직접적으로 비동기가 필요한 데이터를 매개변수로 넣어서 받아와야하기 때문에? async, await 사용해야함
    // >> a_pagination에서는 displayUsers()가 위의 로직에서 다 정리가 됨
    const users = await fetchUsers();
    displayUsers(users);
    addEventListeners(users);
  };

  // 문서가 준비되면 init 함수를 호출합니다.
  document.addEventListener("DOMContentLoaded", init);
}