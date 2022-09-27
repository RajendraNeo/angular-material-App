import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-task',
  templateUrl: './stepper-task.component.html',
  styleUrls: ['./stepper-task.component.scss']
})
export class StepperTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showResult();
  }

    // NoNames: boolean = false;
    data:any;
    test:string="AWAITING OFFER ACCEPTANCE";
    requestStatusProgress = [
      {
        id:1,
        state: null,
        status: 'empty',
        title: 'AWAITING BUSINESS OWNER REVIEW',
      },
      {
        id:2,
        state: null,
        status: 'empty',
        title: 'AWAITING OFFER ACCEPTANCE',
      },
      {
        id:3,
        state: null,
        status: 'empty',
        title: 'AWAITING OFFER GENERATION',
      },
      {
        id:4,
        state: null,
        status: 'empty',
        title: 'AWAITING FIELD CREDIT RISK ASSESSMENT',
      },
    ];
  
    itemIndex: any;

    showResult() {
      this.requestStatusProgress.forEach((item,index)=>{
        if(item.title===this.test){
         item.status="passed"
        this.itemIndex = index
        }
        });
        this.requestStatusProgress.forEach((item, index) => {
          if(index <= this.itemIndex) {
            item.status="passed"
          }
        })
      }

    // showResult() {
    //   this.requestStatusProgress.forEach((item,index)=>{
    //     if(item.title===this.test && index <= this.itemIndex){
    //      item.status="passed"
    //     this.itemIndex = index
    //     }
    //     });
    //     // this.requestStatusProgress.forEach((item, index) => {
    //     //   if(index <= this.itemIndex) {
    //     //     item.status="passed"
    //     //   }
    //     // })
    //   }
    




  

  
  
    // showResult(){
    //   for(var i=0; i<this.requestStatusProgress.length; i++ ){
    //     console.log(this.requestStatusProgress[i]);
    //     if(this.requestStatusProgress[i].title===this.test){
    //       this.requestStatusProgress[i].status="passed"
    //       console.log("currentStatus",this.requestStatusProgress[i].status);
    //     }
    //   }
    // }
    
  
    loanRequestStatus = [
      {key:1,value:"AWAITING BUSINESS OWNER REVIEW"},
      {key:2,value:"AWAITING OFFER GENERATION"},
      {key:3,value:"AWAITING OFFER ACCEPTANCE"},
      {key:4,value:'AWAITING FIELD CREDIT RISK ASSESSMENT' },
      {key:5,value:"APPROVED"}
    ];
}
