import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { AlgoResults } from './algo-results';
import { Employee } from './employee';
import { PickSheet } from './pick-sheet';
import { PickSheetDetails } from './pick-sheet-details';
import { VideoResults } from './video-results';
import { Videos } from './videos';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private baseUrl = 'http://localhost:8081/api/v1';
  private url = 'http://localhost/api';
  private loginUrl = 'http://localhost/api/login';
  private registerUrl = 'http://localhost/api/register';
  private iss = {
    login: 'http://localhost/api/login',
    register: 'http://localhost/api/register'
  };
  private resetPassword = 'http://localhost/api/resetPassword';
  private newPassword = 'http://localhost/api/newPassword';
  isAuthenticated = false;

  private signedIn = new BehaviorSubject<boolean>(this.loggedIn());
  authStatus = this.signedIn.asObservable();


  constructor(private _http: HttpClient) { }

  //spring-boot 
    
  viewPickSheets(): Observable<PickSheet[]> {
    return this._http.get<PickSheet[]>(`${this.baseUrl}/pickSheets`);
  }

  viewPickSheetDetails(): Observable<PickSheetDetails[]> {
    return this._http.get<PickSheetDetails[]>(`${this.baseUrl}/pickSheetDetails`)
  }

  viewVideos(): Observable<Videos[]> {
    return this._http.get<Videos[]>(`${this.baseUrl}/videos`)
  }

  viewVideoResults(): Observable<VideoResults[]> {
    return this._http.get<VideoResults[]>(`${this.baseUrl}/videoResults`)
  }

  viewAlgoResults(): Observable<AlgoResults[]> {
    return this._http.get<AlgoResults[]>(`${this.baseUrl}/algoResults`)
  }

  updatePicksheets(pickSheetID: number, pickSheet: PickSheet): Observable<Object> {
    return this._http.put(`${this.baseUrl}/pickSheet/${pickSheetID}`, pickSheet)
  }

  updatePicksheetDetails(id: number, pickSheetDetails: PickSheetDetails): Observable<Object> {
    return this._http.put(`${this.baseUrl}/pickSheetDetails/${id}`, pickSheetDetails)
  }

  updateVideo(id: number, video: Videos): Observable<Object> {
    return this._http.put(`${this.baseUrl}/videos/${id}`, video)
  }

  updateVideoResults(id: number, videoResult: VideoResults): Observable<Object> {
    return this._http.put(`${this.baseUrl}/videoResults/${id}`, videoResult)
  }

  updateAlgoResults(id: number, algoResult: AlgoResults): Observable<Object> {
    return this._http.put(`${this.baseUrl}/algoResults/${id}`, algoResult)
  }

  getPickSheetById(pickSheetID: number): Observable<PickSheet> {
    return this._http.get<PickSheet>(`${this.baseUrl}/pickSheet/${pickSheetID}`)
  }

  getPickSheetDetailsById(id: number): Observable<PickSheetDetails> {
    return this._http.get<PickSheetDetails>(`${this.baseUrl}/pickSheetDetails/${id}`)
  }

  getVideoResultsById(id: number): Observable<VideoResults> {
    return this._http.get<VideoResults>(`${this.baseUrl}/videoResults/${id}`)
  }

  getAlgoResultsById(id: number): Observable<AlgoResults> {
    return this._http.get<AlgoResults>(`${this.baseUrl}/algoResults/${id}`)
  }

  getVideosById(id: number): Observable<Videos> {
    return this._http.get<Videos>(`${this.baseUrl}/videos/${id}`)
  }

  deleteAlgoResutls(id: number): Observable<Object> {
    return this._http.delete(`${this.baseUrl}/algoResults/${id}`)
  }

  deleteVideo(id: number): Observable<Object> {
    return this._http.delete(`${this.baseUrl}/videos/${id}`)
  }

  deleteVideoResults(id: number): Observable<Object> {
    return this._http.delete(`${this.baseUrl}/videoResults/${id}`)
  }

  deletePickSheet(pickSheetID: number): Observable<Object> {
    return this._http.delete(`${this.baseUrl}/pickSheet/${pickSheetID}`)
  }

  deletePickSheetDetails(id: number): Observable<Object> {
    return this._http.delete(`${this.baseUrl}/pickSheetDetails/${id}`)
  }

  findPickSheetDetailsByPickSheet(pickSheetID: number): Observable<Object>{
    return this._http.get<Object>(`${this.baseUrl}/pickSheetDetailsByPickSheet/${pickSheetID}`)
  }

  uploadResource(body: any): Observable<Object> {
    return this._http.post<Object>(`${this.baseUrl}/uploadVideo`, body)
  }

  uploadVideosResource(body: any): Observable<Object>{
    return this._http.post<Object>(`${this.baseUrl}/saveVideo`, body)
  }

  uploadPickSheetResource(id: number, body: any): Observable<Object>{
    return this._http.post<Object>(`${this.baseUrl}/savePickSheet/${id}`, body)
  }

  //laravel-employee

  getAllEmployees(){
    return this._http.get(`${this.url}/employees`);
  }

  getEmployeeById(id: number){
    return this._http.get(`${this.url}/employee/${id}`);
  }

  uploadEmployee(employee: Employee){
    return this._http.post(`${this.url}/addEmployee`, employee);
  }

  deleteEmployeeById(id: number){
    return this._http.delete(`${this.url}/deleteEmployee/${id}`);
  }

  updateEmployee(id: number, employee: Employee){
    return this._http.put(`${this.url}/updateEmployee/${id}`, employee);
  }

  //laravel-login, register, token handler & auth

  login(data: any){
    return this._http.post(`${this.loginUrl}`, data);
  }

  register(data: any){
    return this._http.post(`${this.registerUrl}`, data);
  }

  handleToken(token: any){
    this.set(token);
    // console.log(this.isValid());
  }

  set(token: any){
    localStorage.setItem('token', token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid(){
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }

    return false;

  }

  payload(token: any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: any){
    return JSON.parse(atob(payload));

  }

  loggedIn(){
    return this.isValid();
  }

  changeAuthStatus(value: boolean){
    this.signedIn.next(value)
  }


  //reset password

  passwordReset(data: any){
    return this._http.post(`${this.resetPassword}`, data);
  }

  changePassword(data: any){
    return this._http.post(`${this.newPassword}`, data);
  }



  
}
