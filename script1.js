const input = document.getElementById("quoteInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("quoteList");

// Load from localStorage OR initialize empty array
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

// Render all quotes on screen
function renderQuotes() {
  list.innerHTML = "";

  quotes.forEach((quote, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${quote}</span>
      <button class="delete-btn" onclick="deleteQuote(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

// Add quote
addBtn.onclick = function () {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a quote!");
    return;
  }

  quotes.push(text);
  input.value = "";
  saveQuotes();
  renderQuotes();
};

// Delete quote
function deleteQuote(index) {
  quotes.splice(index, 1);
  saveQuotes();
  renderQuotes();
}

// Save to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Initial render
renderQuotes();
