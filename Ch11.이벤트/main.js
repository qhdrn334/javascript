/* 이벤트 
- HTML 요소에 대한 사건이다

이벤트 예시
-어떤 요소를 클릭하거나 커서를 올릴때
- 브라우저 창의 크기가 변경될때
- 키보드에서 키를 선택할때
- 웹 페이지가 로딩을 완료할때
- form 태그가 양식을 제출할때
- 비디오가 재생되거나,멈추거나,끝날때
- 오류가 발생했을 때
- 등등 / 클릭 자체가 이벤트 */


/*이벤트 등록하기
- 인라인 : HTML 요소에 직접 등록한다 . this 로 요소를 참조할 수 있다
- 프로퍼티 리스너 : HTML요소의 객체에 프로퍼티로 이벤트를 등록한다
- addEventListener() : HTML 요소의 객체에 addEventListener를 사용하여 등록한다 / 제일 권장되는 방식이다 
- removeEventListener() : addEventListener()로 등록했던 이벤트를 제거한다  */

//인라인
//<button onclick="alert('hello' + this.value);" value="world">인라인</button> - html에 직접 입력


//프로퍼티 리스너
let btn1 = document.getElementById("btn1");
btn1.onclick.function(); {
   alert("hello");
};

//addEventListener()
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",event1); 
function event1()  {
   alert("hello");
}

btn2.addEventListener("click",event2); 
function event2()  {
   alert("world");
}

btn2.removeEventListener("click",event1);   //위에서 함수명으로 등록을 해야 제거가 가능하다


/* 이벤트 종류
- 마우스 이벤트
  click : 마우스가 요소를 클릭했을 때 
  mousedown : 마우스가 요소 안에서 클릭이 눌릴 때
  mouseup : 마우스가 요소안에서 클릭이 해제될 때
  mouseover : 마우스가 요소안으로 진입했을 때 (자식요소까지)
  mouseenter : 마우스가 요소안으로 진입했을 때(해당 요소만)
  mouseout : 마우스가 요소 밖으로 나갔을 때(자식 요소까지)
  mouseleave : 마우스가 요소 밖으로 나갔을 때 (해당 요소만)
  mousemove : 마우스가 요소안에서 움직일 때

             */

  //마우스 이벤트
  let event = document.getElementById("event1");
  event.addEventListener("mouseover",function() {
   alert("hello");
  });


/* 키보드 이벤트
keydown : 키를 눌렀을 때
keyup : 키를 떼었을 때
keypress : 키를 누른 상태 

폼 이벤트
focus : 포커스가 이동되었을 때
blur : 포커스가 벗어났을 때
change : 요소에 값이 변경되었을 때
submit : 양식이 제출되기전에 발생 

진행 이벤트
load : 페이지의 로딩이 완료되었을 때
error : 에러가 발생했을 때
resize : 요소의 사이즈가 변경되었을 때
scoroll : 스크롤바를 움직였을 떄*/

//키보드 이벤트
let event3 = document.getElementById("event3");
event3.addEventListener("keydown",function() {
   alert("hello");
  });

//폼 이벤트
  let event3 = document.getElementById("event3");
event3.addEventListener("change",function() {
   alert("hello");
  });


  //진행 이벤트
  window.addEventListener("load", function()      {
   console.log("load!!!!!!");
  })
let event4 = document.querySelector("img"); //defer에서 async 바꿔줘야 된다
event4.addEventListener("error",function() {
   console.log("error !!!!!!");
});