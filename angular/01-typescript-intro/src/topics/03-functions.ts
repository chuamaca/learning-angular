//Para definir una funcion en JS

function addNumbers(a: number,b: number){
   return a + b;
}

const addNumbersArrow = (a: number, b: number) : string  =>{
    return `${a + b}`;
}


addNumbers(1,2);




function multiply(firtsNumber : number, secondNumber?: number, base: number =2) {
    return firtsNumber *  base;
}

// const result: number = addNumbers(1,2);
// const result2 : string = addNumbersArrow(1,2);
// const  multiplyResult : number = multiply(1);
// console.log({result: result, result2: result2, multiplyResult: multiplyResult});


// Imaginemos que tenemos una funcion para curar un personaje
interface Character {
    name: string;
    hp: number;
    // Si quiero retornar una funcion
    showHp: ()=> void;
}


const healCharacter =  (character : Character, amount : number) =>{

    character.hp+= amount;

}

const strider : Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`);
    }
}


healCharacter(strider, 20);
strider.showHp();

export { };