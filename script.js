const liBtn = document.getElementById("libtn");
const disBtn = document.getElementById("disbtn");

const intiLi = 0;
const intiDis = 0;

let liCount = intiLi;
let disCount = intiDis;

liBtn.innerText = "👍 " + liCount;
disBtn.innerText = "👎 " + disCount;

function handelLike () {
    liCount++;
    liBtn.innerText = "👍 " + liCount;
    disableB();
    setCokie();

}

function handelDislike () {
    disCount++;
    disBtn.innerText = "👎 " + disCount;
    disableB();
    setCokie();
}
function disableB () {
    liBtn.disabled = true;
    disBtn.disabled = true; 
}
function setCokie (){
    document.cookie = "voted=true; SameSite=Strict; Max-Age=10"
}

window.onload = function () {
    if(document.cookie && document.cookie.indexOf("voted") > -1){  
         disableB();

    }
}