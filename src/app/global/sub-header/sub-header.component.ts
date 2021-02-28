import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  previousUrl: string = '';
  CurrentRouteLink: any;

  showPreviousName: any;
  showCurrentName: any;
  constructor(private router: Router, private urlService: UrlService) {}

  ngOnInit(): void {
    // Or subscribe to the previous url observable here
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      this.previousUrl = previousUrl;
      if (previousUrl != null || previousUrl != undefined) {
        this.showPreviousName = previousUrl.split('/');
      }
      this.CurrentRouteLink = this.router.url;

      this.showCurrentName = this.CurrentRouteLink.split('/');
    });
  }
}
