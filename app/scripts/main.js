function getrandom(num, mul) {
    var value = []
    for (var i = 0; i <= num; i++) {
        var rand = Math.random() * mul;
        value.push(rand);
    }
    return value;
}


function vectorNornal(P, Q) {
    var n = [P[1] * Q[2] - Q[1] * P[2], -(P[0] * Q[2] - Q[0] * P[2]), P[0] * Q[1] - Q[0] * P[1]];
    console.log(n);
    return n;
}

function ecuacionPlano(n, P) {
    var signo1 = n[1] < 0 ? "" : " + ";
    var signo2 = n[2] < 0 ? "" : " + ";
    var paso1 = n[0] + "[X-(" + P[0] + ")] + " + n[1] + "[Y-(" + P[1] + ")] + " + n[2] + "[Z-(" + P[2] + ")] = 0";
    var paso2 = n[0] + "X " + signo1 + n[1] + "Y " + signo2 + n[2] + "Z = " + -(-(n[0] * P[0]) - (n[1] * P[1]) - (n[2] * P[2]));
    return paso1 + "\n" + paso2
}

function graficartrespuntos() {
    console.log($('#px').val());
    var P = [];
    var Q = [];
    var R = [];

    P = [parseInt($('#px').val()), parseInt($('#py').val()), parseInt($('#pz').val())]
    R = [parseInt($('#qx').val()), parseInt($('#qy').val()), parseInt($('#qz').val())]
    Q = [parseInt($('#rx').val()), parseInt($('#ry').val()), parseInt($('#rz').val())]

    var data = [{
        opacity: 0.4,
        type: 'scatter3d',
        x: [P[0], Q[0], R[0]],
        y: [P[1], Q[1], R[1]],
        z: [P[2], Q[2], R[2]],
    }, ];

    Plotly.newPlot('myDiv', data, layout);
}

var layout = {
    scene: {},
};