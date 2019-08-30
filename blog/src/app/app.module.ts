import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/BlogModule';
import { CommonMaterialModules } from './common/material/CommonMaterialModule';
import { MatToolbarModule } from '@angular/material';
import { LoginModule } from './login/LoginModule';
import { AuthModule } from './common/auth/AuthModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    CommonMaterialModules,
    BlogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
