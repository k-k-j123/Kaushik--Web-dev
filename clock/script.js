let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displaytime(){
    let date=new Date();
    //getting hr min and sec
    let hh=date.getHours()
    let mm=date.getMinutes()
    let ss=date.getSeconds()
     
    let hR=30*hh + mm/2;
    let mR=6*mm;
    let sR=6*ss;

    hr.style.transform=`rotate(${hR}deg)`;
    min.style.transform=`rotate(${mR}deg)`;
    sec.style.transform=`rotate(${sR}deg)`;

}
setInterval(displaytime,1000);