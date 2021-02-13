import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm = this.fb.group({
    email: [null, Validators.required],
  });

  errorMessage;
  message;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private titleService: TitleService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Forget Password');
  }

  onSubmit() {
    if (!this.forgetPasswordForm.invalid){
    const { email } = this.forgetPasswordForm.value;

    this.authService.recoverPassword(email).subscribe(
      (data) => {
        this.message = data;
        // this.router.navigate(['/auth/resetPassword']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
    }
  }
}
