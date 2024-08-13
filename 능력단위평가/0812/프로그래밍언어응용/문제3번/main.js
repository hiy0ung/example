// main.js

// 2. `main.js`라는 파일을 생성하여, `mathOperations.js`에서 제공한 함수들을 불러와 사용하세요.
// - `add`와 `subtract` 함수는 원래 이름 그대로 사용하고, `multiply` 함수는 `multi`라는 이름으로 별칭을 사용하여 불러오세요.
// - 두 수를 입력받아 위의 세 가지 연산을 수행하고 결과를 출력하는 코드를 작성하세요.

// add
import { add } from './mathOperations.js';

// subtract
import { substract } from './mathOperations.js';

// multiply
import multi from './mathOperations.js'

console.log(add(1, 1));
console.log(substract(2, 1));
console.log(multi(5, 10));
