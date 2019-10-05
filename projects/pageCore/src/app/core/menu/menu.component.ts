import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  template: `
    <mat-nav-list class="navigation">
      <mat-list-item *ngFor="let menuitem of menuService.getAll()">
        <a class="relative" [routerLink]="['/', menuitem.state]" *ngIf="menuitem.type === 'link'">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name}}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="relative" href="{{menuitem.state}}" *ngIf="menuitem.type === 'extLink'">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name}}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="relative" href="{{menuitem.state}}" target="_blank" *ngIf="menuitem.type === 'extTabLink'">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name}}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="relative" href="javascript:;" *ngIf="menuitem.type === 'sub'">
          <mat-icon>{{ menuitem.icon }}</mat-icon>
          <span>{{ menuitem.name}}</span>
          <span fxFlex></span>
          <span class="menu-badge mat-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
          <mat-icon class="menu-caret">arrow_drop_down</mat-icon>
        </a>
        <mat-nav-list class="sub-menu" *ngIf="menuitem.type === 'sub'">
          <mat-list-item *ngFor="let childitem of menuitem.children" routerLinkActive="open">
            <a [routerLink]="['/', menuitem.state, childitem.state ]" class="relative">{{ childitem.name}}</a>
          </mat-list-item>
        </mat-nav-list>
      </mat-list-item>
    </mat-nav-list>`,
  providers: [MenuService]
})
export class MenuComponent {
  currentLang = 'en';

  constructor(
    public menuService: MenuService
  ) {}

  addMenuItem(): void {
    this.menuService.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        { state: 'menu', name: 'MENU' },
        { state: 'timeline', name: 'MENU' }
      ]
    });
  }
}
