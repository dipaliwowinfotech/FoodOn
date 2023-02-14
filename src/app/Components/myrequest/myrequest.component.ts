import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-wallet',
  templateUrl: './myrequest.component.html',
  styleUrls: ['./myrequest.component.css']
})
export class WalletComponent implements OnInit {
   activelist:any;
   completedlist:any;
   isActive: any;
   walletdetails:any;
   verifiedUser: any;
   complete:any = "Compl";
   actiVe:any = "Active";
   showError: boolean = false;
  constructor(private api:ApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.loginData();
    this.newrequest();
    
  }

  newrequest(){
    this.showError = false;
    let payload =
    {"START":"",
    "END":"",
    "WORD":"",
    "GET_DATA":"Get_DinningRequestList",
    "ID1":"101","ID2":"",
    "ID3":"",
    "STATUS":"Pending",
    "START_DATE":"",
    "END_DATE":"",
    "EXTRA1":"",
    "EXTRA2":"",
    "EXTRA3":"",
    "LANG_ID":"",
    "USER_ID":""
  }

      this.api.newRequest(payload).subscribe((res:any)=>{
        console.log(res);
        if(res){
          this.activelist = res.data;
        }
        if(!res.data.length){
          this.showError = true;

        }
        

      })
  }

  confirm(){
    this.showError = false;
    const formData = new FormData();
      formData.set('user_id',this.verifiedUser.user_id);
      formData.set('payment_status','complete');
      formData.set('action','volet' );
      this.api.walletCompleted(formData).subscribe((res:any)=>{
        console.log(res);
        if(res){
          this.completedlist = res.data;
        }
        if(!res.data.length){
          this.showError = true;
        }
        

      })
  }
  loginData(){
    this.verifiedUser = JSON.parse(localStorage.getItem('verifiedUser')!);
    
  }


  onwallet(item:any,status:any){
    console.log(status);
    var id = item.order_id;
    var hotelId = item.hotel_id;
    this.router.navigate(['wallet-details'+'/'+id+'/'+hotelId+'/'+status]);
  }
}