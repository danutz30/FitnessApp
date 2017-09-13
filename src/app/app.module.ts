import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

// var config = {
//   apiKey: "AIzaSyBw6Yb-9gqNv-1PXWGw7MadpVP-Oqw5YIU",
//   authDomain: "fitness-app-c28b7.firebaseapp.com",
//   databaseURL: "https://fitness-app-c28b7.firebaseio.com",
//   projectId: "fitness-app-c28b7",
//   storageBucket: "fitness-app-c28b7.appspot.com",
//   messagingSenderId: "307466305156"
// };
