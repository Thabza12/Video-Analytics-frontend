import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickSheetComponent } from './pick-sheet/pick-sheet.component';
import { PickSheetDetailsComponent } from './pick-sheet-details/pick-sheet-details.component';
import { VideosComponent } from './videos/videos.component';
import { VideoResultsComponent } from './video-results/video-results.component';
import { AlgoResultsComponent } from './algo-results/algo-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { UploadResourceComponent } from './upload-resource/upload-resource.component';
import { UpdatePickSheetComponent } from './update-pick-sheet/update-pick-sheet.component';
import { UpdatePickSheetDetailsComponent } from './update-pick-sheet-details/update-pick-sheet-details.component';
import { UpdateVideosComponent } from './update-videos/update-videos.component';
import { UpdateVideoResultsComponent } from './update-video-results/update-video-results.component';
import { UpdateAlgoResultsComponent } from './update-algo-results/update-algo-results.component';
import { UploadPickSheetComponent } from './upload-pick-sheet/upload-pick-sheet.component';
import { UploadVideosComponent } from './upload-videos/upload-videos.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { UploadEmployeeComponent } from './upload-employee/upload-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestRestComponent } from './password/request-rest/request-rest.component';
import { ResponseRestComponent } from './password/response-rest/response-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    PickSheetComponent,
    PickSheetDetailsComponent,
    VideosComponent,
    VideoResultsComponent,
    AlgoResultsComponent,
    UploadResourceComponent,
    UpdatePickSheetComponent,
    UpdatePickSheetDetailsComponent,
    UpdateVideosComponent,
    UpdateVideoResultsComponent,
    UpdateAlgoResultsComponent,
    UploadPickSheetComponent,
    UploadVideosComponent,
    HeaderFooterComponent,
    EmployeesComponent,
    UploadEmployeeComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RequestRestComponent,
    ResponseRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
