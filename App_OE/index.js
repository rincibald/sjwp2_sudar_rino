function OhmovZakon() {
    const R = parseFloat(document.getElementById("ohmR").value);
    const U = parseFloat(document.getElementById("ohmU").value);
    const result = document.getElementById("ohmI");
    const I = U / R;
    result.innerText = "I= "+I.toFixed(3) +"A";
}

function DjeliloNapona() {
    const R1 = parseFloat(document.getElementById("r1").value);
    const R2 = parseFloat(document.getElementById("r2").value);
    const U = parseFloat(document.getElementById("uin").value);
    const result = document.getElementById("uout");
    const Uout = U * R2 / (R1 + R2);
    result.innerText = "Uizl= "+ Uout.toFixed(3)+ "V";
}

function OtporniciSer() {
    const R1 = parseFloat(document.getElementById("sr1").value);
    const R2 = parseFloat(document.getElementById("sr2").value);
    const R3 = parseFloat(document.getElementById("sr3").value);
    const result = document.getElementById("seriesR");
    const total = R1 + R2 + R3;
    result.innerText = "R= "+total.toFixed(3) +"Ω";
}

function OtporniciPar() {
    const R1 = parseFloat(document.getElementById("pr1").value);
    const R2 = parseFloat(document.getElementById("pr2").value);
    const R3 = parseFloat(document.getElementById("pr3").value);
    const result = document.getElementById("parallelR");
    const total = 1 / (1/R1 + 1/R2 + 1/R3);
    result.innerText = "R= "+total.toFixed(3)+"Ω";
}

function KondezatoriSer() {
    const C1 = parseFloat(document.getElementById("sc1").value);
    const C2 = parseFloat(document.getElementById("sc2").value);
    const C3 = parseFloat(document.getElementById("sc3").value);
    const result = document.getElementById("seriesC");
    const total = 1 / (1/C1 + 1/C2 + 1/C3);
    result.innerText = "C= "+total.toFixed(3)+"F";
}

function KondezatoriPar() {
    const C1 = parseFloat(document.getElementById("pc1").value);
    const C2 = parseFloat(document.getElementById("pc2").value);
    const C3 = parseFloat(document.getElementById("pc3").value);
    const result = document.getElementById("parallelC");

    const total = C1 + C2 + C3;
    result.innerText = "C= "+total.toFixed(3)+ "F";
}

function ZavojniceSer() {
    const L1 = parseFloat(document.getElementById("sl1").value);
    const L2 = parseFloat(document.getElementById("sl2").value);
    const L3 = parseFloat(document.getElementById("sl3").value);
    const result = document.getElementById("seriesL");

    const total = L1 + L2 + L3;
    result.innerText = "L= "+total.toFixed(3) +"H";
}

function ZavojnicePar() {
    const L1 = parseFloat(document.getElementById("pl1").value);
    const L2 = parseFloat(document.getElementById("pl2").value);
    const L3 = parseFloat(document.getElementById("pl3").value);
    const result = document.getElementById("parallelL");
    const total = 1 / (1/L1 + 1/L2 + 1/L3);
    result.innerText = "L= "+total.toFixed(3)+ "H";
}

function ZracniSvitak() {
    const N = parseFloat(document.getElementById("turns").value);
    const S = parseFloat(document.getElementById("area").value);
    const l = parseFloat(document.getElementById("coilLength").value);
    const result = document.getElementById("airL");
    const mu0 = 4 * Math.PI*Math.pow(10, -7);
    const L = mu0 * N**2 * S / l*1000000;
    result.innerText = "L= "+L.toFixed(3)+ "µH";
}


function InduktivniOtpor() {
    const freq = parseFloat(document.getElementById("freq").value);
    const L = parseFloat(document.getElementById("ind").value);
    const result = document.getElementById("xl");
    const XL = 2 * Math.PI * freq * L;
    result.innerText = "X_L= "+XL.toFixed(3)+"Ω";
}

function KapacitivniOtpor() {
    const freq = parseFloat(document.getElementById("freqC").value);
    const C = parseFloat(document.getElementById("cap").value); 
    const result = document.getElementById("xc");
    const XC = 1 / (2 * Math.PI * freq * C);
    result.innerText = "X_C= "+XC.toFixed(3)+"Ω";
}