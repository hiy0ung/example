// calendar_240808.js

//! 주간 캘린더 관리 시스템 
// >> 8/5 ~ 8/11까지 일정 적을 수 있는 목록 (7칸)

//# 프로젝트 기능 정의
//? 일정 객체
// - id: 각 일정의 고유 식별자
// - time: 일정의 시간
// - content: 일정의 내용 (문자열 저장)
// - memo: 선택사항 (활성화/비활성화)

// let schedule = {
//   id: 1,
//   time: 9-10,
//   content: '산책하기',
//   memo: true/false
// }

//# 프로젝트 구조
// 1. 일정 추가: 객체를 사용해 일정을 저장하고 배열에 객체 추가
// >> 새로운 일정(객체)을 캘린더(배열)에 추가

// 2. 일정 내 메모 활성화/비활성화: writememo를 이용해 input창 노출, 비노출

// 3. 일정 삭제: 원하는 일정 목록에서 제거

// 4. 일정 목록 출력: 각각 요일 일정 목록 상태 출력



let schedules: []; // 일정을 저장할 배열 초기화

//? 1. 일정 추가
function addSchedule(time, content, memo) {
  // 순차적으로 id 값 할당
  const newSchedule = {
    id: schedules.length + 1,
    time: time,
    content: content,
    writememo: false
  }
  schedules.push(newSchedule);
  displaySchedules();
  console.log(`${content}(이)가 캘린더에 등록 되었습니다.`);
}

//? 2. 메모창 활성화/비활성화
// : 특정 id를 가진 일정에 메모 input창 추가?
function openMemo(id) {
  schedules = schedules.map((schedule) => {
    if (schedule.id === id) {
      const memoBox = document.createElement('input');
    }
  });

  displaySchedules();
}

//? 3. 현재 일정 목록 출력
function displaySchedules() {
  schedules.forEach(schedule => {
    console.log(`${schedule.time}에 ${schedule.content} 예정 되어있습니다.`);
  });
00000000000000000}

//# 프로젝트 구현
//* Schedule 클래스: 각 일정 정보 저장
class Schedule {
  constructor(id, time, content, memo) {
    this.id = id;
    this.time = time;
    this.content = content;
    this.memo = false;
  }
}

//* Calendar 클래스: 일정 목록 관리 (추가, 출력, 수정, 삭제)
class Calendar {
  constructor() {
    this.schedules = [];
  }

  //! 일정 추가
  

  //! 일정 목록 출력
  displaySchedules() {
    this.schedules.forEach(schedule => {
      console.log(`${schedule.time}에 ${schedule.content} 예정 되어있습니다.`);
    })
  }

  //! 메모 활성화 / 비활성화
  updateSchedules() {

  }

  //! 특정 일정 삭제
  deleteSchedule(content) {
    this.schedules = this.schedules.filter(schedule => schedule.content !== content);
  }
}
