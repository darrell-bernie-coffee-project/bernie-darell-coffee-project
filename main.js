"use strict"


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

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
    // tbody.innerHTML = renderCoffees(filteredCoffees);
}



function addACoffee(e) {
    e.preventDefault();
    var coffee = {
        name: document.getElementById("customCoffee").value,
        roast: document.getElementById("customRoast2").value
    };

    coffees.push(coffee);
    coffeesHtml.innerHTML=renderCoffees(coffees)

}



// the first search bar with keywords//

function myFunction() {
    // Declare variables
    var input, filter,  i;
    var filterTheCoffees =[]
    input = document.getElementById('myInput');

    filter = input.value.toUpperCase();
    // ul = document.getElementById("list");
    // li = ul.getElementsByTagName('li');

    // Loop through coffees array, and hide those who don't match the search query
    for (i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toUpperCase().includes(filter)) {
            filterTheCoffees.push(coffees[i])
        }
    }
    console.log(filterTheCoffees)
    coffeesHtml.innerHTML=renderCoffees(filterTheCoffees)
}











// function secondFunction() {
//     // Declare variables
//     var select, filter, ul, li, a, i, txtValue;
//     select = document.getElementById('selectRoast');
//
//     filter = select.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }





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




var coffeesHtml = document.querySelector("#renderCoffees")

var submitButton = document.querySelector('#Coffee-Name');
let submitButton2 = document.querySelector("#New-Coffee");
let roastSelection = document.querySelector("#selectRoast");


// tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener("change", function (){
    let selectedRoast = roastSelection.value;
    console.log(selectedRoast)
    let html = " "; var filterTheCoffees=[]
    coffees.forEach (coffee => {
        if (selectedRoast.toLowerCase() === coffee.roast) {
            filterTheCoffees.push(coffee)
        }
    })
    coffeesHtml.innerHTML = renderCoffees(filterTheCoffees);

})



coffeesHtml.innerHTML=renderCoffees(coffees)

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener("click", addACoffee);

// code to make hidden text appear:
// document.getElementById("myInput").addEventListener('change', function() {
//     if (document.getElementById("myInput").value.length > 1) {
//         document.getElementsByClassName("Coffee-Flavors").style.visibility = "visible";
//     } else {
//         document.getElementsByClassName("Coffee-Flavors").style.visibility = "hidden";
//     }
// });