import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

const loadFromLocalStorage = () : Character[] => {
    const listaCharacters= localStorage.getItem('lscharacters');
   return listaCharacters ? JSON.parse(listaCharacters) : [];
}


@Injectable({providedIn: 'root'})
export class DragonBallService {

      characters= signal<Character[]>(
        loadFromLocalStorage(),
        // [
        //     {id: 1, name: 'Goku', power: 9001},
        //     {id: 2, name: 'Vegeta', power: 9000},
        // ]
    
    );

        saveToLocalStorage= effect(()=> {
            console.log(`Characters count ${this.characters().length}`);
            //Grabar en localstorage
            localStorage.setItem('lscharacters', JSON.stringify(this.characters()));
        })
    
        addCharacter( character: Character){
            this.characters.update((list)=> [...list, character]);
        }
}

//Dependency Injection, siempre la misma instancia,
//  por mas que el componente se destruya y se vuelva a crear
