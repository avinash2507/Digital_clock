const hourcomponent = document.getElementById("hour");
const minutecomponent = document.getElementById("minute");
const secondcomponent = document.getElementById("second");
const ampmcomponent = document.getElementById("ampm");
function liveTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
if (h > 12) {
    h = h-12
    ampm = "PM";

}
h = h <10 ? "0" + h : h;

hourcomponent.innerText = h ;
minutecomponent.innerText = m;
secondcomponent.innerText = s ;
ampmcomponent.innerText = ampm;
setTimeout(() => {
    
    liveTime();
}, 1000);

}
liveTime();
