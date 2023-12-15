import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const dataElementoAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (dataElementoAcesso != null) {
    const dataAcesso: Date = new Date()
    dataElementoAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

export function getSaldo(): number {
    return saldo; 
}

atualizaSaldo(saldo);
export function atualizaSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}