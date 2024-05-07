function selectLink() {
    const menuItems = document.querySelectorAll('.item-menu');
    menuItems.forEach(item => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

// Adiciona evento de clique a cada item do menu lateral
const menuItems = document.querySelectorAll('.item-menu');
menuItems.forEach(item => item.addEventListener('click', selectLink));

// Função para expandir o menu lateral
const btnExpandir = document.querySelector('#btn-Exp');
const menuLateral = document.querySelector('.menu-lateral');

btnExpandir.addEventListener('click', () => {
    menuLateral.classList.toggle('expandir');
});

// Função para adicionar receita
function adicionarReceita(descricao, valor, data) {
    const contasAReceber = document.getElementById('contasAReceber');
    const novaConta = document.createElement('p');
    novaConta.textContent = `${descricao}: R$ ${valor.toFixed(2)} - ${data.toLocaleDateString()}`;
    contasAReceber.appendChild(novaConta);

    // Verifica se há mais de 3 receitas e adiciona barra de rolagem se necessário
    if (contasAReceber.children.length > 3) {
        contasAReceber.style.overflowY = 'auto';
    }

    // Oculta o espaço reservado se houver contas adicionadas
    const placeholder = contasAReceber.querySelector('.placeholder');
    if (placeholder) {
        placeholder.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const contasAPagar = document.getElementById('contasAPagar');
    const contasAReceber = document.getElementById('contasAReceber');
    const saldoReceitas = document.getElementById('saldoReceitas'); // Elemento que exibe o saldo das receitas
    const saldoDespesas = document.getElementById('saldoDespesas'); // Elemento que exibe o saldo das despesas

    function adicionarReceita(descricao, valor, data) {
        const novaReceita = document.createElement('p');
        novaReceita.textContent = descricao + ': R$ ' + valor.toFixed(2) + ' - ' + data.toLocaleDateString();
    
        // Adiciona um botão "Dar Baixa" para a nova receita
        const darBaixaBtn = document.createElement('button');
        darBaixaBtn.textContent = 'Dar Baixa';
        darBaixaBtn.addEventListener('click', function () {
            // Transfere o valor para a seção de Receitas
            const saldoReceitasAtual = parseFloat(saldoReceitas.textContent.replace('R$ ', ''));
            saldoReceitas.textContent = 'R$ ' + (saldoReceitasAtual + valor).toFixed(2);

            // Remove a conta da lista de contas a receber
            novaReceita.remove();

            // Verifica se há contas restantes
            if (contasAReceber.children.length === 2) {
                contasAReceber.querySelector('.placeholder').style.display = 'block';
            }
        });
        novaReceita.appendChild(darBaixaBtn);

        // Adiciona a nova receita à lista de contas a receber
        contasAReceber.appendChild(novaReceita);

        // Oculta o parágrafo de espaço reservado se a lista de contas a receber não estiver vazia
        if (contasAReceber.children.length > 2) {
            contasAReceber.querySelector('.placeholder').style.display = 'none';
        }
    }
    
    function adicionarDespesa(descricao, valor, data) {
        const novaDespesa = document.createElement('p');
        novaDespesa.textContent = descricao + ': R$ ' + valor.toFixed(2) + ' - ' + data.toLocaleDateString();
    
        // Adiciona um botão "Dar Baixa" para a nova despesa
        const darBaixaBtn = document.createElement('button');
        darBaixaBtn.textContent = 'Dar Baixa';
        darBaixaBtn.addEventListener('click', function () {
            // Transfere o valor para a seção de Despesas
            const saldoDespesasAtual = parseFloat(saldoDespesas.textContent.replace('R$ ', ''));
            saldoDespesas.textContent = 'R$ ' + (saldoDespesasAtual + valor).toFixed(2);
    
            // Remove a conta da lista de contas a pagar
            novaDespesa.remove();
    
            // Verifica se há contas restantes
            if (contasAPagar.children.length === 2) {
                contasAPagar.querySelector('.placeholder').style.display = 'block';
            }
    
            // Atualiza o gráfico de despesas
            atualizarGraficoDespesas([{ descricao: descricao, valor: valor }]);
        });
    
        novaDespesa.appendChild(darBaixaBtn);
    
        // Adiciona a nova despesa à lista de contas a pagar
        contasAPagar.appendChild(novaDespesa);
    
        // Oculta o parágrafo de espaço reservado se a lista de contas a pagar não estiver vazia
        if (contasAPagar.children.length > 2) {
            contasAPagar.querySelector('.placeholder').style.display = 'none';
        }
    }
    
    const addForm = document.getElementById('addForm');

    addForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

        const tipo = document.getElementById('tipo').value;
        const descricao = document.getElementById('descricao').value; // Obtém a descrição do campo de entrada
        const valor = parseFloat(document.getElementById('valor').value);
        const data = new Date(document.getElementById('data').value);

        if (tipo === 'receita') {
            adicionarReceita(descricao, valor, data);
        } else if (tipo === 'despesa') {
            adicionarDespesa(descricao, valor, data);
        }

        // Limpa os campos do formulário
        addForm.reset();
    });

    const menuitem = document.querySelectorAll('.item-menu');

    function selectLink(){
        menuitem.forEach((item)=>
            item.classList.remove('ativo')
        )
        this.classList.add('ativo')
    }

    menuitem.forEach((item)=>
        item.addEventListener('click',selectLink)
    );

    //expandir o menu
    const btnExp = document.querySelector('#btn-Exp');
    const menuSide = document.querySelector('.menu-lateral');

    btnExp.addEventListener('click', function(){
        menuSide.classList.toggle('expandir');
    });

    const btnNovo = document.getElementById('btnNovo');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    
    // Função para abrir o modal
    function openModal() {
        modal.style.display = 'block';
    }
    
    // Função para fechar o modal
    function closeModalHandler() {
        modal.style.display = 'none';
    }

    // Adiciona um evento de clique ao botão "Novo"
    btnNovo.addEventListener('click', openModal);

    // Adiciona um evento de clique ao botão de fechar do modal
    closeModal.addEventListener('click', closeModalHandler);

    // Fecha o modal quando o usuário clica fora dele
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const cancelBtn = document.getElementById('cnc'); // Seleciona o botão "Cancelar"

    // Adiciona um evento de clique ao botão "Cancelar"
    cancelBtn.addEventListener('click', function() {
        addForm.reset(); // Limpa os campos do formulário ao clicar no botão "Cancelar"
    });

});

