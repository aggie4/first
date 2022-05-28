let computerNumber = 0;
let paly_button = document.getElementById('play_button'); //html에서 버튼태그 자바스크립트 연결, / document(html에 보여주기) getElementById(아이디이름(명칭))
/* 
    document는 DOM트리의 최상위 객체이다
    DOM(Document Object Model)이라 하면 자바스크립트 입장에서 그저 일종의 문자열일 뿐인 HTML을 자바스크립트가 이해할수있게 객체의 형태로 바꿔둔것이다.
    (Document를 HTML이라고 이해하면 편하다.) 이 DOM을 이제 자바스크립트가 마음대로 컨트롤할 수 있어야하는데 이때 필요한 기본 함수들과 속성값을 제공해주는게 document라는 객체이다.
*/
/* 
    document.getElementById : id로 선택
    document.getElementByClassName : class로 선택, 같은 class가 여러개있을 경우엔 모두 다 선택이 되서 배열에 저장된다.
*/
/* 
    document.querySelector : id, class둘다 선택이 가능하고 좀 더 디테일한 선택이 가능하다 참고로 선택가능한 값이 여러개가 있을경우 그 중 첫번째 태그 하나만 반환한다.
    
    let userInput =  document.querySelector("#user-input");
    >> id=user-input을 선택
    
    iet resultAreaImg =  document.querySelector(".main-img");
    >> class=main-img를 선택

    let menus =  document.querySelector("nav a");
    >> nav태그밑에있는 a태그를 선택

     document.querySelectorAll : 위에  document.querySelector와 같다 하지만 all에서 알수있듯이 선택된 값 모두를 NodeList에 담아 반환한다.
*/
console.log(paly_button); //콘솔창 확인하면 연결이 됐다는 걸 확인 가능
function pickRandomNumber() { //랜덤숫자 뽑기 할 함수
    computerNumber = Math.floor(Math.random() * 100) +1; // 랜덤한(소수점) 곱하기100 > floor(소수점 없애기) 99까지만 나와서 +1해서 100포함
    /* 
        Math : 자바스크립트에서 유용한 객체중 하나인 Math.
        수학적으로 어지간한 함수들이 다 들어가있다.
        Math.random() : 0~1사이의 값을 반환(1에 근접한값까지만, 1은 미포함)
        Math.floor() : 소수점 버림
        Math.ceil() : 소수점 반올림
        Math.round() : 소수점 반올림
        Math.max() : 여러개의 값중 제일 큰값반환
        Math.min() : 여러개의 값중 제일 작은값 반환
        등등 여러가지 유용함 함수들이 많으니 참고
    */
    console.log(computerNumber);
}
pickRandomNumber();
// 랜덤숫자
