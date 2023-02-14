import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm!: FormGroup;
  verifiedUser: any;

  constructor(private api:ApiService,private formBuilder:FormBuilder){}

  ngOnInit() {
    
    this.profileForm = this.formBuilder.group({
      MOBILE_NUMBER:['',[Validators.required,
       Validators.pattern('[6-9]\\d{9}'),
        Validators.minLength(10),
        Validators.maxLength(10)],
        
      ],

      USER_NAME: ['', [Validators.required,
          
          Validators.pattern('[a-zA-Z].*')]],

          EMAIL_ID:['',[Validators.required,
    Validators.pattern('[a-zA-Z].*')]],
    
    ADDRESS: ['', [Validators.required,]]

    });
  }
  loginData(){
    this.verifiedUser = JSON.parse(localStorage.getItem('verifiedUser')!);
    console.log(this.verifiedUser);
  }

  update(){
    this.profileForm.value
    console.log(this.profileForm.value);
    let payload =
    {
      "USER_NAME": this.profileForm.value.USER_NAME,
      "MOBILE_NUMBER": this.profileForm.value.MOBILE_NUMBER,
      "EMAIL_ID": this.profileForm.value.EMAIL_ID,
      "ADDRESS": this.profileForm.value.ADDRESS,
      "PROFILE_PHOTO": "QEA=",
      "EXTRA1": "",
      "TYPE": "EDIT",
      "USER_ID":''
      }
     console.log(payload)
    this.api.profile(payload).subscribe((res:any)=>{
     console.log(res);
    })
  }

}
