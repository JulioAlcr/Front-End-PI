var dadosDespesas = {
    labels: ['Aluguel', 'Alimentação', 'Transporte', 'Lazer', 'Outros'],
    datasets: [{
        label: 'Despesas Mensais',
        data: [1000, 600, 400, 300, 700], // Valores das despesas
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Configurações do gráfico
var configDespesas = {
    type: 'horizontalBar',
    data: dadosDespesas,
    options: {
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
};

// Renderiza o gráfico
var graficoDespesas = new Chart(
    document.getElementById('graficoDespesas'),
    configDespesas
);