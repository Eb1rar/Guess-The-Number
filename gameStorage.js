//! sifirla yirmi arasinda sayi tut ve yuvarla
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);
let message = document.querySelector(".msg");

//! skoru index.html'den cekebilirdik fakat cok kullanacagimiz icin bu daha tercih edilen yol.
let skor = 10;

let maximumScore = localStorage.getItem("top-score") || 0;
//! ------browserda, DOM da top score değerini local storage dan okuyarak güncelle, özellikle 2. ve 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = maximumScore;

//! Check butonuna basildiginda yapilacak islemler
// addeventlistener iki tane parametre alir icine
document.querySelector(".check").addEventListener("click", () => {
  // .value demezsek input'un tamamını gösterir, value'suna ulasmak sitiyoruz
  const guess = document.querySelector(".guess").value;

  //! Tahmin girmeden butona basildiysa
  if (!guess) {
    message.textContent = "Please enter a valid number";

    //! Tahmin dogruysa
  } else if (guess == randomNumber) {
    message.textContent = "Congratulations, You Guessed!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumber;

    //* Top-Score Kontrolu

    if (skor > maximumScore) {
      localStorage.setItem("top-score", skor);

      maximumScore = skor;
      document.querySelector(".top-score").textContent = maximumScore;
    }

    //! Tahmin yanlissa
  } else {
    //* Skor 1'den buyuk oldugu surece tahmin hakkim var

    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      guess < randomNumber
        ? (message.textContent = "Increase👆")
        : (message.textContent = "Decrease👇");
      //* artir azalt
    } else {
      message.textContent = "You Lost 😥";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      //! Oyunu kaybettiniz
    }
  }
});

//! Again butonuna basinca ayarlar baslangic degerlerine kurulsun. Arka plan #2d3436 olsun.

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";

  randomNumber = Math.ceil(Math.random() * 20);

  console.log(randomNumber);

  skor = 10;

  document.querySelector(".score").textContent = skor;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  message.textContent = "Game is beginning for the new player...";
};

//! ENTER'a basildiginde Check butonunu tetikle

document.addEventListener("keydown", function (event) {
  if (element.key === "Enter") {
    //entera basildiysa chceck butonuna tikla
    document.querySelector(".check").click();
  }
});

document.querySelector(".check").addEventListener("click", () => {
  guess = document.querySelector(".guess").value;
  const guessNumber = parseInt(guess);

  if (guessNumber >= 1 && guessNumber <= 20 && !isNaN(guessNumber)) {
    //Doğru sayi girilmisse devam ettir
  } else {
    message.textContent =
      "Invalid Number! Please enter a number between 1 and 20";
    skor++;
  }
});
