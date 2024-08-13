// 다음 요구사항을 충족하는 간단한 애플리케이션을 설계하고 작성하세요.

// 1. 사용자(User) 클래스를 작성하세요. 이 클래스는 다음과 같은 속성과 메서드를 가져야 합니다:
// - 속성: 이름(`name`), 나이(`age`), 이메일(`email`)
// - 메서드: 사용자 정보를 출력하는 `printInfo()` 메서드
// 2. 상품(Product) 클래스를 작성하세요. 이 클래스는 다음과 같은 속성과 메서드를 가져야 합니다:
// - 속성: 상품명(`name`), 가격(`price`)
// - 메서드: 상품 정보를 출력하는 `printProduct()` 메서드
// 3. 주문(Order) 클래스를 작성하세요. 이 클래스는 다음과 같은 속성과 메서드를 가져야 합니다:
// - 속성: 주문자(`user`), 주문한 상품(`product`), 주문 수량(`quantity`)
// - 메서드: 총 주문 금액을 계산하고 출력하는 `printOrderSummary()` 메서드
// 4. 사용자가 `User` 인스턴스를 생성하고, 상품을 선택하여 `Order`를 생성한 후, 주문 요약 정보를 출력하세요.



// User 클래스
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  // 사용자 정보 출력 메서드
  printInfo() {
    console.log(`이름: ${this.name} / 나이: ${this.age} / 이메일: ${this.email}`);
    }
  }



// Product 클래스
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // 상품 정보를 출력하는 메서드
  printProduct() {
    console.log(`제품명: ${this.name} / 가격: ${this.price}`);
  }
}


// Order 클래스
class Order {
  constructor(user, product, quantity) {
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }

  // 총 주문 금액을 계산하고 출력하는 메서드
  printOrderSummary() {
    console.log(`${this.user.name}이 구매한 ${this.product.name}의 총 주문 금액: ${this.product.price * this.quantity}`);
  }
}

let user = new User("선하영", 20, "aaa@com");
user.printInfo();

let prod = new Product("신발", 50000);
prod.printProduct();

let order = new Order(user, prod, 5);
order.printOrderSummary();