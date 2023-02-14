import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent {
   detailForm!: FormGroup<any>
  constructor(private api:ApiService,private formBuilder:FormBuilder){}

  ngOnInit() {
    this.detailForm = this.formBuilder.group({
     

        NO_OF_PEOPLE:['',[Validators.required,
          Validators.pattern('[6-9]\\d{9}'),
           Validators.minLength(10),
           Validators.maxLength(10)],],

           MINIMUM_BUDGET:['',[Validators.required,
            Validators.pattern('[6-9]\\d{9}'),
             Validators.minLength(10),
             Validators.maxLength(10)],],
           
             BOOKING_DATE:['',[Validators.required]],
             ARRIVAL_TIME:['',[Validators.required]],
             OUT_TIME:['',[Validators.required]],
    });
  }

 submit(){
  this.detailForm.value
  console.log(this.detailForm.value);
  let payload =
  {"DINNING_ID":this.detailForm.value.DINNING_ID,
  "USER_ID":this.detailForm.value.USER_ID,
  "DINNER_TYPE":this.detailForm.value.DINNER_TYPE,
  "CHOICE":this.detailForm.value.CHOICE,
  "PREFERENCE":"",
  "NO_OF_PEOPLE":this.detailForm.value.NO_OF_PEOPLE,
  "MINIMUM_BUDGET":this.detailForm.value.MINIMUM_BUDGET,
  "ARRIVAL_TIME":this.detailForm.value.ARRIVAL_TIME,
  "OUT_TIME":this.detailForm.value.OUT_TIME,
  "REMARK":'',
  "SHOW_MOBILE_NUMBER":this.detailForm.value.SHOW_MOBILE_NUMBER,
  "ADDRESS_TYPE":'',
  "ADDRESS":this.detailForm.value.ADDRESS,
  "LATITUDE":this.detailForm.value.LATITUDE,
  "LONGITUDE":this.detailForm.value.LONGITUDE,
  "EXTRA1":"","EXTRA2":"",
  "TYPE":this.detailForm.value.TYPE,
  "REQUEST_TYPE":this.detailForm.value.REQUEST_TYPE,
  "RESTURANT_LIST":this.detailForm.value.RESTURANT_LIST,
  "FAMILYRESTRO_TYPE":this.detailForm.value.FAMILYRESTRO_TYPE,
  "BOOKING_DATE":this.detailForm.value.BOOKING_DATE,
  "MINIMUM_BUDGET_DRINKS":this.detailForm.value.MINIMUM_BUDGET_DRINKS
}
 
  this.api.detailform(payload).subscribe((res:any)=>{
   console.log(res);
  })
 }

}
