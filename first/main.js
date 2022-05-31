let computerNumber = 0;
let playButton = document.getElementById('play_button'); //html에서 버튼태그 자바스크립트 연결, / document(html에 보여주기) getElementById(아이디이름(명칭))
let uesrInput = document.querySelector('#user_input'); //html에서 인풋태그 자바스크립트 연결,
let resultArea = document.getElementById('result_area');
let resetButton = document.querySelector('#reset_button');
let chanceArea = document.getElementById('chance_area');
let chances = 7; //클릭을 했을 때 마다 기회는 사라진다.
let gameOver = false; //기회가 다 사라졌을 때 실행종료
let userValueList = [];
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
    document.querySelector : id, class둘다 선택이 가능하고 좀 더 디테일한 선택이 가능하다 참고로 선택가능한 값이 여러개가 있을경우 그 중 "첫번째 태그 하나"만 반환한다.
    
    let userInput =  document.querySelector("#user-input");
    >> id=user-input을 선택
    
    iet resultAreaImg =  document.querySelector(".main-img");
    >> class=main-img를 선택

    let menus =  document.querySelector("nav a");
    >> nav태그밑에있는 a태그를 선택

    document.querySelectorAll : 위에  document.querySelector와 같다 하지만 all에서 알수있듯이 선택된 값 모두를 NodeList에 담아 반환한다.
*/
playButton.addEventListener('click', play);
/* addEventListener('이벤트이름' , '이벤트 발생시 실행시킬 함수의 이름') 
    이벤트 이름은 사용되어 지는 것들이 많다. hover 등등
*/
resetButton.addEventListener('click', reset);
/* 리셋버튼을 누르면 초기화를 시키겠다 */
uesrInput.addEventListener('focus', function () {
    uesrInput.value = '';
}); // 메모리 공간 활용 , 익명함수기능. / 단) 함수의 내용이 단수로운 내용이고 함수의 내용이 다른곳에 사용되지 않는다면 사용 가능
function pickRandomNumber() {
    //랜덤숫자 뽑기 할 함수
    computerNumber = Math.floor(Math.random() * 100) + 1; // 랜덤한(소수점) 곱하기100 > floor(소수점 없애기) 99까지만 나와서 +1해서 100포함
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
function play() {
    const USER_VALUE = uesrInput.value; //value 사용자가 적은 값 / USER_VALUE에 저장
    if (USER_VALUE < 1 || USER_VALUE > 100) {
        resultArea.textContent = '1부터 100 사이의 숫자를 입력 해주세요~~';
        return; // 함수의 아웃풋
    }
    if (userValueList.includes(USER_VALUE)) {
        resultArea.textContent = '입력한 숫자니까 다른 거 입력하시오';
        return;
    }
    userValueList.push(USER_VALUE);
    if (USER_VALUE < computerNumber) {
        resultArea.textContent = 'Up~~'; //,textContent = 글자가 나타난다
    } else if (USER_VALUE > computerNumber) {
        resultArea.textContent = 'Down~~';
    } else {
        resultArea.textContent = '정답!!';
        gameOver = true;
    }
    /* 
        다양한 노드의 속성값

        textContent : 노드의 text값을 반환
        
        innerText : 노드의 text값을 반환, textContent랑 비슷하지만 textContent는 모든 요소를 반환하는 반면에,
                    innerText는 사람이 읽을 수 있는 요소만 가져온다. (글자사이에 여백이 많다면 textContent는 있는 그대로, 가져오는 반면에 innerText는 여백을 한칸정도만 남기고 가져온다.)
        
        innerHTML : html 요소를 반환

        셋의 차이를 잘 보여주는 예제코드.
        다음 코드를 실행시켜보면 차이가 확연하게 들어난다.

        HTML 상의 마크업
        <h1 id='test'>
            <div>Hello     world</div>
        </h1>

        script 상의 코드
        let test = document.getElementById("test")
        console.log(test.innerText)
        console.log(test.textContent)
        console.log(test.innerHTML) 
        차이점 : 띄어쓰기 반환.

        이외에도 다양한 노드 속성과 함수는 다음 사이트에서 확인 가능하다.
        https://developer.mozilla.org/ko/docs/web/API/Node
    */
    chances--; //go버튼을 누를 때 마다 기회가 하나씩 사용
    chanceArea.innerHTML = `남은 기회 : ${chances}번`; //백틱 `` 사용 , 동적이값 고정적인값 같이 사용 가능
    if (chances == 0) {
        gameOver = true;
    }
    if (gameOver == true) {
        playButton.disabled = true;
    }
    /* 기회가 0이 되었을 때 버튼을 클릭할 수 없게 만든다 */
}
function reset() {
    pickRandomNumber();
    uesrInput.value = ''; //빈공간으로 만들기
    resultArea.textContent = '결과가 나온다.';
    gameOver = false;
    playButton.disabled = false;
    chances = 7;
    chanceArea.innerHTML = `남은 기회 : ${chances}번`;
    userValueList = [];
}
//리셋버튼
pickRandomNumber();
// 랜덤숫자
