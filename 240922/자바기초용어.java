/*
  # 접근 제한자(Access Modifiers)
  public: 어디서든 접근 가능
  protected: 같은 패키지, 상속 관계에 있는 클래스에서 접근 가능
  default: 같은 패키지 내에서 접근 가능
  private: 해당 클래스 내에서만 접근 가능

  # static
  static 변수
  - 클래스변수, 정적 변수
  - 클래스명.속성 형태로 사용
  - 모든 인스턴스에서 같은 값을 가질 경우 사용

  static 메서드
  - 클래스 메서드, 정적 메서드
  - 인스턴스화와 관계 없이 호출 가능
  - 클래스명.메서드(매개변수) 형태로 사용

  # final
  final 변수
  - 상수, 재할당 불가능
  - 변수명 대문자

  final 메서드
  - 상속 관계에서 자식 클래스가 오버라이딩(재정의) 할 수 없음

  final 클래스
  - 클래스 상속 불가

  # abstract
  abstract 클래스

  abstract 메서드
  - 구현부가 없음
  - 상속해서 자식 클래스에서 구현

  # interface vs abstract class
  interface
  - 추상메서드와 상수로 이루어짐

  abstract class
  - 추상 메서드 1개 이상 
  - 다른 클래스가 꼭 상속 받아야함

  # extend vs implements
  extends
  - 클래스 상속 관계에서 사용하는 키워드

  implements
  - 인터페이스를 구현할 때 사용 (추상메서드로 이루어져있어서 구현 필요)

  # super vs this
  this
  - 필드와 생성자 내 매개변수 이름이 같을 때 사용

  super
  - 상속관계에서 자식클래스에서 부모 클래스를 나타내기 위해 사용

  # Overloading vs Overriding
  오버로딩
  - 이름이 같은 메서드를 여러개 사용
  - 매개변수 개수나 이름이 달라야함

  오버라이딩
  - 상속관계에 있는 클래스 중 자식 클래스에서 부모 클래스에 있는 메서드를 재정의 하기 위해 사용

  # try - catch - finally
  try: 예외가 발생할 수 있는 코드 가지는 로직
  catch: 예외 발생 시 실행할 코드 가지는 로직
  finally: 예외 발생과 상관없이 실행되는 코드 가지는 로직
*/

