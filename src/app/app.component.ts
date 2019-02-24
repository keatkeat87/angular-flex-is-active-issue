import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-flex-is-active-issue';

  constructor(
    private mediaObserver: MediaObserver
  ) { }

  // async ngOnInit() {
  //   let active = this.mediaObserver.isActive('xs');
  //   console.log(active); // always false

  //   active = await this.mediaObserver.media$.pipe(take(1), map(media => media.mqAlias === 'xs')).toPromise();
  //   console.log(active); // true

  //   this.mediaObserver.media$.subscribe((v) => {
  //     if (v.mqAlias === 'xs') {
  //       active = this.mediaObserver.isActive('xs');
  //       console.log(active);  // true
  //     }
  //   });
  // }

ngOnInit() {
  let active = this.mediaObserver.isActive('xs');
  console.log(active); // always false

  this.mediaObserver.media$.subscribe((v) => {
    if (v.mqAlias === 'xs') {
      active = this.mediaObserver.isActive('xs');
      console.log(active);  // true
    }
  });
}
}
