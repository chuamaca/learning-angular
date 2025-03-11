import { Component, signal, ChangeDetectionStrategy } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent{

    counter = 25;
    counterSignal= signal(10);

    constructor (){
        setInterval(()=>{
      
            this.increaseBy(1);
            console.log('Tick');
           
        },2000);
    }


    increaseBy (value: number){
        this.counter += value;
        this.counterSignal.update((current)=> current + value);
    }

    resetBy(value: number){
        this.counter = value;   
        this.counterSignal.set(0);
    }
    
}