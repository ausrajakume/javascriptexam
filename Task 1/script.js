/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const kiloInput = document.querySelector("#search");
const result = document.querySelector("#output");
const formEl = document.querySelector("form");
formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const lb = kiloInput.value * 2.2046;
    const g = kiloInput.value / 0.0010000;
    const oz = kiloInput.value * 35.274;
    result.innerHTML = `<h2>lb: <span>${lb}</span></h2><h2>g: <span>${g}</span></h2><h2>oz: <span>${oz}</span></h2>`
})