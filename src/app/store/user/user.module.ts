import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {AUTH_FEATURE_KEY, reducer} from "./user.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./user.effect";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserFeatureStoreModule {}
