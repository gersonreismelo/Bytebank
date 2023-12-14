let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
elementoSaldo.textContent = saldo.toString();

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    let tipoTransacao = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if(tipoTransacao == "Depósito") {
        saldo += valor;
    } else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= valor;
    } else {
        alert("Tipo de transação inválida!");
        return
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
});
