function generateQRCode() {
    var qrText = document.getElementById("text").value;
    var qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: qrText
    });
}
