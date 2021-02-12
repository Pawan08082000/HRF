import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  message;
  errorMessage;
  token;
  cnPassHide:boolean = true;
  hide:boolean = true;

  resetPasswordForm = this.fb.group(
    {
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      confirmPassword: [null, Validators.required],
    },
    { validators: this.checkPasswords }
  );
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private titleService: TitleService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Change Password');
  }


  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    console.log(password === confirmPassword)
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    if (!this.resetPasswordForm.invalid) {
      const { password, confirmPassword } = this.resetPasswordForm.value;
      this.activatedRoute.queryParams.subscribe((params) => {
        this.token = params['token'];
      });
      this.authService
        .resetPassword(password, confirmPassword, this.token)
        .subscribe(
          (data) => {
            this.message = data;
            this.router.navigate(['/home']);
          },
          (err) => {
            this.errorMessage = err.error.message;
          }
        );
    }
  }

}
