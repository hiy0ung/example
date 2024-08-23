var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
{
    var fetchUsers_1 = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users" // JSONPlaceholder API에서 사용자 데이터를 비동기적으로 요청
                        )];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Network response was not ok"); // 네트워크 응답이 성공적이지 않으면 예외 발생
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users]; // 사용자 데이터 배열 반환
                case 3:
                    error_1 = _a.sent();
                    console.error("Fetch error:", error_1); // 오류 발생 시 콘솔에 오류 메시지 출력
                    return [2 /*return*/, []]; // 오류 발생 시 빈 배열 반환
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var createUserCard_1 = function (user) {
        var userCard = document.createElement("div"); // 사용자 카드를 위한 div 요소 생성
        userCard.className = "user-card"; // 생성된 div에 클래스 이름 설정
        userCard.dataset.userId = user.id.toString(); // 데이터 속성에 사용자 ID 설정
        userCard.innerHTML = "\n      <h2>".concat(user.name, "</h2>\n      <p><strong>Username:</strong> ").concat(user.username, "</p>\n      <p><strong>Email:</strong> ").concat(user.email, "</p>\n    "); // HTML 내용으로 사용자 정보 표시
        return userCard; // 생성된 사용자 카드 요소 반환
    };
    var displayUsers_1 = function (users) {
        var userList = document.getElementById("user-list"); // 사용자 목록을 표시할 요소 선택
        if (userList) {
            userList.innerHTML = ""; // 사용자 목록 초기화
            users.forEach(function (user) {
                var userCard = createUserCard_1(user); // 각 사용자에 대한 카드 생성
                userList.appendChild(userCard); // 사용자 목록에 카드 추가
            });
        }
    };
    var showModal_1 = function (user) {
        var modal = document.getElementById("user-modal"); // 모달 창 요소 선택
        var modalContent = document.getElementById("modal-user-details"); // 모달 창 내용을 담을 요소 선택
        if (modal && modalContent) {
            modalContent.innerHTML = "\n        <h2>".concat(user.name, "</h2>\n        <p><strong>Username:</strong> ").concat(user.username, "</p>\n        <p><strong>Email:</strong> ").concat(user.email, "</p>\n        <p><strong>Phone:</strong> ").concat(user.phone, "</p>\n        <p><strong>Website:</strong> ").concat(user.website, "</p>\n      "); // 모달 창 내용으로 사용자 상세 정보 표시
            modal.style.display = "block"; // 모달 창 표시
        }
    };
    var addEventListeners_1 = function (users) {
        var userList = document.getElementById("user-list"); // 'user-list' 아이디를 가진 HTML 요소를 가져와 HTMLElement 타입으로 캐스팅
        if (userList) {
            userList.addEventListener("click", function (event) {
                var target = event.target; // 클릭된 요소를 HTMLElement 타입으로 캐스팅
                var userCard = target.closest(".user-card"); // 클릭된 요소에서 가장 가까운 '.user-card' 클래스를 가진 조상 요소를 찾아 HTMLElement 타입으로 캐스팅
                if (userCard) {
                    var userId_1 = parseInt(userCard.dataset.userId || "0", 10); // userCard의 데이터 속성에서 'userId' 값을 가져와 정수로 변환, 값이 없으면 '0'을 기본값으로 사용
                    var user = users.find(function (u) { return u.id === userId_1; }); // users 배열에서 userId와 일치하는 id를 가진 사용자 객체를 찾음
                    if (user) {
                        showModal_1(user); // 찾은 사용자 객체를 사용하여 상세 정보를 보여주는 모달 창을 표시하는 함수 호출
                    }
                }
            });
        }
        var modal = document.getElementById("user-modal"); // 'user-modal' 아이디를 가진 HTML 요소를 가져와 HTMLElement 타입으로 캐스팅
        var closeModal = document.getElementsByClassName("close")[0]; // 'close' 클래스를 가진 첫 번째 HTML 요소를 가져와 HTMLElement 타입으로 캐스팅
        if (modal && closeModal) {
            closeModal.addEventListener("click", function () {
                modal.style.display = "none"; // 닫기 버튼 클릭 시 모달의 display 스타일을 'none'으로 설정하여 모달 창을 숨김
            });
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none"; // 모달 창의 외부(모달 자체)를 클릭할 경우 display 스타일을 'none'으로 설정하여 모달 창을 숨김
                }
            });
        }
    };
    var init = function () { return __awaiter(_this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUsers_1()];
                case 1:
                    users = _a.sent();
                    displayUsers_1(users); // 사용자 데이터로 사용자 목록 표시
                    addEventListeners_1(users); // 이벤트 리스너 추가
                    return [2 /*return*/];
            }
        });
    }); };
    document.addEventListener("DOMContentLoaded", init); // 문서 로딩 완료 시 init 함수 실행
}
