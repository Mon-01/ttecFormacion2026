import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu2',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css'],
})
export class MenuComponent2 {
  items: MenuItem[] = [
    { label: 'Productos', icon: 'pi pi-box' },
    { label: 'Categorias', icon: 'pi pi-book' },
    { label: 'Usuarios', icon: 'pi pi-users' }
  ];
}
