import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
import ExtratoComponente from "./extrato-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    try{
        event.preventDefault();

        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }

        let tipoTransacao : TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + " 00:00:00");

        const novaTransacao : Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        }

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponente.atualizar();
        elementoFormulario.reset();
    } catch(error) {
        alert(error.message);
    }
});
