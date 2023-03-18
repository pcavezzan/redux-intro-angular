import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MessagesComponent} from './messages/messages.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageCreateComponent} from './message-create/message-create.component';
import {MessageFormComponent} from './message-form/message-form.component';
import { StoreModule } from '@ngrx/store';
import {appReducer} from "./ngrx/reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {Effects} from "./ngrx/effects";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessagesComponent,
    MessageCreateComponent,
    MessageFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      app: appReducer
    }),
    ...[ environment.devMode ? StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }) : []],
    EffectsModule.forRoot([Effects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
