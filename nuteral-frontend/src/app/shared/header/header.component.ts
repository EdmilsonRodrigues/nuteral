import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationItem {
  label: string;
  path: string;
  exact: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navigationItems: NavigationItem[] = [
    { label: 'Início', path: '/', exact: true },
    { label: 'Sobre Nós', path: '/about', exact: false },
    { label: 'Produtos', path: '/products', exact: false },
    { label: 'Contato', path: '/contact', exact: false },
    { label: 'Carreiras', path: '/careers', exact: false },
    { label: 'Newsletter', path: '/newsletter', exact: false }
  ];
}
