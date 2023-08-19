const startBtn=document.querySelector(".start-btn")
const guide=document.querySelector(".guide")
const exit=document.querySelector('.exit')
const main=document.querySelector(".main")
const Continuebtn=document.querySelector('.continue-btn')
const questionsec=document.querySelector('.question')
const quizbox=document.querySelector(".quiz-box")
const result=document.querySelector(".result")
const trya=document.querySelector(".try")
startBtn.onclick=()=>{
    guide.classList.add('active');
    main.classList.add('active');
}
exit.onclick=()=>{
    
    guide.classList.remove('active')
    main.classList.remove('active')
}
Continuebtn.onclick=()=>{
questionsec.classList.add('active');
guide.classList.remove('active')
main.classList.remove('active')
quizbox.classList.add('active')
show(0);
scorehead();
}
trya.onclick=()=>{
    quizbox.classList.add('active');
   next.classList.add('active')
        result.classList.remove('active');
        qc=0;
   uscore=0;
   questionnum=1;
   show(qc);
   scorehead();
   
}
let qc=0;
let questionnum=1;
let uscore=0;
const next=document.querySelector(".next-btn")
const total1=document.querySelector(".total1")

next.onclick=()=>{
    if(qc<questions.length-1){
        qc++;
    show(qc);

    }
    else{
        console.log("questions over")
        res();

    }
    
    let totalq=`<span class="total">${qc+1} of ${5} questions</span>`
    total1.innerHTML=totalq
    

}
const optionlist=document.querySelector(".option-list")
function show(index){
    const questiontext=document.querySelector('.question-text')
    questiontext.textContent=`${questions[index].num}.${questions[index].question}`;
    let optionpart=`<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`
    optionlist.innerHTML=optionpart;
    const option=document.querySelectorAll('.option')
    for(let i=0;i<option.length;i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }

} 
function optionSelected(answer){
    let userAnswer=answer.textContent;
    let correctanswer=questions[qc].answer;
    
    let alloptions=optionlist.children.length;
     console.log(correctanswer);
     if(userAnswer==correctanswer){
        console.log("ans is correct");
        answer.classList.add('correct');
        uscore+=1;
        scorehead();
     }
     else{
        console.log("ans is wrong")
        answer.classList.add('incorrect');
        for(let i=0;i<alloptions;i++){
            if(optionlist.children[i].textContent==correctanswer){
                optionlist.children[i].setAttribute('class','option correct')
            }
         }
     }
     
     for(let i=0;i<alloptions;i++){
        optionlist.children[i].classList.add('disabled')
     }
     next.classList.add("active")
}
function scorehead(){
    const scoretext=document.querySelector(".score")
    scoretext.textContent=`Score:${uscore}/${questions.length}`;

}
function res(){
    quizbox.classList.remove('active');
    
        result.classList.add('active');
        const scoretex=document.querySelector('.score-text')
        scoretex.textContent=` Your Score is ${uscore}/${questions.length}`;
    
}
