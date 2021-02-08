import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth/auth.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';

import { LoggedInAuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'signup',
        component: SignUpComponent,
        canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'forgetPassword',
        component: ForgetPasswordComponent,
        canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'resetPassword',
        component: ResetPasswordComponent,
        canActivate: [LoggedInAuthGuard],
      },
      {
        path: 'verifyuser',
        component: VerifyUserComponent,
        canActivate: [LoggedInAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
