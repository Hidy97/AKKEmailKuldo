import FajlKivalasztView from "./FajlKivalasztView.js";

class fajlNevek {

    #ujFajl;
    #fajlNevekTomb = [];

    constructor(szuloElem) {
        this.fajlElem = $("#fajlfeltoltes")
        this.#ujFajl = new FajlKivalasztView(this.fajlElem);
        this.divElem = szuloElem
        this.fajlElem = this.divElem.children("last-child");
        //this.fajlNevekTomb = this.uploadFiles();
        console.log(this.#fajlNevekTomb)
        this.#fajlnev();
    }

    uploadFiles() {
        const fileInput = this.divElem.children("#fileInput");
        this.#fajlNevekTomb = fileInput.files;
        console.log(this.#fajlNevekTomb)
    }

    getNev(){
        return this.#fajlNevekTomb;
    }

    #fajlnev() {
        $("#myfile").change(function (event) {
            //console.log(event.target.files[0].name)
            let fajlneve = (event.target.files[0].name)
            let feldolgozottFajl = fajlneve.split(' ')
            let kod = "";
            //ez végig fut a keletkezett tömbön, ami a 'feldolgozottFajl'
            for (let index = 0; index < feldolgozottFajl.length; index++) {
                //itt megnézi, hogy az adott elem tartalmazza-e a karaktert
                //bízunk benne, hogy mindenkinek az egyedi kódja lesz csak zárójelben :D
                if (feldolgozottFajl[index].indexOf("(") > -1) {
                    //console.log(feldolgozottFajl[index])
                    kod += feldolgozottFajl[index]
                }

            }
            $("#fajlnevKiir").text(fajlneve)
            //push-t append-et nem ismeri fel
            //this.fajlNevekTomb.push(fajlneve);
            console.log(fajlneve)
            //console.log(this.fajlNevekTomb)
            //$("#kiiras").text(kod)
        })
    }

    #esemenyTrigger(esemenyneve) {
        const esemeny = new CustomEvent("kuldes", { detail: this });
        window.dispatchEvent(esemeny);
    }

}

export default fajlNevek;