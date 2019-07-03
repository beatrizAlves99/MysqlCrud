import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/contatos', title: 'Contatos', icon: 'person', class: '' },
  { path: '/empresas', title: 'Empresas', icon: 'people', class: '' },
  { path: '/produtos', title: 'Produtos', icon: 'local_offer', class: '' },
  { path: '/tarefas', title: 'Tarefas', icon: 'list_alt', class: '' },
  { path: '/vendas', title: 'Vendas', icon: 'local_grocery_store', class: 'active-pro' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
