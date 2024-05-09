<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="styleHome.css">
    <link rel="icon" href="img/pngesquilo - Copia.png">
    <?php
        require_once "script.php";
        if (!isset($_SESSION)) {
            session_start();
        }
    ?>
    <title>Home page</title>
    
</head>
<body>
    <nav class="menu-lateral">
        <div class="btn-expandir">
            <i class="bi bi-list" id="btn-Exp"></i>
        </div>
        <ul>
            <li class="item-menu">
                <a href="#" id="btnNovo">
                    <span class="icon"><img src="img/Adicao-UX.svg" alt=""></span>
                    <span class="txt-link">Novo</span>
                </a>
            </li>
            <li class="item-menu ativo">
                <a href="#">
                    <span class="icon"><img src="img/home-ux.svg" alt=""></span>
                    <span class="txt-link">Home</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                    <span class="icon"><img src="img/bank-ux.svg" alt=""></span>
                    <span class="txt-link">Contas</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                    <span class="icon"><img src="img/graphic-ux.svg" alt=""></span>
                    <span class="txt-link">Relátorios</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                    <span class="icon"><img src="img/configuracao-UX.svg" alt=""></i></span>
                    <span class="txt-link">Configuração</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                    <span class="icon"><img src="img/Persona-UX.svg" alt=""></i></span>
                    <span class="txt-link">Perfil</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="logout.php">
                    <span class="icon"><img src="img/noun-down-3257729.svg" alt=""></i></span>
                    <span class="txt-link">Logout</span>
                </a>
            </li>
        </ul>
    </nav>
    <header>
        <h1>Dashboard</h1>

        <div class="header">
            <div class="block">
                <label for="saldo">Saldo Atual</label>
                <p id="saldoAtual">R$ 0,00</p> 
                <figure class="banks"><img src="img/bank-ux wither.svg" alt=""></figure>
            </div>
            <div class="block">
                <label for="saldo">Receitas</label>
                <p id="saldoReceitas">R$ 0,00</p> 
                <figure class="receits"><img src="img/flechaprincipal.svg" alt=""></figure>
            </div>
            <div class="block">
                <label for="saldo">Despesas</label>
                <p id="saldoDespesas">R$ 0,00</p> 
                <figure class="desps"><img src="img/flechaprincipal.svg" alt=""></figure>
            </div>            
        </div>
        
    </header>

    <section class="principal">
        <div class="contas" id="contasAPagar">
            <p class="ct">Próximas contas a pagar</p>
            <?php
                if (count($despesas) > 0) {
                    foreach ($despesas as $despesa) {
                        echo "<form action='script.php' method='get'>
                            <input hidden name='id' value='$despesa->id'>
                            </input>
                            <p>"
                            .$despesa->descricao.": R$".$despesa->valor." - ".DateTime::createFromFormat('Y-m-d', $despesa->data)->format('d/m/Y')
                            ."<button id='env' name'del' type='submit'>Dar baixa</button>
                            </p>
                        </form>";
                    }
                } else {
                    echo "<p>Nenhuma conta a pagar no momento.</p>";
                }
            ?>
        </div>
        <div class="contas" id="contasAReceber">
            <p class="ct">Próximas contas a receber</p>
            <?php
                if (count($receitas) > 0) {
                    foreach ($receitas as $despesa) {
                        echo "
                        <form action='script.php' method='get'>
                            <input hidden name='id' value='$despesa->id'></input><p>".$despesa->descricao.": R$".$despesa->valor." - ".DateTime::createFromFormat('Y-m-d', $despesa->data)->format('d/m/Y')
                            ."<button id='env' name'del' type='submit'>Dar baixa</button></p>
                        </form>";
                    }
                } else {
                    echo "<p>Nenhuma conta a receber no momento.</p>";
                }
            ?>
        </div>

        <!-- Maiores despesas; painel grafico lateral -->
        <aside class="maiorDeps">
            <div class="blockMaior">
                <p id="MD">Maiores Despesas do Mês</p>
                <hr>
                <canvas id="graficoDespesas"></canvas>
            </div>
        </aside>
        <div id="modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Adicionar Receita ou Despesa</h2>
                <form id="addForm" action="script.php" method="post">
                    <select title="Adicionar Despesa ou Receita" name="tipo" id="tipo">
                        <option value="" disabled selected hidden>Selecione o tipo</option>
                        <option value="receita">Receita</option>
                        <option value="despesa">Despesa</option>
                    </select>
                    <input title="Adicionar Descrição" type="text" id="descricao" name="descricao" placeholder="Descrição">
                    <input title="Adicionar Valor" type="text" id="valor" name="valor" placeholder="R$ ">
                    <input title="Adicionar Data" type="date" id="data" name="data">
                    <div class="btns">
                        <button name="submit" type="submit" id="env">Enviar</button>
                        <button id="cnc" type="button" class="cancel">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="container">
            <div class="grapihc">
                <canvas id="meuGrafico"></canvas>
            </div>
        </div>
        
        
    </section>
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <script src="home_menu.js"></script>

</body>
</html>
