function generateQRcode(){
    var website = document.getElementById('website').value

    if(website){    // if wriiten any URL
        let qrcodecontainer = document.getElementById('qrcode')
        qrcodecontainer.innerHTML=""    // 1st blank QR Code
        new QRCode(qrcodecontainer,website) // QRCode = object from library

        document.getElementById('qrcode-container').style.display="block"
    }   // QR Code displayed as Block
    else{
        alert("please enter the valid url")
    }
}