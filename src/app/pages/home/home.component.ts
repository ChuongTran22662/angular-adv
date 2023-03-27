import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(res => {
      console.log(res);
    })
  }

}
