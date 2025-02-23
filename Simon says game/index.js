var body = document.querySelector("body");
var level = document.querySelector("h3");
var playground = document.querySelector(".playGround");
var helpbtn = document.querySelector(".btn");
var boxes = document.querySelectorAll(".box"); // it is an array 

let started = false;
let memArr = [];
let userArr = [];
let levelnum = 0;

let num = 0 ;
let click = 0;
let score = 0;

playground.addEventListener('click', (event) => {
    if (started) {
        if (event.target.classList.contains('box')) {
            userflash(event.target);
            click++;
            console.log(memArr);
            userArr.push(event.target.id);
            console.log(userArr);
            checker();
            
        }
    }
});

function checker(){
    if(userArr[click - 1] != memArr[click - 1]) {
        gameover();
        level.innerText = `you have lost the game, your score is ${score}`
        started = false;
        userArr = [];
        memArr = [];
        click = 0;
        num = 0;
        levelnum = 1;

    } else {
        num++;
    }
    if(num == memArr.length && num  != 0){
        score += 10;
        userArr = []
        click = 0;
        num = 0;
        setTimeout(selectBox , 400);
    }
}


body.addEventListener('keydown',   () => {
   if(started == false){
        started = true;
        selectBox();   
     }
});

function  selectBox() {
    level.innerText = `Level ${levelnum} `
    levelnum++;
    

    let randomVal = Math.floor( (Math.random()*4) );
    memArr.push(boxes[randomVal].id); // 0 to 3  jaye ga , it is an array
    boxflash(randomVal);

} 
function boxflash(IntegerVal){
    boxes[IntegerVal].classList.add('flash');

    setTimeout(function(){
        boxes[IntegerVal].classList.remove('flash');
    }, 300);
}

function userflash(box){
    box.classList.add('userflash');

    setTimeout( ()=> {
        box.classList.remove('userflash');
    }, 200);
}
function gameover(){
    body.classList.add('gameover');

    setTimeout( ()=>{
        body.classList.remove('gameover');
    },250);
}
helpbtn.addEventListener('click', ()=> {
   let initialText = level.innerText;
   
   level.innerText = `Memory array is : ${memArr}`

   setTimeout( ()=> {
    level.innerText = initialText ;
   },2000)
})

