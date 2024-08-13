// 

//! 캘린더 관리 시스템

//# 프로젝트 기능 정의
//? 1) 캘린더 (객체)
// 속성: 여러 일정
// 기능
// - 캘린더에 일정 추가
// - 캘린더에 일정 수정
// - 캘린더에 일정 삭제
// - 캘린더 목록 출력

//? 2) 일정 (객체)
// - id: 각 일정의 고유 식별자
// - time: 일정의 시간
// - content: 일정의 내용 (문자열 저장)
// - memo: 선택사항

// let schedule = {
//   id: 1,
//   time: 9-10,
//   content: '산책하기',
//   memo: true/false
// }

//# 프로젝트 객체 예시
let calendar = {
  schedules: []; // 캘린더에 일정을 저장하는 빈 배열
}

let schedule = {
  id: 1,
  time: 9-10,
  content: '산책하기',
  memo: true/false
}

//# 프로젝트 구현
//* Schedule 클래스: 각 일정 정보 저장
class Schedule {
  constructor(id, time, content, memo) {
    this.id = id;
    this.time = time;
    this.content = content;
    this.memo = memo;
  }
}

//* Calendar 클래스: 일정 목록 관리 (추가, 출력, 수정, 삭제)
class Calendar {
  constructor() {
    this.schedules = [];
  }

  //! 일정 추가
  addSchedule(time, content, memo) {
    // 순차적으로 id 값 할당
    const newSchedule = new Schedule(this.schedules.length + 1, time, content, memo);
    this.schedules.push(newSchedule);
    console.log(`${content}(이)가 캘린더에 등록 되었습니다.`);
  }

  //! 일정 목록 출력
  displaySchedules() {
    this.schedules.forEach(schedule => {
      console.log(`${schedule.time}에 ${schedule.content} 예정 되어있습니다.`);
    })
  }

  //! 특정 일정 수정
  updateSchedules() {

  }

  //! 특정 일정 삭제
  deleteSchedule(content) {
    this.schedules = this.schedules.filter(schedule => schedule.content !== content);
  }
}
