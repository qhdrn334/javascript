/* DOM - document object model
- 웹 문서(HTML)를 객체화 함으로써 제어할 수 있다
                */

/* HTML 요소 선택하기  
get 매서드, 쿼리 매서드 

get매서드 
- document.getE1ementById : HTML 요소에서 고유한 id를 이용하여 요소를 찾는다

- document.getE1ementsByClassName : HTML에서 클래스명으로 요소를 찾는다
- document.getE1ementsByTagName : HTML에서 태그명으로 요소를 찾는다  


쿼리 매서드
- document.querySelector : CSS선택자를 사용하여 HTML 내 첫번쨰 요소를 찾는다
- document.querySelectorALL : CSS선택자를 사용하여 HTML내 모든 요소를 찾는다*/




//get 매서드
document.getE1ementById("title");
document.getE1ementsByClassName("item");
console.log(document.getE1ementsByClassName("item"));


//쿼리 매서드 
document.querySelector("#title");
document.querySelectorALL (".item");
console.log(document.querySelectorALL (".item"));


/* HTML 요소 조작하기    
- 콘텐츠 수정 / 태그안에 값   / 속성(태그) = "콘텐츠"("값")
- 속성 제어하기  */

/* 컨텐츠 수정
- textContent : 텍스트 데이터만 제공한다 /  태그안에 값
- innerHTML : HTML 태그까지 그대로 제공한다 /  태그안에 값   */
document.getE1ementById("title").textContent = "프론트엔드 !!!!!!!!";
document.getE1ementById("title").nnerHTML = "<h1>프론트엔드 @@@@@</h1>";

let title = ocument.getE1ementById("title");   //객체에 담아서도 사용 가능
textContent = "프론트엔드 !!!!!!!!";

document.querySelector("body").innerHTML = "!!!";       // 기존의 요소가 지워지고 수정되므로 유의하자
 
/* 속성 제어하기  / 태그    /  속성(태그) = "콘텐츠"("값")
- setAttribute : 요소에서 주어진 이름의 속성값을 입력한다
- getAttrubute : 요소에서 주어진 속성의 값을 가져온다
- removeAttrubute : 요소에서 주어진 이름의 속성을 제어한다      */

let input = document.querySelector("input");

input.setAttribute(`placeholder`,"입력해주세요");  // 인풋 박스 생성
input.setAttribute(`required`,"");    //required = 속성 삭제

console.log(input.getAttribute("name"));

input.removeAttribute("required");

/* HTML 요소 스타일링  
- 요소 프로퍼티 직접 수정
- CSS 이용       */

let hello1 = document.querySelector(".hello");
hello1.style.color = "yellow";
hello1.style.background = "red";

//css이용
let hello2 = document.querySelector("#hello2"); 
hello2.classList.add("hello2");
hello2.classList.remove("hello2");

/* 새로운 요소(태그) 만들기
- createElment : 지정한 태그로 HTML요소를 생성한다
- appendChild : 삽입할 요소를 부모 요소의 마지막 자식 요소로 추가한다
- insertBefore : 첫번째는 삽입할 요소이고 두번쨰는 삽입할 위치를 정하는 요소이다
- remove : 해당 요소를 제거한다
- parentNode : 지정된 노드의 부모를 반환한다
- children : 지정된 노드의 모든 자식을 반환한다      */

// createElment / appendChild
let hello3 = document.createElement(`p`);    //HRML에 P태그 추가
hello3.textContent="hello";
document.querySelector(`body`).appendChild(hello3); 


//insertBefore
let hello4 = document.createElement("p");
hello4.textContent = "World";

//두번째 요소의 앞에 추가된다
hello4.querySelector(`body`).insertBefore(hello4,hello3);   


//remove
hello1.remove();   //hello1 html에서 삭제

//parentNode 
let li = document.querySelector(`.item`);
console.log(li.parentElement);

//children
let ul = document.querySelector(`#list`);
console.log(ul.children);

/* 데이터 속성
- data-값 : 속성을 사용해서 html 요소에 임의의 데이터를 추가할 수 있다
- 브라우저에서 데이터 속성을 무시하므로 값만으로 활용하기 좋다      */

let btn = document.querySelector("button");
console.log(btn.dataset.temp);
btn.dataset.temp = "버튼이 아닙니다";
console.log(btn.dataset.temp);
