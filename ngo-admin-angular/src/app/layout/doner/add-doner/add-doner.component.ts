import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { DonerService } from 'src/app/services/doner.service';

@Component({
  selector: 'app-add-doner',
  templateUrl: './add-doner.component.html',
  styleUrls: ['./add-doner.component.css']
})
export class AddDonerComponent implements OnInit {
  donerId:any;
  constructor(private donerService: DonerService,
    private commonService: CommonService,
    private router: Router ,private activatedRouter:ActivatedRoute) { }

  donerForm: FormGroup;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Donner';
    });

   
    this.iniatilzeFrom();

    // this.eventId=this.activatedRoute.queryParams['value'].id;

    // if(this.eventId==undefined || this.eventId==null){
    //   setTimeout(() => {
    //     this.commonService.currentPageTitle = 'Add Event';
    //   });
    // }else{
    //   setTimeout(() => {
    //     this.commonService.currentPageTitle = 'Edit Event';
    //   });
    //   this.eventService.getIdEvent(this.eventId).subscribe((result)=>{
    //     console.log(result);
    //     this.eventFrom.controls.name.setValue(result.name);
    //     this.eventFrom.controls.id.setValue(result.id);
    //   },(error) => {

    //   });
    // }

    this.donerId=this.activatedRouter.queryParams['value'].id;

    if(this.donerId==undefined || this.donerId==null)
    {
      setTimeout(() => {
            this.commonService.currentPageTitle = 'Add Event';
          });
    }
    else{
          setTimeout(() => {
            this.commonService.currentPageTitle = 'Edit Event';
          });
          this.donerService.getIdDoner(this.donerId).subscribe((result)=>{
            console.log(result);
            this.donerForm.controls.donerName.setValue(result.donerName);
            this.donerForm.controls.id.setValue(result.id);
            this.donerForm.controls.contactNumber.setValue(result.contactNumber);
            this.donerForm.controls.typeofDonation.setValue(result.typeofDonation);
            this.donerForm.controls.reason.setValue(result.reason);
            this.donerForm.controls.dateOfDonation.setValue(result.dateOfDonation);
            this.donerForm.controls.donerEmail.setValue(result.donerEmail);
          },(error) => {
    
          });
    }

      
  }
    


  iniatilzeFrom() {
    this.donerForm = new FormGroup({
    id:new FormControl(''),
      donerName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),

      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      donerEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      contactNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),

      dateOfDonation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      reason: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      typeofDonation: new FormControl('', [Validators.required]),

    });
  }

  submit() {
    this.donerForm.markAllAsTouched();

    if (this.donerForm.valid) {

      this.donerService.addDoner(this.donerForm.value).subscribe((resultes) => {
        this.commonService.showMessage("success", "Donner Added Sucessfully");
        this.router.navigate(['/doner']);
      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });
    }
  }
}


