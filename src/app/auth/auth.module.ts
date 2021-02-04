import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from '../_helpers/auth.interceptor';
import { VerifyUserComponent } from './verify-user/verify-user.component';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AuthComponent,
    VerifyUserComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [AuthInterceptor, FormsModule, HttpClientModule],
  bootstrap: [],
})
export class AuthModule {}
