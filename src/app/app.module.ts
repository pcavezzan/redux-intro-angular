import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MessagesComponent} from './messages/messages.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageCreateComponent} from './message-create/message-create.component';
import {MessageFormComponent} from './message-form/message-form.component';
import {bindEffectToStoreAppFactory, Effects} from "./effects";
import {Store} from "./store";

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
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: bindEffectToStoreAppFactory,
      deps: [Store, Effects],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
