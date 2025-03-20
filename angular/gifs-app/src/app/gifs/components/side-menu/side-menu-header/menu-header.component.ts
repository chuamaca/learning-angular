import {  Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './menu-header.component.html',
})
export class MenuHeaderComponent { 

  envs = environment;


}
