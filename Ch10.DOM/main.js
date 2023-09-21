/* DOM - document object model
- 웹 문서(HTML)를 객체화 함으로써 제어할 수 있다
                */

/* HTML 요소 선택하기  
get 매서드, 쿼리 매서드 

get매서드 
- document.getE1ementById : HTML 요소에서 고유한 id를 이용하여 요소를 찾는다

- document.getE1ementsByClassName : HTML에서 클래시명으로 요소를 찾는다
- document.getE1ementsByTagName : HTML에서 태그명으로 요소를 찾는다  


쿼리 매서드
- document.querySelector : CSS선택자를 사용하여 HTML 내 첫번쨰 요소를 찾는다
- document.querySelectorALL : CSS선택자를 사용하여 HTML내 모든 요소를 찾는다*/




//get 매서드
document.getE1ementById("title");
document.getE1ementsByClassName("item");
console.log(document.getE1ementsByClassName("item"));


//쿼리 매서드 
document.querySelector(#title);
document.querySelectorALL (".item");
console.log(document.querySelectorALL (".item"));


