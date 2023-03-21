import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {UserFeatureStoreModule} from "./user/user.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictStateImmutability: true,
          strictActionTypeUniqueness: true,
        },
      },
    ),
    EffectsModule.forRoot(),
    UserFeatureStoreModule
  ],
})
export class AppStoreModule {}
