import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [null, 
      Validators.compose([Validators.required, Validators.minLength(6)])    ],
    confirmPassword: [null, Validators.required],
    roles: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
  }, { validators: this.checkPasswords });
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

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;

  return password === confirmPassword ? null : { notSame: true }     
}

  onSubmit(): void {
    if (!this.signupForm.invalid){
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
}
