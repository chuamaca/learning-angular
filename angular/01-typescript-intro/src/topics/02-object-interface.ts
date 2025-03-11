//Objetos compuestos en TS.

const skills: string[] = ['Bash', 'Counter', 'Healing', "true","123"];

interface Character {
    name:string,
    hp: number,
    skills: string[],
    hometown? : string,
}

const strider : Character = {
    name: 'Cesar',
    hp: 100,
    skills:  ['Bash', 'Counter', 'Healing'],
}


strider.hometown='Peru';
console.table(strider);

export {}; //Permite que este archivo sea un módulo independiente.