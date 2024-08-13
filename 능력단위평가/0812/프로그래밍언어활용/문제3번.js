// 1. 주제 선정
// - 응시자는 자유롭게 주제를 선정할 수 있습니다. 예를 들어, 도서 관리, 차량 관리, 학생 관리, 쇼핑카트 등 다양한 주제를 선택할 수 있습니다.
// 2.클래스 설계 및 구현
// - 주제에 맞는 클래스를 설계합니다.
// - 클래스는 최소 3개 이상의 속성을 포함해야 합니다.
// - 클래스는 최소 2개 이상의 메소드를 포함해야 합니다.
// - 클래스의 속성과 메소드는 주제와 관련된 실제적인 기능을 수행해야 합니다.
// - 생성된 클래스를 이용해 최소 1개의 객체를 생성하고, 해당 객체를 이용해 메소드를 실행하는 코드를 작성합니다.
// 3. 객체 생성 및 메소드 테스트
// - 설계한 클래스를 사용하여 객체를 생성합니다.
// - 생성된 객체를 통해 클래스의 메소드를 호출하여 동작을 확인합니다.
// - 객체의 상태를 나타내는 속성을 변경하거나 확인하는 코드도 포함합니다.

//! 차량 관리 시스템

//# 프로젝트 기능 정의

// 1) 주차장 (객체)
// 속성: 여러 차량
// 기능
// - 차량 추가
// - 차량 목록 출력
// - 특정 차량 입차 서비스
// - 특정 차량 출차 서비스

// 2) 차 (객체)
// 속성: 차 번호판 / 차량 이름 / 차량 회사 / 차랑 입차, 출차 여부

//# 프로젝트 구현
//? Car 클래스: 각 차의 정보 저장 & 입출차 관리

class Car {
  constructor(numbers, name, company) {
    this.numbers = numbers;
    this.name = name;
    this.company = company;
    this.isExisted = true;
  }

  outServise() {
    if(this.isExisted) {
      this.isExisted = false;
      console.log(`${this.numbers} - ${this.name}은 출차서비스 가능힙니다.`);
    } else {
      console.log(`${this.numbers} - ${this.name}은 존재하지 않습니다.`);
    }
  }

  enterService() {
    this.isExisted = true;
    console.log(`${this.numbers} - ${this.name}은 입차 서비스 가능합니다.`);
  }
}


//? PackingArea 클래스: Car 객체 목록 관리 (차량 추가, 출력, 차량 존재 유무(출차가능))
class ParkingArea {
  constructor() {
    this.cars = [];
  }

  // 차량 추가
  addCar(numbers, name, company) {
    const newCar = new Car(numbers, name, company);
    this.cars.push(newCar);
    console.log(`${numbers} - ${name}: 차량이 입차하였습니다.`);
  }

  // 차량 목록 출력
  displayCars() {
    console.log('==== ParkingList ====');
    this.cars.forEach(car => {
      console.log(`${car.numbers} - ${car.name}(${car.company}): ${car.isExisted ? '(입차중) 출차서비스가능' : '(출차중) 입차서비스가능'}`);
    });
  }

  // 특정 번호 차량 출차 서비스(입차중일때)
  outCar(numbers) {
    const car = this.cars.find(car => car.numbers === numbers);

    if(car) {
      car.outServise();
      // 입차 유무 확인 -> 출차서비스 가능한지
    } else {
      console.log('해당 차량 없습니다.');
    }
  }

  // 특정 번호 차량 입차 서비스
  inCar(numbers) {
    const car = this.cars.find(car => car.numbers === numbers);

    if(car) {
      car.enterService();
      // 입차 서비스 가능한지
    } else {
      console.log('해당 차량 출차 중입니다.');
    }
  }
}

const newParkingArea = new ParkingArea();
newParkingArea.addCar('1234', 'a차량', 'a회사');
newParkingArea.addCar('5678', 'b차량', 'b회사');
newParkingArea.addCar('9123', 'c차량', 'c회사');

newParkingArea.displayCars();

newParkingArea.outCar('1234');
newParkingArea.displayCars();

newParkingArea.inCar('1234');
newParkingArea.displayCars();

newParkingArea.addCar('6543', 'd차량', 'd회사');
newParkingArea.displayCars();

