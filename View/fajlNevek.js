import FajlKivalasztView from "./FajlKivalasztView.js";

class fajlNevek{

    #ujFajl;
    fajlNevekTomb = [];

    constructor(szuloElem){
        this.fajlElem = $("#fajlfeltoltes")
        this.#ujFajl = new FajlKivalasztView(this.fajlElem);
        this.divElem = szuloElem
        this.fajlElem = this.divElem.children("last-child");
        this.fajlNevekTomb = ["", "", "", ""]
        console.log(this.fajlNevekTomb)
        this.#fajlnev();
    }

    tombfeltolt(){
        for (let index = 0; index < this.fajlNevekTomb.length; index++) {
            this.fajlNevekTomb[index] = this.#fajlnev();
        }
    }


    megjelenites(ujFajl){
        let txt = ""
        txt += "<tr>";
        for (let index = 0; index < this.#ujFajl.length; index++) {
            ujFajl = this.#fajlnev();
            txt += `<td>${ujFajl}</td>`;
            //this.fajlNevekTomb.append(ujFajl);
            this.append(this.fajlNevekTomb);
        }
        txt += "</tr>";

        $("#tablazatKiir").append(txt)
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
            this.append(this.fajlNevekTomb);
            console.log(fajlneve)
            //$("#kiiras").text(kod)
        })
    }
}

export default fajlNevek;