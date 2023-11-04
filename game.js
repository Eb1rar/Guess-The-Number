//! sifirla yirmi arasinda sayi tut ve yuvarla
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);
let message = document.querySelector(".msg");

//! skoru index.html'den cekebilirdik fakat cok kullanacagimiz icin bu daha tercih edilen yol.
let skor = 10;

let maximumScore = 0;

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
