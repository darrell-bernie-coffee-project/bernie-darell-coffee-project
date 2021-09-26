"use strict"


function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// function addACoffee(e) {
//     e.preventDefault();
//     var coffee = {
//         id: coffees.length + 1,
//         name: document.getElementById("customCoffee").value,
//         roast: document.getElementById("customRoast2").value
//     };
//
//     coffees.push(coffee);
//     updateCoffees(e);
//     document.getElementById("customCoffee").value = " ";
// }

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');

    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function secondFunction() {
    // Declare variables
    var select, filter, ul, li, a, i, txtValue;
    select = document.getElementById('selectRoast');

    filter = select.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#Coffee-Name');
let submitButton2 = document.querySelector("#New-Coffee");
let roastSelection = document.querySelector("#selectRoast");


// tbody.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener("click", function(){
    let selectedRoast = roastSelection.value;
    let html = "";
    coffees.forEach (coffee => {
        if (selectedRoast === "light"){
            return "hey this is a test";
        }
    })
})

// let input = document.querySelecto);
// adding text to html
// function newCoffee () {
//     document.getElementById("myUL").innerHTML += input;
// }

// roastSelection.addEventListener("click", function (){
//     let selectedRoast = roastSelection.value;
//     let html = " ";
//     coffees.forEach (coffee => {
//         if (selectedRoast === coffee.roast) {
//             console.log(renderCoffee(coffee));
//             tbody.innerHTML = html += renderCoffee(coffee);
//         } else if (selectedRoast === "all") {
//             tbody.innerHTML = renderCoffees(coffees);
//         }
//     })
// })

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener("click", updateCoffees);

// code to make hidden text appear:
// document.getElementById("myInput").addEventListener('change', function() {
//     if (document.getElementById("myInput").value.length > 1) {
//         document.getElementsByClassName("Coffee-Flavors").style.visibility = "visible";
//     } else {
//         document.getElementsByClassName("Coffee-Flavors").style.visibility = "hidden";
//     }
// });