document.addEventListener('DOMContentLoaded', function () {
    // Seleciona elementos do DOM
    const contasAPagar = document.getElementById('contasAPagar');
    const contasAReceber = document.getElementById('contasAReceber');
    const saldoReceitas = document.getElementById('saldoReceitas');
    const saldoDespesas = document.getElementById('saldoDespesas');
    const addForm = document.getElementById('addForm');
    const menuItems = document.querySelectorAll('.item-menu');
    const btnExp = document.querySelector('#btn-Exp');
    const menuSide = document.querySelector('.menu-lateral');
    const btnNovo = document.getElementById('btnNovo');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const cancelBtn = document.getElementById('cnc');

    // Funções para manipulação do menu
    function selectLink() {
        menuItems.forEach((item) => item.classList.remove('ativo'));
        this.classList.add('ativo');
    }

    function setupMenu() {
        menuItems.forEach((item) => item.addEventListener('click', selectLink));
        btnExp.addEventListener('click', function () {
            menuSide.classList.toggle('expandir');
        });
    }

    setupMenu();

    // Função para abrir o modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Função para fechar o modal
    function closeModalHandler() {
        modal.style.display = 'none';
    }

    // Adiciona eventos de clique aos botões
    btnNovo.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    cancelBtn.addEventListener('click', function () {
        addForm.reset();
    });

    // Função para adicionar receita
    function adicionarReceita(descricao, valor, data) {
        const novaReceita = document.createElement('p');
        novaReceita.textContent = descricao + ': R$ ' + valor.toFixed(2) + ' - ' + data.toLocaleDateString();
        const darBaixaBtn = document.createElement('button');
        darBaixaBtn.textContent = 'Dar Baixa';
        darBaixaBtn.addEventListener('click', function () {
            const saldoReceitasAtual = parseFloat(saldoReceitas.textContent.replace('R$ ', ''));
            saldoReceitas.textContent = 'R$ ' + (saldoReceitasAtual + valor).toFixed(2);
            novaReceita.remove();
            if (contasAReceber.children.length === 2) {
                contasAReceber.querySelector('.placeholder').style.display = 'block';
            }
        });
        novaReceita.appendChild(darBaixaBtn);
        contasAReceber.appendChild(novaReceita);
        if (contasAReceber.children.length > 2) {
            contasAReceber.querySelector('.placeholder').style.display = 'none';
        }
    }

    // Função para adicionar despesa
    function adicionarDespesa(descricao, valor, data) {
        const novaDespesa = document.createElement('p');
        novaDespesa.textContent = descricao + ': R$ ' + valor.toFixed(2) + ' - ' + data.toLocaleDateString();
        const darBaixaBtn = document.createElement('button');
        darBaixaBtn.textContent = 'Dar Baixa';
        darBaixaBtn.addEventListener('click', function () {
            const saldoDespesasAtual = parseFloat(saldoDespesas.textContent.replace('R$ ', ''));
            saldoDespesas.textContent = 'R$ ' + (saldoDespesasAtual + valor).toFixed(2);
            novaDespesa.remove();
            if (contasAPagar.children.length === 2) {
                contasAPagar.querySelector('.placeholder').style.display = 'block';
            }
            atualizarGraficoDespesas([{ descricao: descricao, valor: valor }]);
        });
        novaDespesa.appendChild(darBaixaBtn);
        contasAPagar.appendChild(novaDespesa);
        if (contasAPagar.children.length > 2) {
            contasAPagar.querySelector('.placeholder').style.display = 'none';
        }
    }

    // Adiciona evento de envio ao formulário
    addForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const tipo = document.getElementById('tipo').value;
        const descricao = document.getElementById('descricao').value;
        const valor = parseFloat(document.getElementById('valor').value);
        const data = new Date(document.getElementById('data').value);
        if (tipo === 'receita') {
            adicionarReceita(descricao, valor, data);
        } else if (tipo === 'despesa') {
            adicionarDespesa(descricao, valor, data);
        }
        addForm.reset();
    });
});

// Função para atualizar o gráfico de despesas
function atualizarGraficoDespesas(dadosDespesas) {
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    const dadosOrdenados = dadosDespesas.sort((a, b) => b.valor - a.valor);
    const dadosLimitados = dadosOrdenados.slice(0, 3);
    const descricoes = dadosLimitados.map(despesa => despesa.descricao);
    const valores = dadosLimitados.map(despesa => despesa.valor);
    if (window.chartDespesas) {
        window.chartDespesas.destroy();
    }
    window.chartDespesas = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: descricoes,
            datasets: [{
                label: 'Valor da Despesa',
                data: valores,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            indexAxis: 'y',
            responsive: true
        }
    });
}
