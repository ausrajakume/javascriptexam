/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
async function getDate() {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        return data
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  function init(){
    getDate().then(data => tableRander(data))
  }
  const result = document.querySelector("#output");
  function tableRander(users){
    const tableEl = document.createElement("table");
    users.forEach(item =>{
        tableEl.innerHTML += `
        <tr><td>${item.login}</td><td><img src=${item.avatar_url}></td></tr>
        `
    })
    result.append(tableEl)
    document.querySelector("p").style = "display: none"
  }
  document.querySelector("#btn").addEventListener("click", init)