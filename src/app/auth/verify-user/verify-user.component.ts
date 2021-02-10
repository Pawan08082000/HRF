import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TitleService } from '../../services/title.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss'],
})
export class VerifyUserComponent implements OnInit {
  confirmationCode;
  message;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Verify User');
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((params) => {
      this.confirmationCode = params['confirmationCode'];
    });

    this.auth.verifyUser(this.confirmationCode).subscribe(
      (result) => {
        this.message = result;
      },
      (err) => {}
    );
  }
}
