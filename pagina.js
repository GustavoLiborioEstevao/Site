
  function loadProductDetails(nome, preco, descricao, imagem) {
    // Modifica o conteúdo do modal com as informações do produto
    document.getElementById('productModal').innerHTML = `
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Detalhes do Produto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${imagem}" class="img-fluid mb-3" alt="Imagem do Produto">
            <h5>${nome}</h5>
            <p class="text-muted">Preço: R$${preco}</p>
            <p>${descricao}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    `;
  }

var userEmail = localStorage.getItem('userEmail');

// Atualiza o texto do botão se o email estiver presente
if (userEmail) {
    document.getElementById("botaoLogin").innerText = userEmail;
    document.getElementById("botaoLogin").disabled = true;
    document.getElementById("botaoCadastro").innerHTML = " ";
}