   /*  배열
   - 값과 인댁스로 참조되어 정렬된 집합이다
   - index는 배열의 위치를 의미한다
   - 자바스크립트에서는 배열의 값은 서로 타입이 다를수 있고 비어있을수도 있다    */


/*  배열 표기
 - 리터럴 표기법, 생성자 표기법   */

 // 리터럴 표기법
//  let fruit = {`사과`,`바나나`,`딸기`};

 //생성자 표기법
 let fruit = new Array(`사과`, `바나나`, `딸기`)


 /* 배열 접근
 - 대괄호를{} 통해 배열안의 값에 접근할 수 있다
 - index는 0부터 시작한다   */

 
 console.log(fruit[0]);
 fruit[1] =" 포도";

console.log(fruit[1]);    // index 재할당


/* 배열에서 자주 사용하는 속성 및 매서드
- length : 배열의 길이
- push : 배열 끝에 항목 추가하기
- pop : 배열 끝에 항목 제거하기
- unshift : 배열 앞에 항목 추가하기
- shift : 배열 앞에 항목 제거하기
- forEach: 배열 항목을 순환하며 처리하기
- indexOf : 배열 안에서  index 찾기
- splice : 인덱스 위치에 있는 항목 제거하기      */

// console.log(fruit.length);    // 출력 값3 / 이 배열의 길이는 3이다

// fruit.push("오렌지"); 
// console.log(fruit);       // 배열 끝에 오렌지 추가되어 출력

//pop
// fruit.pop();
// console.log(fruit);   // 배열끝에 항목 제거된채로 출력

fruit.forEach(function (item, index, array)   {  // 값 , index , 배열 순으로 출력  
   console.log(item, index, array);
})


//indexOF   값으로 인덱스 찾기

let index = fruit.indexOf("사과");
console.log(index);

// splice 
// fruit.splice(0,1); // 0에서부터 1개만 제거해 /  앞에값부터 몇개를 제거할건지 / 0 = 인덱스 값 / 1 = 몇개를 제거할건지의 값 
// console.log(fruit); 


/*  구조 분해 할당
- 배열이나 객체의 속성값을 개별 변수에 담을 수 있게 하는 표현식이다     */

let apple = fruit[0];
let banana = fruit[1];
console.log(apple, banana);

let [apple, banana, strawberry] = fruit;    //식별자 열어서 변수명 작성후 대괄호 닫으면 한번에 하는 간편식
console.log(apple, banana, strawberry);

let [apple, ....other] = fruit;   // apple 제외하고는 배열형식대로 출력된다
console.log(apple);
console.log(other);       

/*  전개구분(spread syntax)  
- ... 표기법을 사용하여 값 말고도 뱌열안의 항목을 펼치는 방식으로 할당이 가능하다 */
let arr = [1, "a", 2, "b"];
let apread = [...arr, 3,"c"];   // arr안에 있는 배열을 펼쳐서 출력할것이다 ....arr 
console.log(apread);

function array(...temp) {   //함수가 파라미터를 배열로 받을 수 있다
   console.log(temp);
}


/* 배열의 복사
- 배열은 객체이기때문에 참조값을 갖고 있어서 이값을 다른 배열에 할당하면 같은 참조값을 갖기 떄문에 한 배열에서 값을 변경하면 다른 배열도 함꼐 변경이 된다.(얕은 복사)
*/

// let copy = fruit;  // 베열 복사
// copy.pop();               


// console.log(copy);       
// console.log(fruit);   




// 깊은 복사 구문
// 전개 구문 , Array.from, slice 

let copy = [...fruit];  //전개구문 방식
copy.pop();               

console.log(copy);       
console.log(fruit); // 기존 배열값은 보존 / 카피 된 내용만 별도 변경 가능 참조값 분리 가능


//Array.

let copy = Array.from(fruit);  //Array 방식
copy.pop();               

console.log(copy);       
console.log(fruit); 


//slice 

let copy = fruit.slice;  //slice 방식
copy.pop();               

console.log(copy);       
console.log(fruit); 