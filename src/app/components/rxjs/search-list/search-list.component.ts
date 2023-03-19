import { Component, OnInit } from '@angular/core';
import {RxjsService} from "../rxjs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  query!: string;
  constructor(private rxjsService: RxjsService, private router: Router) {}

  ngOnInit() {}

  search() {
    console.log(this.query);
    this.rxjsService.setSearchQuery(this.query);
    this.router.navigate(['/rxjs/detail']);
  }

}
