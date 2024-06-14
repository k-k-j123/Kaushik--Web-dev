const colors=["green","red","green","cyan","blue"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    const randno=getRandNo();
    console.log(randno);
    document.body.style.backgroundColor=colors[randno];
    color.textContent=colors[randno];
})

function getRandNo(){
    return Math.floor(Math.random()*colors.length)
}