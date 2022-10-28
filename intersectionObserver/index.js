import { f1 } from "./functions"

class CoffeeMachine {
    _waterAmount = 0;
    #mark = "Senseo"; 

    set waterAmount(value) {
        if(value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    getWaterAmount(){
        return this._waterAmount;
    }

    constructor(power){
        this._power = power;
    }

    get power() {
        return this._power;
    } 
}

let coffeMachine = new CoffeeMachine(100);

coffeMachine.waterAmount = -10;

console.log(coffeMachine)

coffeMachine.power = 25;

console.log(coffeMachine)


f1();