import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  exports: [HeaderComponent, SidebarComponent, LayoutComponent],
})
export class SharedModule {}
