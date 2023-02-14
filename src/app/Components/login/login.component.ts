import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup 
  otpForm!: FormGroup 
  otpData:any=[];
  otpID:any;
  isSubmitted: boolean = false;


  constructor(private api:ApiService, private formBuilder:FormBuilder,private router:Router){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobile_no:['',[Validators.required,
       Validators.pattern('[6-9]\\d{9}'),
        Validators.minLength(10),
        Validators.maxLength(10)],]
    });
  }
  get form() { return this.loginForm.controls;}

//   getotp(){
//     this.isSubmitted= true;
//     this.api.getOtp(this.loginForm.value).subscribe((res)=>{
//        console.log(res);
//     })
  
//   if(this.loginForm.valid){
//   localStorage.setItem('verifiedUser',JSON.stringify(this.loginForm.value));
//     this.router.navigate(['otp']);
    
//   }

// }
getotp(){
this.isSubmitted= true;
    
  this.loginForm.value
  console.log(this.loginForm)
  if(this.loginForm.valid){
    
localStorage.setItem('verifiedUser',JSON.stringify(this.loginForm.value));

  this.api.setlogin(this.loginForm.value);
  this.api.getOtp(this.loginForm.value).subscribe((res:any)=>{
    console.log(res)
    // this.otpData = res.DATA;
    this.otpData.push(res)
   
    this.api.setOTP(this.otpData);
    


    
    this.router.navigate(['/otp'])
    })
  }


}
}
