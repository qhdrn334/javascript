/* 객체는(object)
- 연관된 데이터를 담는 그릇이다
- 객체의 내용물이 바뀌어도 본질은 같은 객체이다
- 객체는 키(key)와 값(value)으로 이루어져 있다
- 객체가 가지고 있는 값을 속성(프로퍼티) 이라하며 함수인 경우는 매서드라고 한다
- 속성(프로퍼티)은 기본타입이 될 수도 있고 매서드를 가질수 있고
배열, 객체를 프로퍼티로 가질 수 있다          */

const obj = {     
   // name이 키(key)
   // 방윤정이 값(value)          
   name: `방윤정` ,     //속성(프로퍼티)
   age : 28,
   hello : function() {     //매서드
      console.log("hello");
   }
   hobby : [`운동`, `게임`, `독서`]
   score : (
      `수학` : 100,
      `영어 : 90`
   )
   parent : parent
}
const parent = {
   name: `홍길동`
};
// 위에 내용은 obj 라는 객체가 생성됨

/* 객체 생성
- 리터럴 방식 : 중괄호안에{}  key : value 형태를 쉼표로 구분하여 생성
- 생성자 방식 : new연산자와 object라는 생성자를 사용하여 생성   */


// 리터럴 방식
const object = {
   name : `방윤정` ,
   age : 28
};
// 위에랑 같은 내용 / 같은 방식
const object = {};
object.name = `방윤정`;
object.age = 28;

//생성자 방식
const object2 = new object();
object2.name = `방윤정`;
object2.age = 28;

console.log(object2);


/* 객체 프로퍼티 접근   
- 점 표기법, 괄호 표기법 */

const person = {
   name : `방윤정` ,
   age : 28 ,
   hobby : [`주짓수`, `독서`] ,
   hello : function()    {
       //매서드
       console.log("hello");
   },
   children : {
      name : "조윤진" ,
   },
};


//점 표기법
console.log(person.name);
console.log(person.age);
console.log(person.hobby);

console.log(person.hobbyp[0]);   //주짓수값 출력

person.children.name; // 객체 안에 객체 호출

//괄호 표기법
person[`name`];
person[`age`];
person[`hobby`][0];
person[`hello`]();
person[`children`][`name`];
console.log(person[`hobby`][0]);


/* 객체 프로퍼티 생성 및 제거           */

//생성
object.name = "방윤정";
object.age = 28 ,

//제거(delete 사용)
delete object.age;

/*함수 파라미터에 객체 전달하기 (매개변수)      */

function paintPerson(name, age, hobby)   {
   console.log(`이름 :` + name +`나이 :` + age +`취미 :` + hobby);
}
paintPerson("방윤정",28,"주짓수");

function paintPerson()   {
   console.log(`이름` + name +`나이` + age +`취미` + hobby);
}

const objPerson = {
  name : `방윤정` , 
  age : 28,
  hobby : `주짓수`
}
paintPerson2(objPerson);




/* 구조분해할당   
- 배열이나 객체의 속성을 개별 변수에 담을 수 있게 하는 표현식이다
      */
     const temp = {
      name : "방윤정" ,
      age : 28,
      job : "개발자" ,
     };
     
   //   const name = temp.name;
   //   const name = temp.age;
   //   const name = temp.job;

     // 구조분해 할당을 사용하여 개별 변수에 담을 때

   const{name, age,job} = temp; // key값을 기준으로 동일한 내용을 가지고 온다 / 배열과 차이점 / 배열은 순서대로 값을 가져온다

   // 구조분해 할당을 사용하여 함수에서 객체 개별 속성을 받을 때
function tempPerson({name,age,job})    {
   console.log(`이름` + name +`나이` + age +`직업` + job);
}
tempPerson(temp);



/* 팩토리 함수
- 객체를 반환하는 함수이다
- 같은 유형의 객체를 여러번 생성해야 하는 경우에 사용한다
- 같은 유형의 객체를 여러번 생성하면 번거롭고 가독성이 떨어지는데ㅐ 팩토리 함수를 사용하여 해결 할 수 있다       */

