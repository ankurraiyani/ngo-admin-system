import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { ExpensesService } from 'src/app/services/expenses.service';

export enum typeofExpenses {

  SALARY = 'SALARY',
  OTHER_EXPENSES = 'OTHER EXPENSES'
}

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})

export class AddExpensesComponent implements OnInit {
  type = typeofExpenses;
  enumkeys: string[];

  constructor(private commonSerivce: CommonService, private expensesSerivce: ExpensesService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.enumkeys = Object.keys(this.type);
  }

  expensesId: any;
  expensesForm: FormGroup;
  isAddForm = true;
  isDiscritpionShow: boolean = false;
  isCheckNumber = false;
  profileImage: any;



  ngOnInit(): void {

    this.iniatilzeFrom();


    this.expensesId = this.activatedRouter.queryParams['value'].id;

    if (this.expensesId == undefined || this.expensesId == null) {
     // this.profileImage = "/assets/images/bill.png";
      setTimeout(() => {   
        this.commonSerivce.currentPageTitle = 'Add Expenses';
      });

    }
    else {

      this.isAddForm = false;
      setTimeout(() => {
        this.commonSerivce.currentPageTitle = 'Edit Expenses';
      });
      
      this.expensesSerivce.getIdExpenses(this.expensesId).subscribe((result) => {
        console.log(result);
          
        
          this.expensesForm.controls.id.setValue(result.id),

          this.expensesForm.controls.typeofExpenses.setValue(result.typeofExpenses),

          this.expensesForm.controls.amount.setValue(result.amount),

          this.expensesForm.controls.description.setValue(result.description),

          this.expensesForm.controls.gst.setValue(result.gst),

          this.expensesForm.controls.billingDate.setValue(result.billingDate),

          this.expensesForm.controls.transactionDate.setValue(result.transactionDate),

          this.expensesForm.controls.paymentMethod.setValue(result.paymentMethod)

          // this.expensesForm.controls.isImageUpload.setValue(false),

          // this.profileImage = result.imageOutPut


      }, (error) => {



      });

    }



  }


  iniatilzeFrom() {
    this.expensesForm = new FormGroup({

      id: new FormControl(''),

      typeofExpenses: new FormControl('',[Validators.required]),

      amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9,]*$")]),

      description: new FormControl('', [Validators.required]),

     // gst: new FormControl('', [Validators.required]),
      gst: new FormControl('',[]),

      // gstPercentage: new FormControl('', [Validators.required]),
      gstPercentage: new FormControl('', []),


      transactionDate: new FormControl('', [Validators.required]),

      paymentMethod: new FormControl('', [Validators.required]),

      // billingDate: new FormControl('', [Validators.required]),
      billingDate: new FormControl('',[]),

      // imageInPut: new FormControl('',[]),

      // isImageUpload: new FormControl(true),

      // checkNumber: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9,]*$")])

      checkNumber: new FormControl('', []),




    });
  }



  submit() {
    console.log("ede");

    this.expensesForm.markAllAsTouched();
    console.log("ederrrrrrrrrr");
    console.log(this.expensesForm.controls.typeofExpenses.value);

    if (this.expensesForm.valid) {

      console.log("edescfsdvs");
      console.log(this.expensesForm.controls.typeofExpenses.value);

      this.expensesSerivce.addExpenses(this.expensesForm.value).subscribe((result) => {

        console.log(result);
        let msg;
        if (this.isAddForm) {
          msg = "Expenses Added Sucessfully";
        } else {
          msg = "Expenses Updated Sucessfully";
        }
        this.commonSerivce.showMessage("success", msg);
        this.router.navigate(['/expenses']);

      }, (error) => {

        this.commonSerivce.showMessage("error", error.message);
      });

    }

  }


  ExpensesTypeChnage(e: any) {

    if (e.target.value) {

      console.log(e.target.value)

      if (e.target.value == "OTHER_EXPENSES") {
        console.log(e.target.value)
        this.isDiscritpionShow = true;
        this.addValidation('gst',[Validators.required]);
        this.addValidation('gstPercentage',[Validators.required]);
        this.addValidation('billingDate',[Validators.required]);
        this.addValidation('imageInPut',[Validators.required]);
        

      }

      if (e.target.value == "Check") {
        this.isCheckNumber = true;
        this.addValidation('checkNumber',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9,]*$")])
      }
    }
    else {
      this.isDiscritpionShow = false;
      this.isCheckNumber = false;
    }

  }

  addValidation(fieldName, validations) {
    this.expensesForm.controls[fieldName].setValidators(validations);
    this.expensesForm.controls[fieldName].updateValueAndValidity();
  }

  // imageUpload(e) {
  //   this.expensesForm.controls.imageInPut.setValue(e.target.files[0]);
  //   this.expensesForm.controls.isImageUpload.setValue(true);
  // }

}






 // this.removeValidation('gst');
    // this.removeValidation('gstPercentage');
    // this.removeValidation('checkNumber');
    // this.removeValidation('gst');
    // this.removeValidation('gstPercentage');
    // this.removeValidation('billingDate');
      // this.addValidation('donationDescription', [Validators.required, Validators.pattern("^[0-9]*$")]);

      // this.addValidation('gst',[Validators.required]);
      // this.addValidation('gstPercentage',[Validators.required]);
      // this.addValidation('transactionDate',[Validators.required]);

      // this.addValidation('paymentMethod',[Validators.required]);

//  typeofExpenses:new FormArray([new FormControl(true),new FormControl(false),])


      //  billingAmount:new FormControl('',[Validators.pattern("^[0-9,]*$"),Validators.required])




// this.addValidation('checkNumber',[Validators.required,Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9,]*$")]);

 // addValidation(fieldName, validations) {
  //   this.expensesForm.controls[fieldName].setValidators(validations);
  //   this.expensesForm.controls[fieldName].updateValueAndValidity();
  // }

  // removeValidation(fieldName) {
  //   this.expensesForm.controls[fieldName].setErrors(null);
  //   this.expensesForm.controls[fieldName].clearValidators();
  //   this.expensesForm.controls[fieldName].updateValueAndValidity();
  // }

        // const forValue = Object.assign({},value,{
        //   typeofExpenses:value.typeofExpenses.map((selected,i)=>{

        //     return{
        //       id:this.ExpensesType.typeofExpenses[i].id,selected
        //     }
        //   })
        // });


        // get typeofExpenses()
  // {
  //   return this.expensesForm.get('typeofExpenses');
  // };

  // buildSkills()
  // {
  //   const arr=this.ExpensesType.typeofExpenses.map(typeofExpense =>{

  //     return this.fb.control(typeofExpense.selected);
  //   });
  //   return this.fb.array(arr);


  // }
 // ExpensesType = {

  //   typeofExpenses:[

  //     {
  //       name:"Salary",selected:true,id:12
  //     },
  //     {
  //       name:"Other Salary",selected:false,id:2
  //     },
  //   ]
  // }


  // this.expensesForm=this.fb.group({

    //    typeofExpenses:this.buildSkills()
    // });
