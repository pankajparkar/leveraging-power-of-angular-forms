import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileTemplateComponent } from './user-profile-template/user-profile-template.component';
import { UserProfileModelComponent } from './user-profile-model/user-profile-model.component';
import { HomeComponent } from './home/home.component';
import { MatcherDirective } from './directives/matcher.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    UserProfileTemplateComponent,
    UserProfileModelComponent,
    HomeComponent,
    MatcherDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
