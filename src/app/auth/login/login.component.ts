import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TitleService } from '../../services/title.service';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  message;
  roles: string[] = [];
  booleanVariable: boolean = true;
  hide:boolean = true;

  @Output() msg = new EventEmitter<string>();

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    rememberMe: [new FormControl(false)],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private titleService: TitleService,
    private tokenStorage: TokenStorageService,
    private _snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit(): void {
    if (!this.loginForm.invalid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe(
        (data) => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          
          this.message = data.message;
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;

          this._snackBar.open(data.message, 'OK', {
            duration: 2000,
          });
          this.loginForm.reset();
          this.router.navigate(['/home']);
          // this.reloadPage();
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          this.loginForm.reset();
          this._snackBar.open(this.errorMessage, 'OK', {
            duration: 2000,
          });
        }
      );
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
