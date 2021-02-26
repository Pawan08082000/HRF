import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  [x: string]: any;
  showRoute: any
  routeLink: any
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeLink = this.router.url
    this.showRoute = this.router.url.split('/') 
    // this.showRoute = this.titleService.getTitle();
    // this.router
    //   .events.pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => {
    //       let child = this.activatedRoute.firstChild;
    //       while (child.firstChild) {
    //         child = child.firstChild;
    //       }
    //       if (child.snapshot.data['title']) {
    //         return child.snapshot.data['title'];
    //       }
    //       return this.showRoute;
    //     })
    //   ).subscribe((ttl: string) => {
    //     this.titleService.setTitle(ttl);
    //   });
  }

}
