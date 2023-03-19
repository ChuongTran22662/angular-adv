import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {RxjsService} from "./rxjs.service";
import { SearchListComponent } from './search-list/search-list.component';
import {FormsModule} from "@angular/forms";
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    ProductListComponent,
    SearchListComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    FormsModule
  ],
  providers: [
    RxjsService
  ]
})
export class RxjsModule { }
