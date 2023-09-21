/* 조건문
- 조건의 따라 다른 문장을 실행하는 명령문
- if / switch   */

/* if문
if : 조건이 ture인 경우 명령문 실행한다
else : false인 경우 명령문을 실행한다 
else if : 다중조건을 의미하고 여러개의 조건을 확인할 수 있다

null, 0 , NaN, 빈문자열(""), undefined는 falses로 간주한다 
*/

let condiyion = false;
if (condiyion)   {
   console.log("참 입니다.");
} else     {
   console.log("거짓 입니다");
}


let number = 10;
if (number ==10)    {
   console.log("첫번쨰 블록");
} else if (number ==20)    {
   console.log("두번째 블록");
} else if (number ==30)    {
   console.log("세번째 블록");
}else (number ==40)    {      // 나머지 모두  else
   console.log("네번째 블록");
}

// if 실습
//논리연산자사용하는  if문

// let score = prompt("점수를 입력해주세요")   //prompt 사용 시 웹브라우져 상 입력값 창이 뜬다
// let isPass = score >= 60;             //isPass는 합격 불합격 여부를 알기 위한 식 /  score는 점수값을 알기 위한 식 / 식의 의도가 다르다 
// if(isPass && score >= 90) {
//    console.log("A학점, 합격입니다");
// }else if (isPass && score >= 80)  {
//    console.log("B학점, 합격입니다");
// } else if (isPass && score >= 70)  {
//    console.log("C학점, 합격입니다");
// }else if (isPass && score >= 60)  {
//    console.log("D학점, 합격입니다");
// } else  {
//    console.log("F학점, 불합격입니다");
// }



/* 다중 조건문  - 조건문 안에 조건문을 다중으로 사용 할 수 있다 */
let passwordCheck = true;
let userRole = "admin";
if (passwordCheck)   {
   if(userRole === "admin")   {
      console.log("관리자로 로그인 합니다");
   } else if (userRole === "user") {
      console.log("사용자로 로그인합니다");
   } else  {
      console.log("페이지 접근이 제한되었습니다");
   }
} else {
   console.log("비밀번호를 잘못 입력했거나 없는 아이디입니다");
}


/*  switch문
- switch 문의 값이 case조건과 일치할 경우 해당  case절의 명령문 수행
- case절의 명령문을 수행한 후 break를 만나면 switch문을 종료
- 일치하는 case절이 없으면 default절의 명령문을 수행        */

let subject = "javascript";    // 입력된 값이 일치하면 명령문 수행
switch (subject)   {
   case "javascript";
    console.log("자바스크립트 수업입니다");
    break;
   case  "css"  
   console.log("css 수업입니다");
   break;
   case  "html"  
   console.log("html 수업입니다");
   break;
   default;
   console.log("모든 case절과 일치하지 않음");
}

//실습

let score = prompt("점수를 입력해주세요")
let value = Math.floor(score / 10);    // floor는 점수값보다 한단계 작은 단위로 적용하는 성질이 있다 / 양수일떄는 문제 없 / 음수는 문제 있
switch(score) {
case 10;
case 9;
console.log("A 학점입니다");
break;                           //break가 없으면 로직이 계속 내려온다
case 8;
case 7;
console.log("B 학점입니다");
break;
case 6;
case 5;
console.log("C 학점입니다");
break;
default;
console.log("F 학점입니다");  //위에 아므조건이 안맞으면 default;로 내려온다


}








