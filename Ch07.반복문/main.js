//반복문
/* - 동일한 코드를 반복하여 실행시키는 명령문이다
- for문, while.ans, do while문     */


/* for문
- 정해진 숫자만큼 반복할때 사용한다
- for문의 괄호안에 초기화, 조건식, 표현식으로 구성되어있다
 */



/*실행순서
i 가 0으로 초기화 / i < 5 조건식에 만족하면  / for문안에 명령문을 실행 / i++  i값을 증가 / 다시 조건식을 만족하는지 확인하고 만족하면 계속 수행 / 조건식이 거짓이면 for문 종료     */
for(let i = 0; i < 5; i++) {
   console.log(i);  
}

//for문 연습
// length 배열길이 
let  fruit = [`사과`, `바나나`, `딸기`,`포도`, `오렌지` ];
for (let i =0; i< fruit.length; i++)   {
   console.log(fruit[i]);
}

/* while문
- 반복 횟수를 알 수 없을 때 사용
- 조건문이 true일 때 실행된다  */
let count = 0;
while (count < 5) {
   console.log(count);
   count++;    //종료되는 연산을 수행하지않으면 무한루프 발생
}

/* do shile문
- 반복 횟수를 알 수 없을때 사용한다
- 조건문이 true 일때 실행된다
- while문이 false여도 최초 한번은 명령문을 수행한다    */
let num = 0;
do {
   console.log(num);
   num++;
} while (num < 5); 

/* continue, break
-  continue : continue 아래에 있는 문장들을 건너뛰고 다음 반복 실행
- break  : 현재 진행하고 있는 제우문의 흐름을 종료한다   */


let text = '';
for (let i = 0; i <10; i++)    {
   if (i ==3) {
      continue;
   }
   text = text + i;
}
console.log(text); 

// for문 연습
//별찍기
for (let i = 0; i < 5 i++) {
   for (let j = 0; j <= i; j++) {
      document.write("*");
   }
   document.write("<br>");
}
document.write("---------------<br>");
//거꾸로 별찍기
for (let i = 0; i <  5; i++) {
   for (let j = 5; j > i; j--)
}    document.write("*");   {
    document.write("*");
}
document.write("---------------<br>");