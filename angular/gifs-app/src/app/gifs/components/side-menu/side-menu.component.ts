import { Component } from '@angular/core';
import { MenuHeaderComponent } from "./side-menu-header/menu-header.component";
import { MenuOptionsComponent } from "./side-menu-options/menu-options.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [MenuHeaderComponent, MenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { }
