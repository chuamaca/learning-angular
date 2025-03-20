import {  Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption{
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-options.component.html',
})
export class MenuOptionsComponent {

  menuOptions: MenuOption[] = [
  {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    route: '/dashboard/trending',
    subLabel: 'Gifs Populares'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    route: '/dashboard/search',
    subLabel: 'Buscar Gifs'
  },
];

 }
