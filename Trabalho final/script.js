function validarFormulario() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    let motivo = document.getElementById('motivo').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "" || motivo === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
    } else {
        alert("Sua mensagem foi enviada com sucesso!");
    }
}

function searchBook() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let books = document.querySelectorAll('.book-card');
    let found = false;

    books.forEach(function(book) {
        let title = book.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            book.style.display = "block";
            found = true;
        } else {
            book.style.display = "none";
        }
    });

    const bookList=
    document.getElementById('bookList');
    if (!found && input !== "") {
        bookList.innerHTML = "<p>Nenhum livro encontrado com esse nome.</p>";
    }
}