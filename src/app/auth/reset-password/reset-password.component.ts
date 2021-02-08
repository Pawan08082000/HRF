import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  resetPasswordForm = this.fb.group({
    orgpassword: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required],
  });
  constructor( private router: Router,
    private fb: FormBuilder,
    private titleService: TitleService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Change Password');
  }
  onSubmit() {
    const { password, confirmPassword } = this.resetPasswordForm.value;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = params['token'];
    });
    this.authService.resetPassword(password, confirmPassword, this.token).subscribe(
      (data) => {
        this.message = data;
        this.router.navigate(['/home']);
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );  }
}
