google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        // Inicializa os dados do gráfico
        var chartData = [
            ['Task', 'Hours per Day']
        ];

        function drawChart() {
            var data = google.visualization.arrayToDataTable(chartData);

            var options = {
                title: 'Meu Relatório',
                pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }

        document.addEventListener('DOMContentLoaded', function () {
          const tbody = document.querySelector('tbody');
      
          // Função para adicionar uma linha à tabela e atualizar o gráfico
          function adicionarLinha(data, descricao, valor) {
              const newRow = document.createElement('tr');
      
              // Cria e adiciona as células com os dados
              const dateCell = document.createElement('td');
              dateCell.textContent = data;
              newRow.appendChild(dateCell);
      
              const descricaoCell = document.createElement('td');
              descricaoCell.textContent = descricao;
              newRow.appendChild(descricaoCell);
      
              const valorCell = document.createElement('td');
              valorCell.textContent = valor;
              newRow.appendChild(valorCell);
      
              // Adiciona a nova linha à tabela
              tbody.appendChild(newRow);
      
              // Adiciona os dados ao array chartData
              chartData.push([descricao, parseFloat(valor.substring(3))]);
      
              // Redesenha o gráfico
              drawChart();
          }
      
          // Exemplo de uso da função adicionarLinha
          adicionarLinha('01/01/2024', 'Despesa de mercado', 'R$ 100,00');
          adicionarLinha('02/01/2024', 'Conta de luz', 'R$ 50,00');
          adicionarLinha('02/01/2024', 'Conta de aguá', 'R$ 50,00');
      });
      
      // Função para atualizar o gráfico
      function drawChart() {
          var data = google.visualization.arrayToDataTable(chartData);
      
          var options = {
              title: 'Meu Relatório',
              pieHole: 0.4,
          };
      
          var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
          chart.draw(data, options);
      }
      