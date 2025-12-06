const input = document.getElementById("quoteInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("quoteList");


let quotes = JSON.parse(localStorage.getItem("quotes")) || [];


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


function deleteQuote(index) {
  quotes.splice(index, 1);
  saveQuotes();
  renderQuotes();
}


function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}


renderQuotes();
