import { TipoTransacao } from "../types/TipoTransacao.js";
import { atualizaSaldo, getSaldo } from "./saldo-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    let saldo = getSaldo();
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválida!");
        return;
    }
    atualizaSaldo(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});