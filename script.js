
// select menu 
let select_carburant = document.getElementById("carburant");
let select_boite = document.getElementById("boit");
let carburant = ["Electrique", "Hybrid", "Essence", "Diesel"];
let boit = ["Manuelle", "Automatique"];
let price_pers;
let price_car;
let price_carburant;
let price_boite;


function check_type() {
    let choix = "<option>-- select ---</option>"
    var vehicle_type = document.getElementById("ver--type");

    switch (vehicle_type.value) {
        case "moto":
            select_carburant.innerHTML = choix;
            // for (let i = 0; i < 2; i++) {
            //     select_carburant.innerHTML += `<option value="${carburant[i]}"> ${carburant[i]}</option>`;
            // }
            // select_carburant.innerHTML += `<option value="${carburant[0]}"> ${carburant[0]}</option> <option value="${carburant[0]}>  ${carburant[0]}</option>`;
            select_carburant.innerHTML += `<option value="${carburant[0]}"> ${carburant[0]}</option>`;
            select_carburant.innerHTML += `<option value="${carburant[2]}"> ${carburant[2]}</option>`;
            select_boite.innerHTML = `<option value "none">none</option> `;
            price_car = 10;
            price_boite = 0 ; 
            break;


        case "citadin":
            select_carburant.innerHTML = choix;
            for (let i = 0; i < 4; i++) {
                select_carburant.innerHTML += `<option value="${carburant[i]}"> ${carburant[i]}</option>`;
            }
            select_boite.innerHTML = choix + `<option value="${boit[0]}"> ${boit[0]}</option>`;
            price_car = 12;
            break;


        case "compact":
            select_carburant.innerHTML = choix;
            for (let i = 1; i < 4; i++) {
                select_carburant.innerHTML += `<option value="${carburant[i]}"> ${carburant[i]}</option>`;
            }
            select_boite.innerHTML = choix + `<option value="${boit[0]}"> ${boit[0]}</option>`;
            price_car = 14;
            break;

        case "Berlin":
            select_carburant.innerHTML = choix;
            for (let i = 1; i < 4; i++) {
                select_carburant.innerHTML += `<option value="${carburant[i]}"> ${carburant[i]}</option>`;
            }
            select_boite.innerHTML = choix + `<option value="${boit[1]}"> ${boit[1]}</option>`;
            price_car = 20;
            break;

        case "utilitaire":
            select_carburant.innerHTML = choix;
            select_carburant.innerHTML += `<option value="${carburant[3]}"> ${carburant[3]}</option>`;
            select_boite.innerHTML = choix + `<option value="${boit[0]}"> ${boit[0]}</option>`;
            price_car = 16;
            break;


        case "Engin":
            select_carburant.innerHTML = choix;
            for (let i = 2; i < 4; i++) {
                select_carburant.innerHTML += `<option value="${carburant[i]}"> ${carburant[i]}</option>`;
            }
            select_boite.innerHTML = choix + `<option value="${boit[0]}"> ${boit[0]}</option>`;
            price_car = 900;
            break;

        case "camion":
            select_carburant.innerHTML = choix;
            select_carburant.innerHTML += `<option value="${carburant[3]}"> ${carburant[3]}</option>`;
            select_boite.innerHTML = choix + `<option value="${boit[1]}"> ${boit[1]}</option>`;
            price_car = 250;
            break;


        default:
            select_carburant.innerHTML = choix;
    }


}

function carburant_check() {
    switch (select_carburant.value) {
        case "Electrique":
            price_carburant = 0.05;
            break;

        case "Hybrid":
            price_carburant = 0.09;
            break;

        case "Essence":
            price_carburant = 0.14;
            break;

        case "Diesel":
            price_carburant = 0.21;
            break;

    }

}

function boit_check() {
    if (select_boite.value == "Automatique")
        price_boite = 0.19;
    else price_boite = 0;

}

function calcul() {
    let days_count = document.getElementById("days_count");

    price_pers = days_count.value * (price_car + (price_car * price_carburant) + (price_car * price_boite));

    // alert(days_count.value + " price_car " + price_car + " price_carburant " + price_carburant + " price_boite " + price_boite);
    var total = price_pers + " €";
    
    
    document.getElementById("result").value = total ;
   // alert("Price Total : " + price_pers + "€");
    
    
}
select_carburant.addEventListener("change", carburant_check);
select_boite.addEventListener("change", boit_check);
document.getElementById("submit").addEventListener("click", calcul);
