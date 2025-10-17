import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  items: MenuItem[] = [
    { label: 'Acceder', icon: 'pi pi-users' }
    //{ label: 'Registrarse', icon: 'pi pi-file-edit' }
  ];
}
