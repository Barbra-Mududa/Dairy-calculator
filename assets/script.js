var totalProductionD = g + h + i + j 
var sellingPrice = 45 


function sum(){
    g = Number(document.compute.g.value);
    h = Number(document.compute.h.value);
    i = Number(document.compute.i.value);
    j = Number(document.compute.j.value);

    totalProductionD = g + h + i + j 

    document.getElementById("daily").value = totalProductionD

    document.getElementById("weekly").value = totalProductionD * 45 * 7

    // document.getElementById("monthly").value = 

    document.getElementById("yearly").value = totalProductionD * 45 * 365

}




