//Pegando as informações do Formulário.
const btnlogar = document.getElementById('btnlogar');
const txtUser = document.getElementById('user');

btnlogar.addEventListener('click', autenticar);
btnCadastro.addEventListener('click', cadastrar);
//Colocando o Focus na txtUser ao iniciar a aplicação
txtUser.focus();


function cadastrar(ev) {
    ev.preventDefault();

    let xhttp = new Http();
    xhttp.escreveConsole("Estou Cadastrando o Usuário");
    //pegando os parametros
    //let user = document.getElementById('user').value;
    //let password = document.getElementById('password').value;
    //montando a string com os paramentros
    //let params = `user= ${user}&password=${password}`
    //SEGUNDA FORMA DE PASSAR OS DADOS
    let cadastro = document.getElementById('cadastro');
    let params = new FormData(cadastro);
    console.log(params);
    //usando a classe HTTP passando o TIPO, URL, DADOS caso necessite
    //Callback é a forma de passar uma função para outra Função veja abaixo
    //Estamos chamando um método da classe e passando uma função para tratar o retorno 
    //xhttp.xhrPost('./index.php?class=Index&method=logando', params, function (error, response) {
    xhttp.xhrPost('./index.php?class=Usuario&method=cadastrar', params, function (error, response) {
        //Temos duas possibilidades de retorno da requisição error ou response
        if (error) {

            //mostrando o erro
            console.log(error);

        } else {

            console.log(response);
            if (response = "Cadastrado") {
                alert("Cadastrado");
                window.location.href = "./index.php?class=Index";
            } else {
                console.log("Erro ao cadastrar");
                txtUser.focus();
            }
        }
    })

}


function autenticar(ev) {
    ev.preventDefault();

    let xhttp = new Http();
    xhttp.escreveConsole("Estou Autenticando o Usuário");
    //pegando os parametros
    //let user = document.getElementById('user').value;
    //let password = document.getElementById('password').value;
    //montando a string com os paramentros
    //let params = `user= ${user}&password=${password}`
    //SEGUNDA FORMA DE PASSAR OS DADOS
    let login = document.getElementById('login');
    let params = new FormData(login);
    console.log(params);
    //usando a classe HTTP passando o TIPO, URL, DADOS caso necessite
    //Callback é a forma de passar uma função para outra Função veja abaixo
    //Estamos chamando um método da classe e passando uma função para tratar o retorno 
    //xhttp.xhrPost('./index.php?class=Index&method=logando', params, function (error, response) {
    xhttp.xhrPost('./index.php?class=Usuario&method=autenticar', params, function (error, response) {
        //Temos duas possibilidades de retorno da requisição error ou response
        if (error) {

            //mostrando o erro
            console.log(error);

        } else {

            console.log(response);
            if (response = "Autenticado") {

                window.location.href = "./index.php?class=Posts";
            } else {
                console.log("Intruso tentando logar...");
                txtUser.focus();
            }
        }
    })

}
