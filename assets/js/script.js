$("#submit").on("click", () => {
  qrmake();
});

function qrmake() {
    var text = $("#QR-text").val();

  var qrcode = new QRCode(document.getElementById("qrcode1"), {
    text: text,
    correctLevel: QRCode.CorrectLevel.H,
  });
}
