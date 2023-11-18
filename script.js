function updateColor() {
    var red = document.getElementById('redInput').value;
    var green = document.getElementById('greenInput').value;
    var blue = document.getElementById('blueInput').value;

    var hexColor = rgbToHex(red, green, blue);
    updateSVG(red, green, blue);
    document.getElementById('hexCode').innerHTML = 'RGB:  ' + red + ', ' + green + ', ' + blue + '<br>Hex-Code: ' + hexColor;
}

function rgbToHex(r, g, b) {
    var redHex = parseInt(r).toString(16).padStart(2, '0');
    var greenHex = parseInt(g).toString(16).padStart(2, '0');
    var blueHex = parseInt(b).toString(16).padStart(2, '0');

    return '#' + redHex + greenHex + blueHex;
}

function updateSVG(red, green, blue) {
    var svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 160 120" xml:space="preserve">' +
        '<g class="isolate">' +
        '<circle cx="40" cy="40" r="40" style="fill:rgb(' + red + ',0,0)" />' +
        '<circle cx="80" cy="40" r="40" style="fill:rgb(0,' + green + ',0)" />' +
        '<circle cx="60" cy="80" r="40" style="fill:rgb(0,0,' + blue + ')" />' +
        '</g>' +
        '</svg>';

    document.getElementById('colorMixer').innerHTML = svg;
}

document.addEventListener('DOMContentLoaded', function () {
    updateColor();
});

function updateColorCMYK() {
    var cyan = document.getElementById('cyanSlider').value;
    var magenta = document.getElementById('magentaSlider').value;
    var yellow = document.getElementById('yellowSlider').value;

    var r = 255 * (1 - cyan / 100);
    var g = 255 * (1 - magenta / 100);
    var b = 255 * (1 - yellow / 100);

    r = Math.min(255, Math.max(0, Math.round(r)));
    g = Math.min(255, Math.max(0, Math.round(g)));
    b = Math.min(255, Math.max(0, Math.round(b)));

    var resultDiv = document.getElementById('result');
    resultDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('cmykCode').innerHTML = 'CMYK: ' + cyan + '%, ' + magenta + '%, ' + yellow + '%<br>RGB: ' + r + ', ' + g + ', ' + b;

}

document.addEventListener('DOMContentLoaded', function () {
    updateColorCMYK();
});
