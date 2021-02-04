import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required],
    roles: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
  });
  hide = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  message;

  roles = [
    { name: 'HR', abbreviation: 'moderator' },
    { name: 'Employee', abbreviation: 'user' },
    { name: 'Admin', abbreviation: 'admin' },
  ];
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Signup');
  }

  onSubmit(): void {
    const {
      username,
      email,
      password,
      confirmPassword,
      roles,
    } = this.signupForm.value;
    this.auth
      .register(username, email, password, confirmPassword, Array(roles))
      .subscribe(
        (data) => {
          this.message = data;
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}
