import FajlKivalasztView from "../View/FajlKivalasztView.js";
import fajlNevek from "../View/fajlNevek.js";
import DataService from "../Model/DataService.js";

const ALAPVEGPONT = "api/pdfdata";
class Controller {
    constructor() {
        //fajlfeltoltes

        /**
        const szuloELEM = $("#fajlfeltoltes")
        new FajlKivalasztView(szuloELEM);
         */

        this.dataService = new DataService();
        this.dataService.getAxiosData(ALAPVEGPONT, this.megjelenit);

        const szuloELEM = $("#tablazatKiir")
        new fajlNevek(szuloELEM);
    }

    megjelenit(list){
        //console.log(list);
        new TablaView(list, $("article form"));
    }
}

export default Controller;