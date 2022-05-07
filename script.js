let yes = 0;
let not = 0;
function result(course) {
    if (course == "Sim") {
        yes += 1;
        document.getElementById('SIM').innerHTML = yes;
        document.getElementById('SIM').style.width = (yes * 15)+"px";
    } else if (course == 'Nao') {
        not += 1;
        document.getElementById('NAO').innerHTML = not;
        document.getElementById('NAO').style.width = (not * 15)+"px";
    }
} 