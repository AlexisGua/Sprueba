window.onload = function () {
    document.getElementById("bcalcular").onclick = calcularE;
}

function calcularE() {

    window.addEventListener("load", () => {
        const bcalcular = document.querySelector(".bcalcular")
        bcalcular.style.opacity = 0
        bcalcular.style.visibility = "hidden"
    })

    let a = Number(document.getElementById("Produccionf").value);
    let b = Number(document.getElementById("Tari").value);
    let c = Number(document.getElementById("CostoP").value);
    let d = Number(document.getElementById("Precio").value);


    let IngresosE = a * b.toFixed(2);
    let ct = c * a
    let IngresosG = IngresosE - ct
    let UtilidadT = IngresosG * 0.15
    let ImpuestoR = (IngresosG - UtilidadT) * 0.25;
    let RentaE = IngresosG - UtilidadT - ImpuestoR
    let IngresosB = a * d
    let MargenS = IngresosB * 0.25
    let CostosTr = a * 1.44
    let CostosCo = a * 0.2
    let Ley10 = a * 1
    let Ley40 = a * 0.3
    let Rent = MargenS + Ley10 + Ley40 + UtilidadT + ImpuestoR
    let RentaEs = Rent + (IngresosB - MargenS - CostosTr - CostosCo - Ley10 - Ley40 - IngresosE)
    let total = RentaE + RentaEs
    let PorcentajeE = (RentaE / total) * 100
    let PorcentajeEs = (RentaEs / total) * 100



    let tabladRef = document.getElementById("tablad");
    let newTransactionRowRef = tabladRef.insertRow(-1);

    let newtypeCellRef = newTransactionRowRef.insertCell(0);
    newtypeCellRef.textContent = Number(d).toFixed(2);

    newtypeCellRef = newTransactionRowRef.insertCell(1);
    newtypeCellRef.textContent = Number(a).toFixed(2);

    newtypeCellRef = newTransactionRowRef.insertCell(2);
    newtypeCellRef.textContent = Number(RentaE).toFixed(2);

    newtypeCellRef = newTransactionRowRef.insertCell(3);
    newtypeCellRef.textContent = Number(PorcentajeE).toFixed(2);

    newtypeCellRef = newTransactionRowRef.insertCell(4);
    newtypeCellRef.textContent = Number(RentaEs).toFixed(2);

    newtypeCellRef = newTransactionRowRef.insertCell(5);
    newtypeCellRef.textContent = Number(PorcentajeEs).toFixed(2);

    let newDeleteCell = newTransactionRowRef.insertCell(6);
    let deleteButton = document.createElement("button");

    PartEs()

    function PartEs() {
        let a = Number(document.getElementById("Produccionf").value);
        let c = Number(document.getElementById("CostoP").value);
        let d = Number(document.getElementById("Precio").value);
        let con = []
        for (let h = 100000; h <= 1000000; h++) {
            i = h / 1000000000
            ProduccionPE = i * a;
            let IngresosBr = ProduccionPE * d;
            Ctrans = ProduccionPE * 1.44;
            Ccomerc = ProduccionPE * 0.2;
            CPPr = c * ProduccionPE;
            let IngresosAP = IngresosBr - Ctrans - Ccomerc - CPPr;
            let UtilidadTP = IngresosAP * 0.15;
            let ImpuestoRP = (IngresosAP - UtilidadTP) * 0.25;
            let RentaEP = (IngresosAP - UtilidadTP - ImpuestoRP).toFixed(0)
            con.push(RentaEP)
        }


        let qqq = con
        rr = Number(RentaE / 1000);
        let index = qqq.indexOf((rr).toFixed(0))
        let porcentaje = ((index + 100000) / 10000).toFixed(2)
        


        newtypeCellRef = newTransactionRowRef.insertCell(7);
        newtypeCellRef.textContent = (porcentaje)

        deleteButton.textContent = "Eliminar";
        newDeleteCell.appendChild(deleteButton)

        deleteButton.addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove()



        })
    }
}


document.getElementById("calcularp").onclick = calcularp;


function calcularp() {

    let a = Number(document.getElementById("Produccionf").value);
    let c = Number(document.getElementById("CostoP").value);
    let d = Number(document.getElementById("Precio").value);
    let P = Number(document.getElementById("Pcontratista").value);

    ProduccionPE = (P / 100) * a;
    let IngresosBr = ProduccionPE * d;
    Ctrans = ProduccionPE * 1.44;
    Ccomerc = ProduccionPE * 0.2;
    CPPr = c * ProduccionPE;
    let IngresosAP = IngresosBr - Ctrans - Ccomerc - CPPr;
    let UtilidadTP = IngresosAP * 0.15;
    let ImpuestoRP = (IngresosAP - UtilidadTP) * 0.25;
    let RentaEP = (IngresosAP - UtilidadTP - ImpuestoRP)

    let tabladpRef = document.getElementById("tabladp");
    let newTransactionRowRef = tabladpRef.insertRow(-1);

    let newtypeCellRef = newTransactionRowRef.insertCell(0);
    newtypeCellRef.textContent = (d).toFixed(2)


    newtypeCellRef = newTransactionRowRef.insertCell(1);
    newtypeCellRef.textContent = (a).toFixed(2)

    newtypeCellRef = newTransactionRowRef.insertCell(2);
    newtypeCellRef.textContent = (RentaEP).toFixed(2)

    let newDeleteCell = newTransactionRowRef.insertCell(3);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    newDeleteCell.appendChild(deleteButton)

    deleteButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove()

    })
}
