import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomErrorStateMatcher } from '../../helper/customeErrorStateMatcher';
// interface horizontalSteps {
// 	state: 'active' | null;
// 	status: 'passed' | 'failed' | 'empty';
// 	title: string;
// }

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  countries:any;
  testFrom:FormGroup;
  cities:any[]=[];
  isCityLoading:boolean=false;
  CustomErrorStateMatcher:CustomErrorStateMatcher= new CustomErrorStateMatcher();
  constructor(private _country:CountriesService) {
    this.testFrom=new FormGroup({
      email:new FormControl("", [Validators.required, Validators.email]),
      customerName:new FormControl("", [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      country:new FormControl("", [Validators.required]),
      city:new FormControl("", [Validators.required]),
      receiveNewsLetters: new FormControl(null)
    })
   }

  ngOnInit(): void {
    this._country.getCountries().subscribe((res:any)=>{
      this.countries=res;
    },
    (error)=>{
     console.log(error);
     
    })
    // this._country.getCities().subscribe((res:any)=>{
    //   this.cities=res;
    //   // console.log("city",this.cities);
    // },
    // (error)=>{
    //   console.log(error);
      
    // })

    this.getFormControl("city").valueChanges.pipe(
      //debounce Time: wait for at least 500 milliseconds, after typing in textbox
      debounceTime(500),

      //Tap: Do something before making http request
      tap(()=>{
        this.cities=[];
        this.isCityLoading=true;
      }),

      //switchMap

      switchMap((value)=>{
         return this._country.getCities(value);
      })
    ).
    subscribe((response:any)=>{
      this.cities=response;
      this.isCityLoading=false;
    })
  }

 
  // return the form control instance based on the control name
  getFormControl(controlName:string):FormControl{
   return this.testFrom.get(controlName) as FormControl;
  }

  // return the error message based on the given control and error
  getErrorMessage(controlName:string, errorType:string){
    switch(controlName){
      case "customerName":{
        if(errorType==="required")
        return "You must specify <strong>Name</strong>";
        else if(errorType==="maxlength")
        return "<strong>Name</strong> can contain up to 30 characters only";
        else if(errorType==="pattern")
        return "<strong>Name</strong> can contain alphabets or dot(.) or space only";
        else 
        return "";
      }
      case "email":{
        if(errorType==="required")
        return "<strong>Email</strong> can't be blank";
        else if(errorType==="email")
        return "<strong>Email</strong> should be correct";
        else 
        return "";
      }
      case "country":{
        if(errorType==="required")
        return "You must choose <strong>Country</strong>";
        else 
        return "";
      }
      case "city":{
        if(errorType==="required")
        return "You must choose <strong>City</strong>";
        else 
        return "";
      }
      default : return "";
    }
  }




    
}
