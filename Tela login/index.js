function logar(){
    var confirmaçao = document.getElementById('confirmaçao').value;
    var senha = document.getElementById("senha").value;
    var caracter = /[_@#$%&*]/; // Caracter especial
    var maiscula = /[A-Z]/; // Letra maiúscula
    var minuscula = /[a-z]/; // Letra minúscula
    var numeros = /[0-9]/; // Número
    let sequenciasproibida = ["012", "123", "234", "345", "456", "567", "678", "789"]; // Sequências proibidas
    let sequenciasproibidadec = ["987", "876", "765", "654", "543", "432", "321", "210"];
    let caracterigual = ["000","111", "222", "333", "444", "555", "666", "777", "888", "999"]
    let letras_min = ["aaa","bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh", "iii", "jjj",
    "kkk", "lll", "mmm", "nnn", "ooo", "ppp", "qqq", "rrr", "sss", "ttt", "uuu", "vvv", 
    "www", "xxx", "yyy", "zzz" ]
    let letras_mai = ["AAA","BBB", "CCC", "DDD", "EEE", "FFF", "GGG", "HHH", "III", "JJJ",
    "KKK", "LLL", "MMM", "NNN", "OOO", "PPP", "QQQ", "RRR", "SSS", "TTT", "UUU", "VVV", 
    "WWW", "XXX", "YYY", "ZZZ" ]


    // Adicionado: Verificação de nome
    let criadores = ["Bruno_1233456789","Bruno_1233456789"];
    if (criadores.includes(senha)) {
        document.getElementById("resultado").innerHTML = "Nome do criador OK!";
        return;
    }

    if(confirmaçao ==""){
        document.getElementById("resultado").innerHTML = "A confirmaçao da senha é obrigatoria";
        return;
    }

    if(senha != confirmaçao){
        document.getElementById("resultado").innerHTML = "As duas senhas precisam ser iguais";
        return;
    }

    if(senha == "" || senha.length < 6){
        document.getElementById("resultado").innerHTML = "A senha precisa ter no minimo 6 caracter";
        return;
    }

    /// VALIDAÇÃO DE SENHA
    if (!caracter.test(senha)) {  
        document.getElementById("resultado").innerHTML = "A sua senha precisa ter um caracter especial!!   EX: @, #, $";
        return;
    }
   
    if (!maiscula.test(senha)) {
        document.getElementById("resultado").innerHTML = "A sua senha precisa ter uma letra maiúscula!!";
        return;
    }

    if (!minuscula.test(senha)) {
        document.getElementById("resultado").innerHTML = "A sua senha precisa ter uma letra minúscula!!";
        return;
    }

    if (!numeros.test(senha)) {
        document.getElementById("resultado").innerHTML = "A sua senha precisa ter um algum número!!";
        return;
    }

   
    
    for (let caractersigual of caracterigual) {
        if (senha.includes(caractersigual)) {
            document.getElementById("resultado").innerHTML = "Senha contem caracteres repetidos ex:111!!";
            return; 
        }
    }

    for (let letramaiu  of letras_mai) {
    if (senha.includes(letramaiu)) {
        document.getElementById("resultado").innerHTML = "Senha possui três letras iguais!!";
         return;
      }
    }

    for (let letramin  of letras_min) {
    if (senha.includes(letramin)) {
        document.getElementById("resultado").innerHTML = "Senha possui três letras iguais!!";
         return; 
      }
    }


    for (let sequencia of sequenciasproibida) {
        if (senha.includes(sequencia)) {
            document.getElementById("resultado").innerHTML = "Senha contem sequencia numérica ex:123!!";
            return; 
        }
    }

    for (let sequenciadec of sequenciasproibidadec) {
        if (senha.includes(sequenciadec)) {
            document.getElementById("resultado").innerHTML = "A senha não pode conter sequência de números EX: 123, 789!!";
            return; 
        }
    }

    


   document.getElementById("resultado").innerHTML = "Senha válida!";
}