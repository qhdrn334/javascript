/*  데이터타입
  - 값의 종류를 의미하고 기본타입과 객체 타입으로 나뉜다    */


  /* 기본타입
  - 값을 하나만 가지며 원시값이라고도 불린다
  - nuber(숫자) string(문자열)  boolean, lnull, undefined , symbol  */



  /* 객체타입 
   기본 타입을 제외한 값은 모두 객체 타입이다
    - Object (객체형) , Array(베열), Function(함수) 등 다양한 객체 존재   */




    /*  typeof
    - 피연산자의 데이터 타입을 문자열로 반환합니다   */

    



    // 숫자
    // number 타입이라고 한다
    // 자바나 다른언어는 점수 데이터 크기에 따라 키워드가 다양하지만 자바스크립트는 그냥 숫자만 적으면 된다
   // 숫자타입에서 특별한 값 
   // - Infinity -  양수를 0으로 나눈 경우
   // - Infinity - 음수를 0으로 나눈 경우
   // - NaN - 문자열을 나눈 경우


    let number1 = 1;
    const number2 = "안녕" /0;
    console.log( number2);


   /* 문자열
   - string 타입이라고 한다
   - 문자열을 표현할땐 작은 따옴표(') 큰따옴표("), 백틱(`) 3가지를 사용한다
   - 백틱은  EX6버전에서 도입되었다
   -  백틱은 여러줄 표현이 가능하다
   - 백틱은 템플릿 문자열을 더 편라하게 사용이 가능하다

   
   */
  let nameA = '홍길동';
  let nameB = "고길동";
  let nameC = `전길동`;

  let temp1 = `안녕하세요
  반갑습니다.`;
  console,log(temp1);
// 백틱 - 밑에 줄에 이어 써도 출력 가능 / 자동 줄바꿈 가능


// 템플릿 문자열
//    - 값과 문자열을 +기호를 사용하여 연결한다
//    - 백틱을 사용하면 더 편리하게 연결이 가능하다
let nameD = "전현우";
let age = 99;
console.log("내 이름은" + nameD + "입니다.  나이는" + age +"입니다")

// 백틱을 사용하게 되면
console.log(`내 이름은${nameD}입니다. 나이는${age}입니다`)

/*  이스케이프 표현 \\\\\\
 - 일반적인 문자 외에 특수 문자는 이스케이프 표현을 사용한다
 - \n    줄바꿈
 -  \\   백스페이스
 -  \"   큰따옴표
 -  \'   작은 따옴표
 -  \t   텝   */
 console.log("안녕하세요\n반갑습니다");



 /*  불린(boolean)
   - true와 false 두 가지 값만 가지는 논리형 데이터입니다
       */

   let isTrue = true;
   let isFalse = false;
   console.log(typeof isFalse);


/* 심볼
- 유일한 값을 나타내기 위해 ES6버전에서 도입한 데이터 타입이다
- 고유한 식별자가 핋요할 때 사용한다     */
let key1 = Symbol"abc";
let key2 = Symbol"abc";
console.log(key1 == key2); //심볼값을 주면 고유의 성질로 변경되기 떄문에 2개의 값이 같지 않다고 출력된다

console.log(key1.description);     //심볼값만 출력하면 뒤에 .description 추가 입력


/* null. underfined    
- null 은 값이 없는 상태
- underfined 은 값을 할당하지 않는 상태
  */

let messagel = null;  // 값이 빈 상태를 표현 / 나중에 값 추가 가능 / 단지 변수만 선언할때
let message2; 
console,log (message2); // 에러와 동일 / underfined 내용으로 출력된다

