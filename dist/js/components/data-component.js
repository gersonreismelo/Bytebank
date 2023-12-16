import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
const dataElementoAcesso = document.querySelector(".block-saldo time");
rederizarData();
function rederizarData() {
    if (dataElementoAcesso != null) {
        dataElementoAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar: function () {
        rederizarData();
    }
};
export default DataComponent;
