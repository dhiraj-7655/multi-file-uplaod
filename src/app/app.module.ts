import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserInfoFileUplaodComponent } from './user-info-file-uplaod/user-info-file-uplaod.component';
import { FileReactiveComponent } from './file-reactive/file-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    UserInfoComponent,
    UserInfoFileUplaodComponent,
    FileReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
