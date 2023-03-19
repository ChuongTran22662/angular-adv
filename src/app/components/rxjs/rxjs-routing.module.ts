import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {SearchListComponent} from "./search-list/search-list.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {
    path: '',
    component: SearchListComponent,
  },
  {
    path: 'detail',
    component: ProductListComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
