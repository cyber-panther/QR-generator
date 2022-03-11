var qrcode = new QRCode("qrcode");

function makeCode() {
  var inputText = document.getElementById("QR-text");

  if (!inputText.value) {
    alert("Input a text");
    inputText.focus();
    return;
  }
  qrcode.makeCode(inputText.value);
}

makeCode();

$("#submit").on("click", () => {
  makeCode();
});

$('#QR-text').keypress(function (e) {                                       
  if (e.which == 13) {
       e.preventDefault();
       makeCode();
  }
});