// 같은 유형의 객체를 여러번 생성
const person1 = {
   name : `방윤정`,
   age : 28,
   hobby : `주짓수`      // 단축 속성명도 가능 es6에서 추가됨 / age , hobby 요렇게
}

//위에 내용을 반복한다면 밑에 팩토리 함수 사용
function createPerson(name , age , hobby) {
   return {
      name : name,
      age : age,
      hobby: hobby
   };
}
const person4 = createPerson(홍길동,24,츅규);
const person5 = createPerson(고길동,20,츅규);
const person6 = createPerson(진길동,21,츅규);
const person7 = createPerson(나길동,25,츅규);



/*참조 타입(객체 타입) */

//기본 타입 (원시 타입 , 프리미티브 타입) 복사
//기본 타입은 복사할 때 가뵤 자체를 넘겨주기 떄문에 값의 원형이 바뀌지 않는다
let str1 = "hello";
let str2 = str1;
str2 = "worid";
console.log(str1);
console.log(str2);

//참조 타입 (객체 타입) 복사
// 객체를 다른 변수에 할당하면 참조값이 할당 되기 때문에 할당 받은 변수에서 속성을 변경하면 값의 원형이 변경됩니다. 참조값이 변경되기 때문에 변경된다
let obj1 = {name: `방윤정`, age: 28};
let obj2 = obj1;
obj2.age = 30;
console.log(obj1);
console.log(obj2);

// Call by Value기본타입(원시타입,프리미티브 타입) 호출
//값 자체를 username에 할당하기 떄문에 callName은 변경되지 않는다
function change(username) {
   username = `방윤정`;
}
let callName = `방정완`;
change(callName);
console.log(callName);


// Call by Reference :  참조 타입(객체 타입) 호출 
// 값을 가르키는 참조값을 people에 할당했기 때문에 people의 속성을 변경하면 callName의 속성값도 함께 변경이 된다 
function change2 (people) {
   people.name = "방윤정";
}
let callName2 = {name: "방정완"};
change2(callName2);
console.log(callName2);

/* 전개 구문 
- 객체안의 프로퍼티를 펼치는 방식으로 할당할 수 있다
- ...표기법으로 사용한다      */
const obj3 = {
   name : `방윤정` ,
   age : 28
};
const obj4 = {
   ...obj3,
   hobby : `주짓수`
}
console.log(obj4); 

/* 객체 복사(일반적인 올바른)
- 다른 참조값을 가지는 객채를 완전히 복사한다
- 전개 구문을 이용하는 복사, Object.assign()를 사용하는 복사         */


//전개구문 사용 복사
const obj5 = {                    
   name : `방윤정`
};
const obj6 = {...obj5};
obj6.name = "방정완";
console.log(obj5);       // 기존값 그대로 보존 후 복사
console.log(obj6);

//bject.assign() 사용 복사
const obj7 = {
   name : `방윤정`
};
const obj8 = obj7.assign({},obj7);
obj8.name = "방정완";
console.log(obj7);         // 기존값 그대로 보존 후 복사
console.log(obj8);



/* for .....in  
- 객체의 항목들을 반복하여 반환한다             */

const obj9 = {
   name: `방윤정`,
   age: 28,
   job : `개발자`,
};
for(let key in obj9) {
   console.log(key, obj9[key]);
}


/* 키 존재 여부 확인  */
// - key in object , Object.hasOwn(), obj.hasOwnProperty(). if문 사용

const obj10 = {
   name = `방윤정`
};
//key in object
console.log(`name` in obj10);   // true or false로 반환하여 key 존재 여부 확인 가능

//Object.hasOwn()
console.log(Object.hasOwn(obj10,`name`));   // true or false로 반환하여 key 존재 여부 확인 가능

//obj.hasOwnProperty()
console.log(obj10.hasOwnProperty("name"));    // true or false로 반환하여 key 존재 여부 확인 가능

//if문 사용
if (obj10.name)   {
   console.log("프로퍼티가 있습니다");     // 출력 문구로 반환하여 key 존재 여부 확인 가능
} else  {
   console.log("프로티가 없습니다");
}