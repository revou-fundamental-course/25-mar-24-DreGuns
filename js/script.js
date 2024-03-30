let weight = document.getElementById("weight");
let height = document.getElementById("height");
let age = document.getElementById("age");
let btnCalculate = document.getElementById("btnCalculate");
let resultBMI = document.getElementById("result-cal");
let resultWeight = document.getElementById("result-weight");
let resultInfoBMi = document.getElementById("result-info-weight");

btnCalculate.addEventListener("click", function (e) {
  e.preventDefault();

  if (!weight.value || !height.value || !age.value) {
    alert("Mohon isi semua");
    return;
  }

  let heightVal = Math.pow(height.value / 100, 2);
  let weightVal = weight.value;
  let resultCalculate = weightVal / heightVal;

  resultBMI.textContent = resultCalculate.toFixed(2);

  if (resultCalculate < 18.5) {
    resultWeight.textContent = "Kekurangan Berat Badan";
    resultInfoBMi.textContent = "Berat Badan Anda Kurang Ideal";
  } else if (resultCalculate >= 18.5 && resultCalculate <= 24.9) {
    resultWeight.textContent = "Normal (Ideal)";
    resultInfoBMi.textContent = "Berat Badan Anda Ideal";
  } else if (resultCalculate > 25.0 && resultCalculate <= 29.9) {
    resultWeight.textContent = "Kelebihan Berat Badan";
    resultInfoBMi.textContent = "Anda Memiliki Berat Badan Berlebih";
  } else if (resultCalculate > 30.0) {
    resultWeight.textContent = "Kegemukan (Obesitas)";
    resultInfoBMi.textContent = "Berat Badan Anda Telah Mencapai Obesitas   ";
  }
});

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  if (!height.value || !weight.value || !age.value) {
    return;
  }
  height.value = "";
  weight.value = "";
  age.value = "";
  resultBMI.textContent = "";
  resultWeight.textContent = "";
  resultInfoBMi.textContent = "";
  alert("Berhasil di Reset");
});
