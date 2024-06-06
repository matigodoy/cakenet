import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { orders } from '../../../../Data/orders';
import { EstadoPedido, Estados, Pedido } from '../../../../Models/models';
import { AuthService } from '../../../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [SharedModule, MaterialModule, RouterModule],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.params['id']);
    this.order = this.pedidos.find((pedido) => pedido.id === this.id);
    this.estado = this.order?.estados[this.order.estados.length - 1] || null;
  }

  @ViewChild('cancelarPedidoTemplate')
  cancelarPedidoTemplate!: TemplateRef<any>;

  @ViewChild('cambiarEstadoTemplate')
  cambiarEstadoTemplate!: TemplateRef<any>;

  role: string | null = null;
  id: number;
  pedidos = orders;
  order: Pedido | undefined;
  isAdmin = false;
  estados = [
    'Creado',
    'Pagado',
    'En preparación',
    'Preparado',
    'En camino',
    'Entregado',
    'Cancelado',
  ];
  estado: EstadoPedido | null;

  async ngOnInit() {
    this.role = await this.auth.getUserRole();
    this.isAdmin = await this.auth.isAdmin();
    console.log(
      '🚀 ~ OrderDetailComponent ~ ngOnInit ~ this.isAdmin:',
      this.isAdmin
    );
  }

  cancelarPedido(cancelar?: boolean) {
    if (cancelar) {
      this._snackbar.open('Pedido cancelado', 'Cerrar', {
        duration: 2000,
      });
      this.router.navigate(['/orders']);
      return;
    }

    if (this.order) {
      this._dialog.open(this.cancelarPedidoTemplate);
    }
  }

  cambiarEstado(cambiado?: boolean) {
    if (cambiado) {
      this._snackbar.open('Estado cambiado', 'Cerrar', {
        duration: 2000,
      });
      if (this.estado)
        this.order?.estados.push({
          id: this.estado.id + 1,
          estado: this.estado as unknown as Estados,
          descripcion: '',
          fecha: new Date(),
        });
      console.log(
        '🚀 ~ OrderDetailComponent ~ this.order?.estados:',
        this.order?.estados
      );
      // this.router.navigate(['/orders']);
      return;
    }

    if (this.order) {
      this._dialog.open(this.cambiarEstadoTemplate);
    }
  }
}
