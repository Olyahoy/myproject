function plus() {
    var n1, n2, result;
    n1 = document.getElementById('n_1').value;
    n1 = parseInt(n1);

    n2 = document.getElementById('n_2').value;
    n2 = parseInt(n2);

    result = n1+n2;
    document.getElementById("out").innerHTML = result;
}
function minus() {
    var n1, n2, result;
    n1 = document.getElementById('n_1').value;
    n1 = parseInt(n1);

    n2 = document.getElementById('n_2').value;
    n2 = parseInt(n2);

    result = n1-n2;
    document.getElementById("out").innerHTML = result;
}
function multiplication() {
    var n1, n2, result;
    n1 = document.getElementById('n_1').value;
    n1 = parseInt(n1);

    n2 = document.getElementById('n_2').value;
    n2 = parseInt(n2);

    result = n1*n2;
    document.getElementById("out").innerHTML = result;
}
function division() {
    var n1, n2, result;
    n1 = document.getElementById('n_1').value;
    n1 = parseInt(n1);

    n2 = document.getElementById('n_2').value;
    n2 = parseInt(n2);

    result = n1/n2;
    document.getElementById("out").innerHTML = result;
}