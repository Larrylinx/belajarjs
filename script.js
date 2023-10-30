function inputNilaiSiswa() {
    const penginputanNilai = prompt("Masukkan nilai:");
    const nilaiSiswa = parseInt(penginputanNilai);

    let nilaiHuruf = "";

    if (nilaiSiswa >= 85 && nilaiSiswa <= 100) {
        nilaiHuruf = "A";
    } else if (nilaiSiswa >= 75 && nilaiSiswa <= 84) {
        nilaiHuruf = "B";
    } else if (nilaiSiswa >= 60 && nilaiSiswa <= 74) {
        nilaiHuruf = "C";
    } else {
        nilaiHuruf = "D";
    }

    const genapGanjil = nilaiSiswa % 2 === 0 ? "Genap" : "Ganjil";
    
    console.log(`Nilai Angka: ${nilaiSiswa}`);
    console.log(`Nilai Huruf: ${nilaiHuruf}`);
    console.log(`Bilangan ${genapGanjil}`);
}

inputNilaiSiswa();
