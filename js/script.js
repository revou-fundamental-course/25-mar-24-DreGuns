let weight = document.getElementById("weight");
let height = document.getElementById("height");
let age = document.getElementById("age");
let btnCalculate = document.getElementById("btnCalculate");
let resultBMI = document.getElementById("result-cal");
let resultWeight = document.getElementById("result-weight");
let resultInfoBMi = document.getElementById("result-info-weight");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");
let btnConsult = document.getElementById("btnConsult");
let btnRegist = document.getElementById("btnRegist");
let btnConsult2 = document.getElementById("btnConsult2");
let btnRegist2 = document.getElementById("btnRegist2");
let btnDownloadResult = document.getElementById("btnDownloadResult");
let btnReset = document.getElementById("btnReset");
let secItem1 = document.getElementById("secItem1");
let secItem2 = document.getElementById("secItem2");
let appIcon = document.getElementById("download-apps");
let conResult = document.getElementById("containerResult");

btnCalculate.addEventListener("click", function (e) {
  e.preventDefault();

  if (!weight.value || !height.value || !age.value) {
    alert("Mohon isi semua");
    return;
  }
  secItem1.classList.add("result-item");
  secItem2.classList.add("result-item");
  appIcon.style.display = "inline-block";
  conResult.style.display = "inline-block";

  let heightVal = Math.pow(height.value / 100, 2);
  let weightVal = weight.value;
  let resultCalculate = weightVal / heightVal;

  resultBMI.textContent = resultCalculate.toFixed(2);

  p2.textContent =
    "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan " +
    "tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih " +
    "lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";

  // Kekurangan berat badan
  if (resultCalculate < 18.5) {
    resultWeight.textContent = "Kekurangan Berat Badan";
    resultInfoBMi.textContent = "Berat Badan Anda Kurang Ideal";
    p1.textContent =
      "Hasil BMI anda adalah " +
      resultCalculate.toFixed(2) +
      " Anda berada dalam kategori kekurangan berat badan. " +
      "Anda harus makan makanan bergizi dan sering berolahraga agar tubuh anda menjadi sehat dan bugar.";
    btnDownloadResult.style.display = "inline-block";
    btnDownloadResult.classList.add("btn-primary");
    btnConsult.style.display = "inline-block";
    btnConsult.classList.add("btn-primary");
    btnRegist.style.display = "inline-block";
    btnRegist.classList.add("btn-primary");
    p3.textContent = "Beberapa saran jika anda kekurangan berat badan";
    p4.textContent = "Perbanyak makan makanan bergizi";
    p5.textContent = "Rajin - rajin berolahraga";
    p6.textContent = "Tidur yang cukup";
    p7.textContent = "Perbanyak minum air putih";
    btnDownloadResult.style.display = "inline-block";
    btnDownloadResult.classList.add("btn-primary");
    btnConsult.style.display = "inline-block";
    btnConsult.classList.add("btn-primary");
    btnRegist.style.display = "inline-block";
    btnRegist.classList.add("btn-primary");
    btnConsult2.style.display = "inline-block";
    btnConsult2.classList.add("btn-primary");
    btnRegist2.style.display = "inline-block";
    btnRegist2.classList.add("btn-primary");
  } // Berat badan Ideal
  else if (resultCalculate >= 18.5 && resultCalculate <= 24.9) {
    resultWeight.textContent = "Normal (Ideal)";
    resultInfoBMi.textContent = "Berat Badan Anda Ideal";
    p1.textContent =
      "Hasil BMI anda adalah " +
      resultCalculate.toFixed(2) +
      " Anda berada dalam kategori berat badan ideal. " +
      "Makan makanan bergizi dan sering berolahraga untuk menjaga berat badan ideal anda ";
    btnDownloadResult.style.display = "inline-block";
    btnDownloadResult.classList.add("btn-primary");
    btnConsult.style.display = "inline-block";
    btnConsult.classList.add("btn-primary");
    btnRegist.style.display = "inline-block";
    btnRegist.classList.add("btn-primary");
    p3.textContent = "Beberapa saran jika anda mempunyai berat badan ideal";
    p4.textContent = " Tetap makan makanan bergizi";
    p5.textContent = "Rajin berolahraga";
    p6.textContent = "Tidur yang cukup";
    p7.textContent = "Perbanyak minum air putih";
    btnDownloadResult.style.display = "inline-block";
    btnDownloadResult.classList.add("btn-primary");
    btnConsult.style.display = "inline-block";
    btnConsult.classList.add("btn-primary");
    btnRegist.style.display = "inline-block";
    btnRegist.classList.add("btn-primary");
    btnConsult2.style.display = "inline-block";
    btnConsult2.classList.add("btn-primary");
    btnRegist2.style.display = "inline-block";
    btnRegist2.classList.add("btn-primary");
  } // Berat badan berlebih
  else if (resultCalculate > 25.0 && resultCalculate <= 29.9) {
    resultWeight.textContent = "Kelebihan Berat Badan";
    resultInfoBMi.textContent = "Anda Memiliki Berat Badan Berlebih";
    p1.textContent =
      "Hasil BMI anda adalah " +
      resultCalculate.toFixed(2) +
      " Anda berada dalam kategori overweight atau berat badan berlebih. " +
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur " +
      "kalori makanan yang dikonsumsi dan berolahraga. " +
      "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan " +
      "untuk menurunkan berat badan hingga batas normal.";
    p3.textContent = "Beberapa penyakit yang berasal dari kegemukan";
    p4.textContent = "Diabetes";
    p5.textContent = "Hipertensi";
    p6.textContent = "Sakit Jantung";
    p7.textContent = "Osteoarthritis";
    btnDownloadResult.style.display = "inline-block";
    btnDownloadResult.classList.add("btn-primary");
    btnConsult.style.display = "inline-block";
    btnConsult.classList.add("btn-primary");
    btnRegist.style.display = "inline-block";
    btnRegist.classList.add("btn-primary");
    btnConsult2.style.display = "inline-block";
    btnConsult2.classList.add("btn-primary");
    btnRegist2.style.display = "inline-block";
    btnRegist2.classList.add("btn-primary");
  } // Berat badan Obesitas
  else if (resultCalculate > 30.0) {
    resultWeight.textContent = "Kegemukan (Obesitas)";
    resultInfoBMi.textContent = "Berat Badan Anda Telah Mencapai Obesitas   ";
    p1.textContent =
      "Hasil BMI anda adalah " +
      resultCalculate.toFixed(2) +
      " Anda berada dalam kategori Obesitas. " +
      "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur " +
      "kalori makanan yang dikonsumsi dan berolahraga. " +
      "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan " +
      "untuk menurunkan berat badan hingga batas normal.";
    p3.textContent = "Beberapa penyakit jika anda obesitas";
    p4.textContent = "Serangan Jantung";
    p5.textContent = "Kencing Manis";
    p6.textContent = "Demensia";
    p7.textContent = "Sindrom Ovarian Polikistik";
    btnDownloadResult.style.display = "inline-block";
    btnDownloadResult.classList.add("btn-primary");
    btnConsult.style.display = "inline-block";
    btnConsult.classList.add("btn-primary");
    btnRegist.style.display = "inline-block";
    btnRegist.classList.add("btn-primary");
    btnConsult2.style.display = "inline-block";
    btnConsult2.classList.add("btn-primary");
    btnRegist2.style.display = "inline-block";
    btnRegist2.classList.add("btn-primary");
  }
});

// Button Reset
btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  if (!height.value || !weight.value || !age.value) {
    return;
  }
  conResult.style.display = "none";
  alert("Berhasil di Reset");
});
