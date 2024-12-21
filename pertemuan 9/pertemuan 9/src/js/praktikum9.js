// soal 1
function hitungLingkaran() {
    var radius =  document.getElementById("radius").value;

    if (radius  > 0) {
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").innerText =
        "Luas : " + luas + "cm²,  keliling : "
        + keliling  + "cm";
    }else {
        document.getElementById("lingkaranOutput").
        innerText = "Masukan jari-jari yang valid";
    }
}

//  soal 2
function hitungDuit(){
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0){
        var kurs = 15870;
        var dollar = rupiah / kurs;
        document.getElementById("hasilDuit").innerText  =
        "Nilai : $ " + dollar.toFixed(2);
    } else {
        document.getElementById("hasilDuit").innerText =
        "Masukan Nilai yang valid !!"
    }
}

// soal 3
function  hitungPenjumlahan() {
    var biL1 = parseFloat(document.getElementById("biL1").value) || 0 ;
    var biL2 = parseFloat(document.getElementById("biL2").value) || 0;
    var jumlah = biL1 + biL2;
    document.getElementById("hasiljumlah").innerText = "jumlah:" + jumlah.toFixed(2);
}