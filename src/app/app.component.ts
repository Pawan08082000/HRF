import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router }  from "@angular/router";
import { filter } from 'rxjs/operators';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HRF';
  mediaSub: Subscription;
  deviceXs: Boolean;
  previousUrl: any;
  currentUrl: any;

  constructor(public mediaObserver: MediaObserver,public router: Router,
    private urlService: UrlService
    ) {}

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
     this.previousUrl = this.currentUrl;
     this.currentUrl = event.url;
     this.urlService.setPreviousUrl(this.previousUrl);

  });
  }

  ngOnDestory(){
    this.mediaSub.unsubscribe();
  }
}
