import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './profile/view/view.component';
import { EditComponent } from './profile/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ViewComponent]
})
export class AppModule { }
