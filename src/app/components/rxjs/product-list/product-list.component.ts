import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {RxjsService} from "../rxjs.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: any;
  sub!: Observable<any>;
  constructor(private rxjsService: RxjsService) {}

  ngOnInit() {
    console.log('start');
    this.sub = this.rxjsService.getSearchQuery();
  }
}
