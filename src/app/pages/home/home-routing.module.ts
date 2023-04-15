import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {SocketioTestComponent} from "../../components/socketio-test/socketio-test.component";

const routes: Routes = [
  {
    path: 'scoketio',
    component: HomeComponent,
  },
  {
    path: '',
    component: SocketioTestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
