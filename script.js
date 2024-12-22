var display = document.getElementById('visor');
    var valor = "";
    function adicionarNumero(num) {
      valor += num;
      display.value = valor;
    }
    function limparDisplay() {
      valor = "";
      display.value = "";
    }
    function apagarUltimo() {
      valor = valor.slice(0, -1);
      display.value = valor;
    }
    function somar() {
      var resultado = eval(valor);
      valor = resultado + "+";
      display.value = valor;
    }
    function subtrair() {
      var resultado = eval(valor);
      valor = resultado + "-";
      display.value = valor;
    }
    function multiplicar() {
      var resultado = eval(valor);
      valor = resultado + "*";
      display.value = valor;
    }
    function dividir() {
      var resultado = eval(valor);
      valor = resultado + "/";
      display.value = valor;
    }
    function igual() {
      var resultado = eval(valor);
      valor = resultado.toString();
      display.value = valor;
    }