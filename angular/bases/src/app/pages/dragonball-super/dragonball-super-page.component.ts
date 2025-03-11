import { NgClass } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../components/dragonball/character-add/character-add.component";
import { DragonBallService } from "../components/services/dragonball.service";


interface Character{
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector:'dragonball-super',
    imports: [CharacterListComponent, CharacterAddComponent]
})

export class DragonBallSuperPageComponent {


    //DI traducional
    // constructor(public dragonballService: DragonBallService){
    // }

    //Manera Nueva
    public dragonballService = inject(DragonBallService);
    

}
