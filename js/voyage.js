"use strict";
// ************* Exemple Voyage *************
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour('Nantes', 200));
        this._sejours.push(new Sejour('Paris', 800));
        this._sejours.push(new Sejour('Guadeloupe', 2000));
    }
    SejourService.prototype.findSejourParNom = function (nom) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.nom === nom) {
                return sejour;
            }
        }
        return undefined;
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findSejourParNom('Nantes'));
console.log(sejourService.findSejourParNom('Lagos'));
