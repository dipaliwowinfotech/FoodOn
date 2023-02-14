import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  showSidebar: boolean = false;
  showBaronFooter: boolean = false;
  showMargine: boolean = false;

  constructor(private http:HttpClient){}

  logOut: EventEmitter<any> = new EventEmitter();


  
//this is for sidebar 
  toggleSideBar() {
    this.showSidebar = !this.showSidebar;
}
togglefooterSideBar() {
  this.showBaronFooter = !this.showBaronFooter;
  this.showMargine = true;
}
showmargin(){
  this.showMargine = true;
}


//API//
loginData: any;
getlogin() {
  return this.loginData;
}

setlogin(data: any) {
  this.loginData = data;
}
list: any;
  getOTP() {
    return this.list;
  }
  setOTP(data: any) {
    this.list = data;
  }


getOtp(data:any){
  return this.http.post("https://apiifoodonlink.greemgoldfpc.com/api/OTP_Mobile",data)
}
verifyOtp(data:any){
return this.http.post("https://apiifoodonlink.greemgoldfpc.com/api/User_Registration",data)
}
detailform(data:any){
  return this.http.post("https://apiifoodonlink.greemgoldfpc.com/api/Dinning_request",data)
}
profile(data:any){
  return this.http.post("https://apiifoodonlink.greemgoldfpc.com/api/User_Registration",data)
}
newRequest(data:any){
  return this.http.post("https://apiifoodonlink.greemgoldfpc.com/api/Get_Data",data)
}
 
}