function setupMenu() {
    const menuitem = document.querySelectorAll('.item-menu');

    function selectLink(){
        menuitem.forEach((item)=>
            item.classList.remove('ativo')
        )
        this.classList.add('ativo')
    }

    menuitem.forEach((item)=>
        item.addEventListener('click',selectLink)
    );

    //expandir o menu
    const btnExp = document.querySelector('#btn-Exp');
    const menuSide = document.querySelector('.menu-lateral');

    btnExp.addEventListener('click', function(){
        menuSide.classList.toggle('expandir');
    });
}

setupMenu();

// Dentro da função adicionarDespesa, após as manipulações necessárias:
const dadosDespesas = [{
    descricao: descricao,
    valor: valor
}];

// Atualize o gráfico com as novas despesas
atualizarGraficoDespesas(dadosDespesas);

// Função para atualizar o gráfico de despesas
// Função para atualizar o gráfico de despesas limitando aos três maiores valores
function atualizarGraficoDespesas(dadosDespesas) {
    const ctx = document.getElementById('graficoDespesas').getContext('2d');

    // Ordenar os dados de despesas pelo valor, em ordem decrescente
    const dadosOrdenados = dadosDespesas.sort((a, b) => b.valor - a.valor);

    // Pegar apenas os três primeiros elementos (os três maiores valores)
    const dadosLimitados = dadosOrdenados.slice(0, 3);

    // Extrair descrições e valores das despesas limitadas para o gráfico
    const descricoes = dadosLimitados.map(despesa => despesa.descricao);
    const valores = dadosLimitados.map(despesa => despesa.valor);

    // Se o gráfico já existir, destrua-o para criar um novo
    if (window.chartDespesas) {
        window.chartDespesas.destroy();
    }

    // Configurar o gráfico
    // Configurar o gráfico
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
        // Adiciona a configuração para barras empilhadas
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

// Definição dos dados do gráfico
const chartData = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [20, 15, 25, 30, 10], // Valores dos dados
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green',
          'blue'
        ]
      }
    ]
  };
  
  // Configurações do gráfico
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'GRAFICO'
      }
    }
  };
  
  // Inicialização do gráfico
  const ctx = document.getElementById('meuGrafico').getContext('2d');
  const doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
  });
  
