<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="styleCadastro.css" />
    <link rel="icon" href="img/pngesquilo - Copia.png">
    <script src="index.js"></script>
    <title>Cadastro page</title>
</head>
<body>
    <!-- COMEÇO DO HTML -->
    <div class="container_login">
        <div class="login">
            <!-- ESTES SAO O SVG DE "X" E A IMGEM DA LOGO -->
            <a href="Login.html">
            <figure><img class="fechar" src="img/fechar.svg" alt="" /></figure>
            </a>
            <figure>
                <img src="img/pngesquilo - Copia.png" alt="" class="logo" />
            </figure>

            <!-- AQUI ESTÁ TODO O CORPO DO HTML ANTES DO "or"  -->
            <form class="principal">
                <h1>REGISTER</h1>

                <!-- CREDENCIAS SAO O EMAIL E SENHA -->
                <div class="cred">
                    <input class="creds" type="text" placeholder="User Name">
                    <input class="creds" type="text" placeholder="Email" />
                    <input class="creds" type="password" placeholder="password" />
                </div>

                <div class="datanasc">
                    <p>Date of Birth </p>
                    <input class="date" type="date" name="" id="">
                </div>

                <div class="checkbox">
                    <input type="checkbox" id="chk" checked />
                    <label for="chk">I Accept and Agree to the Terms and  Policies.</label>
                </div>
                <p class="term">By clicking the "I Accept and Agree to the Terms and Policies" button,
                    you confirm that you have read, understood, and agree to abide 
                    by the terms and policies outlined by</p>
                <!-- BOTÃO DE LOGIN -->
                <div class="containerbtn">
                    <button class="login-btn" id="cadastroBtn" onclick="cadastrar()">CADASTRA-SE</button>
                </div>
            </form>
        </div>
        <div class="backgroundlateral">
            <h1 class="h1bg">WELCOME!</h1>
            <h2 class="h2bg">IT'S A PLEASURE TO HAVE YOU HERE</h2>
        </div>
        <script src="Cadastro.js"></script>
    </div>

</body>

</html>