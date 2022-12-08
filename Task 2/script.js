/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clicks = document.querySelector('#btn__element');
const container = document.querySelector('#btn__state');
let a = 0;
clicks.addEventListener("click", Counter);
function Counter() {
    a++;
    container.innerHTML = a;
}