import { UpperCasePipe } from "@angular/common";
import { Component, signal, computed } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports :[UpperCasePipe],
})


export class HeroPageComponent{

    name=signal('Iroman');
    age=signal(45);

    heroDescription  = computed(()=> {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });

    capitaliceName = computed(()=>{
        return this.name().toUpperCase();
    })

   
    // getHeroDescription(){
    //     return `${this.name()} - ${this.age()}`;
    // }

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(){
        this.name.set('Iroman');
        this.age.set(45);
    }

    changeAge(){
        this.age.set(60);
    }


}