const fortunes = [
    "Your future is bright, embrace it with open arms.",
    "A wonderful surprise is coming your way.",
    "Believe in yourself and you will achieve great things.",
    "Your kindness will lead to good fortune.",
    "The journey may be difficult, but the destination is worth it.",
    "Your talents willbring you success in the future.",
    "Opportunities will come to you when you least expect them.",
    "Your creativity will lead to great things.",
    "Happiness is right around the corner.",
    "Your hard work will pay off in the end."
    ];
    
    // Get elements from the DOM
const fortuneText = document.getElementById("fortune-text");
const fortuneDate = document.querySelector(".fortune-date");
const fortuneButton = document.getElementById("fortune-button");
const newFortuneButton = document.getElementById("new-fortune-button");

// Set the initial fortune and date
let currentFortuneIndex = Math.floor(Math.random() * fortunes.length);
let currentFortune = fortunes[currentFortuneIndex];
let currentDate = new Date().toDateString();

// Display the initial fortune and date
fortuneText.innerText = currentFortune;
fortuneDate.innerText = currentDate;

// Add event listeners
fortuneButton.addEventListener("click", () => {
  // Add the animation class to slide down the fortune paper
  document
    .querySelector(".fortune-paper")
    .classList.add("animate-slide-down");

  // Remove the animation class after it finishes
  setTimeout(() => {
    document
      .querySelector(".fortune-paper")
      .classList.remove("animate-slide-down");
  }, 1000);
});

newFortuneButton.addEventListener("click", () => {
  // Generate a new random fortune
  let newFortuneIndex = Math.floor(Math.random() * fortunes.length);

  // Keep generating fortunes until it's different from the current one
  while (newFortuneIndex === currentFortuneIndex) {
    newFortuneIndex = Math.floor(Math.random() * fortunes.length);
  }

  // Set the new fortune and date
  currentFortuneIndex = newFortuneIndex;
  currentFortune = fortunes[currentFortuneIndex];
  currentDate = new Date().toDateString();

  // Display the new fortune and date
  fortuneText.innerText = currentFortune;
  fortuneDate.innerText = currentDate;
});
