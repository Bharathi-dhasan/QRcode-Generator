var input = document.getElementById('input');
var button = document.getElementById('butt');
var image = document.getElementById('image');
var qrcode = document.querySelector('.qrcode');

function ran(){
        var r=Math.floor(Math.random()*255);
        var g=Math.floor(Math.random()*255);
        var b=Math.floor(Math.random()*255);
        var color=r+"-"+g+"-"+b;
        return color;
}
button.addEventListener('click', function () {
    if (input.value !== "") {
        var color=ran();
        var bgcolor=color;
        if(color===bgcolor){
            color="0-0-0";
            bgcolor="255-255-255";
        }
        qrcode.classList.add('show');
        image.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + input.value + "&size=150x150&color="+color+"&bgcolor="+bgcolor+"&margin=18";
    }
    else {
        alert("please enter text or URL");
    }
});
