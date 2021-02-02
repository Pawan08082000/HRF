import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
title : String;
  constructor(private router: Router, private titleService: TitleService) {
}

  ngOnInit(): void {
    this.titleService.getTitle().subscribe(appTitle => this.title = appTitle);
  }

}
