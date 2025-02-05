
//1 and 2
const listContainer = document.getElementById('list')

function list() {

    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name} <strong>$${client.balance}</strong>
      </li>
    `).join('');

}

listContainer.innerHTML = list(clients);

//3
function order(clients, property) {

    return clients.sort((a, b) => {
        if (typeof a[property] === "number") {
            return a[property] - b[property];
        }
        return a[property].toString().localeCompare(b[property].toString());
    });

}

//4
function total() {
    return clients.reduce((sum, client) => sum + client.balance, 0);
}





//5
function info(num) {
    return clients.find(client => client.index === num);
}


//6

const query = document.getElementById('query').value;


function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()))

}

