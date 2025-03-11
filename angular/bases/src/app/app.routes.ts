import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonBallSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

    {
        path: '',
        component: CounterPageComponent,
    },
    {
        path:'hero',
        component: HeroPageComponent,
    },
    {
        path: 'dragonball',
        component: DragonBallPageComponent
    },
    {
        path: 'dragonballsuper',
        component: DragonBallSuperPageComponent
    },
    {
        path: '**',
        redirectTo: '/'
    },
   
];
//Para definir rutas
