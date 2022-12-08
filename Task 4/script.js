/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
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
