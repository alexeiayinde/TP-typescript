// ************* Exemple Voyage *************
class Sejour {
    constructor(private _nom:string, private _prix:number) {

    }

    get nom() {
        return this._nom;
    }

    set nom(nom:string) {
        this._nom = nom;
    }

    get prix() {
        return this._prix;
    }
}

class SejourService {
    private _sejours:Sejour[];

    constructor() {
        this._sejours = [];
        this._sejours.push(new Sejour('Nantes', 200));
        this._sejours.push(new Sejour('Paris', 800));
        this._sejours.push(new Sejour('Guadeloupe', 2000));
    }

    findSejourParNom(nom:string):Sejour|void {
        for(const sejour of this._sejours) {
            if (sejour.nom === nom) {
                return sejour;
            }
        }
        return undefined;
    }
}

let sejourService = new SejourService();
console.log(sejourService.findSejourParNom('Nantes'));
console.log(sejourService.findSejourParNom('Lagos'));
