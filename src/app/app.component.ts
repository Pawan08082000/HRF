import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HRF';
  mediaSub: Subscription;
  deviceXs: Boolean;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log('hello');
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }

  ngOnDestory(){
    this.mediaSub.unsubscribe();
  }
}
