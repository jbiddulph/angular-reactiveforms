import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from './services/loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message = 'you are not logged in';
  title = '';
  userid = '';
  user: any;

  constructor(
    private authenticationService: LoginserviceService,
    ) {
  }

  ngOnInit() {
    this.user = this.authenticationService.getProfile();
    if(!this.user){
      this.getUser();
    }
  }

  getUser(){
    return this.user.subscribe(userprofile => {
      console.log('here', userprofile);
      this.title = userprofile.name;
      this.userid = userprofile.id;
      this.message = 'you are now logged in';
    });
  }
}
