import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [SignUpComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,MatSelectModule,MatButtonModule,MatInputModule,
    MatRadioModule,MatCardModule,ReactiveFormsModule,MatIconModule
    ,MatGridListModule
  ]
})
export class AuthModule { }