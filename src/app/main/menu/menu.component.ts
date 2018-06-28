import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/main/menu.service';
import {Menu} from '../../entity/main/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[];
  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.menuService.getMenus()
      .subscribe(menus => this.menus = menus);
  }

  forWards(): void {
  }

}
