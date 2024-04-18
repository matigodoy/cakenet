import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { MaterialModule } from '../material/material.module';
import { OrdersComponent } from './page/orders/orders.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
