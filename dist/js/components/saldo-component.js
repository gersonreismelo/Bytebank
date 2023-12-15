import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const dataElementoAcesso = document.querySelector(".block-saldo time");
if (dataElementoAcesso != null) {
    const dataAcesso = new Date();
    dataElementoAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
atualizaSaldo(saldo);
export function atualizaSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
