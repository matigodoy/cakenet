import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { orders } from '../../../../Data/orders';
import { Pedido } from '../../../../Models/models';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [SharedModule, MaterialModule, RouterModule],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.params['id']);
    this.order = this.pedidos.find((pedido) => pedido.id === this.id);
    console.log(
      '🚀 ~ OrderDetailComponent ~ constructor ~ this.order:',
      this.order
    );
  }

  id: number;
  pedidos = orders;
  order: Pedido | undefined;

  ngOnInit() {
    console.log('🚀 ~ OrderDetailComponent ~ ngOnInit ~ this.id', this.id);
  }
}
