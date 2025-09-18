import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  activeTab: string = 'inicio';
  isMenuOpen: boolean = false;

  estadisticas = {
    usuarios: 1245,
    ventas: 56890,
    pedidos: 342,
    ingresos: 12560
  };

  cambiarTab(tab: string): void {
    this.activeTab = tab;
    if (window.innerWidth < 768) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
