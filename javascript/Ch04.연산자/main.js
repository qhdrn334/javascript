/*  연산자
- 어떠한 연산을 기호를 사용하여 수행한다
  */
 /*  
 문자열 병합
 문자열은 + 연산자를 사용하여 병합할 수 있다
   */
  console.log("안녕" + "하세요");
  console.log("1" + 2);  // 문자열과 병합하면 number도 string이 된다
  console.log("1" + 2 + 3); // 문자열이 먼저 나와서 123 으로 출력
  console.log(1 + 2 +"3");    // 문자열이 뒤에 나와서 33으로 출력


  /*  산술 연산자
   -   뺄셈
   +   덧셈
   *   곱셋
   /   나눗셈
   %   나머지    */


   let x = 9;
   let y = 2;
   console.log(x + y);
   console.log(x - y);
   console.log(x * y);
   console.log(x / y);
   console.log(x % y);   // 나머지 1만 출력됨

   
   /*  증감 연산자
    ++x : 전위 증가(x에 1을 증감 시킨후에 명령문 수행)
    x++ : 후위 증가(현재 명령문을 수행 후  x에 1을 증가)
    --x : 전위 감소(x에 1을 감소시킨 후에 명령문 수행)
    x--:  후위 감소(현재 명령문을 수행 후에  x에 1을 감소)     */

    //let result = ++x +y;     전위 증가
    //let result = x++ +y;     후위 증가
    //let result = --x +y;     전우 감소
    //let result = x-- +y;     후위 감소

    console.log(result);  
    console.log(x);
    console.log(y);

    /* 비교연산자
      a  >  b  : a가 b보다 크다
      a  <  b : a가 b보다 작다
      a >= b : a가 b보다 크거나 같다
      a <= b : a가 b보다 작거나 같다
      a == b : a와 b는 같다
      a === b  : a와 b는 같다 / 데이터 타입까지 같다  
      a  != b : a는 b와 같지 않다
      a  !==  b : a와 b는 같지 않다 / 데이터 타입까지
        */

      let a = 2;
      let b = "3";
      console.log(a > b);
      console.log(a >= b);
      console.log(a != b);
      console.log(a == b);
      console.log(a === b);

      /* 할당 연산자
       x   +=  y : x = x + y 와 같다
       x   -= y : x = x - y 와 같다
       x   *= y : x = x * y 와 같다
       x   /= y : x = x / y 와 같다    */
       
   let i = 10;
   let j = 20;
   // i = i + j;

   i += j;
   console.log(i);


   /*  논리연산자
    - 논리 연산자는 boolean 값만 다룰 수 있지만 자바스크립트만 모든 타입의 값을 받을 수 있고 결과 역시 모든 타입이 될 수 있다
    - null, 0 , NaN, 빈문자열(""), undefined는 falses로 간주한다
    
    AND 연산자 (&&) 
    - 피연산자가 모두 true 일 경우에 true를 반환하고 나머지는 false를 반환 
    
    OR 연산자 (||)
    - 피연산자가 하나라도 true면 true를 반환하고 나머지는 false로 반환  
    
    NOT 연산자(!)
    - true면 false를 반환하고, false면 true를 반환한다
    
    단축 평가
    - AND 연산에서 앞쪽 피연산자가 false 일 떄 
      OR연산에서 앞쪽 피연산자가 true일 떄 나머지 피연산자의 평가를 생략하고 그대로 반환한다*/

    let a1 = true && true;
    let a2 = true && false;
    let a3 = true && 3 == 4;    // 3==4 는 false 랑 동일 , 틀린 값이니깐
    let a4 = 111 && 222;        // 기본적으로 문자나 숫자만 쓰면 true로 간주 / 222 값으로 출력 /  앞이 참이니 뒤까지 확인해야되서 222로 출력 /  AND여서 모두 해당되야 되니
    let a5 = 111 && false;   
    let a6 = null && undefined;  // null 로 출력  / 앞이 거짓이니 뒤까지 확인할 필요 없어서 null로 출력 / AND여서 모두 해당되야 되니
    console.log(a2);  


    let o1 = true || false; // or은 true값으로 출력

    
    let n1 = !true;   //  반대로 출력 false
    let n2 = !false;  //  반대로 출력 true
    let n2 = !111;    //  반대로 출력 false




    /* 삼항연산자
    - 조건식 ? 값1 : 값2
    - 조건식이 true이면 값1을 반환하고 false이면 값2를 반환한다         */

    let number = 11;

    let result2 = number / 2 == 1 ?   "홀수입니다." : "짝수입니다.";
    console.log(result2);

 