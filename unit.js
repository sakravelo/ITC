document.getElementById("celcius").addEventListener("input", function() {
    var c;
    c = document.getElementById("celcius").value*1; 
    console.log(c);
    let fh  = (c * (9/5) + 32);
    document.getElementById("ctofar").value=fh;
});

document.getElementById("farenheit").addEventListener("input", function() {
    var fh;
    fh = document.getElementById("farenheit").value*1; 
    console.log(fh);
    let c  = ((fh - 32) * (5/9));

    document.getElementById("ftocel").value=c;
});

document.getElementById("meters").addEventListener("input", function() {
    var m;
    m = document.getElementById("meters").value*1; 
    console.log(m);
    let f  = (m * 3.281);

    document.getElementById("mtof").value=f;
});

document.getElementById("feet").addEventListener("input", function() {
    var f;
    f = document.getElementById("feet").value*1; 
    console.log(f);
    let m  = (f/3.281);

    document.getElementById("ftom").value=m;
});

document.getElementById("clear1").addEventListener("click", function() {

    document.getElementById("celcius").value='';
    document.getElementById("ctofar").value='';
});

document.getElementById("clear2").addEventListener("click", function() {

    document.getElementById("farenheit").value='';
    document.getElementById("ftocel").value='';
});

document.getElementById("clear3").addEventListener("click", function() {

    document.getElementById("meters").value='';
    document.getElementById("mtof").value='';
});

document.getElementById("clear4").addEventListener("click", function() {

    document.getElementById("feet").value='';
    document.getElementById("ftom").value='';
});

