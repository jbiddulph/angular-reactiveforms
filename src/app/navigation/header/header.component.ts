import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() SidenavToggle = new EventEmitter<void>();
  isUserLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
    let storeData = localStorage.getItem("currentUser");
      console.log("StoreData: " + storeData);

      if( storeData != null || storeData == "true") {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
  }

  onToggleSidenav() {
    this.SidenavToggle.emit();
  }

}
