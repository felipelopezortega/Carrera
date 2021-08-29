import Runner from "./runner.js";

let r1 = new Runner();
let r2 = new Runner();

class App{

    constructor(){

        this._r1 = r1.throw();
        this._r2 = r2.throw();
    }

    comparasion(){

        if(this._r1 < this._r2){

            return "El ganador es el corredor 1"

        }else if(this._r1 > this._r2){

            return "El ganador es el corredor 2"

        }else{

            return "Es un empate"
        }
    }
    
}

let app = new App();

console.log(app.comparasion());










