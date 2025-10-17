import { Component } from '@angular/core';
import { MenuComponent2 } from '../menu2/menu2.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent2,RouterModule],
  templateUrl: './pagina-principal.html'
})
export class PaginaPrincipalComponent {
  // Aquí puedes poner lógica del dashboard si la necesitas

}
