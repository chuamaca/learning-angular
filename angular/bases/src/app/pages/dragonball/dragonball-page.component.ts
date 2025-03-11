import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


interface Character{
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-page.component.html',
    // imports:[NgClass]
})

export class DragonBallPageComponent {

    name=signal('');
    power=signal(0);


    characteres= signal<Character[]>([
        {id: 1, name: 'Goku', power: 9001},
    ]);

    addCharacter(){
        if(!this.name()|| !this.power() || this.power()<= 0){
            return;
        }

        const newCharacter : Character = {
            id: this.characteres.length + 1,
            name: this.name(),
            power: this.power()
        }

        // this.characteres().push(newCharacter);
        this.characteres.update((list)=> [...list, newCharacter]);
    
        this.resetFields();
    
    };

    
    resetFields(){
        this.name.set('');
        this.power.set(0);
    }

   

    // powerClasses = computed(()=>{
    //     return {
    //         'text-danger': true,
    //     };
    // });

}
