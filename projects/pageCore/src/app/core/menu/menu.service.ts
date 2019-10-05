import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'Tableau de bord',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'https://github.com/ccesco',
    name: 'GitHub ccesco',
    type: 'extTabLink',
    icon: 'bookmark'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
