fetch('/api/books')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('books-container');

    data.forEach(book => {
      const card = `
        <div class="col s12 m4">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${book.title}</span>
              <p>Author: ${book.author}</p>
              <p>Year: ${book.year}</p>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += card;
    });
  })
  .catch(err => console.log(err));