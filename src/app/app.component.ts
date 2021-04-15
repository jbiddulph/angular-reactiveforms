import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginserviceService } from './services/loginservice.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  title = '';
  userName = '';
  userId = '';



  constructor(
    private authenticationService: LoginserviceService,
    ) {
  }

  ngOnInit() {
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.getUser();
    }, 1000);
  }

  getUser() {
    this.authenticationService.getProfile()
    .pipe(takeUntil(this.destroy$))
    .subscribe(User => {
      this.userName = User.name;
      this.userId = User.id;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
