import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports:[HeaderComponent, FooterComponent ]
})
export class GlobalModule { }
