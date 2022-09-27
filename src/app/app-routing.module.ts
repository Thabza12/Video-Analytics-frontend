import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginService } from './after-login.service';
import { AlgoResultsComponent } from './algo-results/algo-results.component';
import { AppComponent } from './app.component';
import { BeforeLoginService } from './before-login.service';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RequestRestComponent } from './password/request-rest/request-rest.component';
import { ResponseRestComponent } from './password/response-rest/response-rest.component';
import { PickSheetDetailsComponent } from './pick-sheet-details/pick-sheet-details.component';
import { PickSheetComponent } from './pick-sheet/pick-sheet.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UpdateAlgoResultsComponent } from './update-algo-results/update-algo-results.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdatePickSheetDetailsComponent } from './update-pick-sheet-details/update-pick-sheet-details.component';
import { UpdatePickSheetComponent } from './update-pick-sheet/update-pick-sheet.component';
import { UpdateVideoResultsComponent } from './update-video-results/update-video-results.component';
import { UpdateVideosComponent } from './update-videos/update-videos.component';
import { UploadEmployeeComponent } from './upload-employee/upload-employee.component';
import { UploadPickSheetComponent } from './upload-pick-sheet/upload-pick-sheet.component';
import { UploadResourceComponent } from './upload-resource/upload-resource.component';
import { UploadVideosComponent } from './upload-videos/upload-videos.component';
import { VideoResultsComponent } from './video-results/video-results.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [BeforeLoginService]}, 
  {path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService]},
  {path: 'upload-resource', component: UploadResourceComponent, canActivate: [AfterLoginService]},
  {path: 'upload-video', component: UploadVideosComponent, canActivate: [AfterLoginService]},
  {path: 'upload-pick-sheet/:id', component: UploadPickSheetComponent, canActivate: [AfterLoginService]},
  {path: 'pick-sheets', component: PickSheetComponent, canActivate: [AfterLoginService]},
  {path: 'pick-sheet-details', component: PickSheetDetailsComponent, canActivate: [AfterLoginService]},
  {path: 'videos', component: VideosComponent, canActivate: [AfterLoginService]},
  {path: 'video-results', component: VideoResultsComponent, canActivate: [AfterLoginService]},
  {path: 'algo-results', component: AlgoResultsComponent, canActivate: [AfterLoginService]},
  {path: 'update-pick-sheet/:pickSheetID', component: UpdatePickSheetComponent, canActivate: [AfterLoginService]},
  {path: 'update-pick-sheet-details/:id', component: UpdatePickSheetDetailsComponent, canActivate: [AfterLoginService]},
  {path: 'update-videos-results/:id', component: UpdateVideoResultsComponent, canActivate: [AfterLoginService]},
  {path: 'update-algo-results/:id', component: UpdateAlgoResultsComponent, canActivate: [AfterLoginService]},
  {path: 'update-video/:id', component: UpdateVideosComponent, canActivate: [AfterLoginService]},
  {path: 'employees', component: EmployeesComponent, canActivate: [AfterLoginService]},
  {path: 'add-employee', component: UploadEmployeeComponent, canActivate: [AfterLoginService]},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent, canActivate: [AfterLoginService]},
  {path: 'profile', component: ProfileComponent, canActivate: [AfterLoginService]},
  {path: 'request-reset', component: RequestRestComponent, canActivate: [BeforeLoginService]},
  {path: 'response-reset', component: ResponseRestComponent, canActivate: [BeforeLoginService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
