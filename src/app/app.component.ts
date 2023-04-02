import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  user!: any;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(res => {
      this.user = res;
    })
  }

  logout() {
    this.authService.logout();
  }
}
