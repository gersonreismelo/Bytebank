import Conta from "../types/Conta.js";
import { formatarMoeda} from "../utils/formatters.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

rederizarSaldo(); 
function rederizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar: function() {
        rederizarSaldo();
    }
}

export default SaldoComponent;