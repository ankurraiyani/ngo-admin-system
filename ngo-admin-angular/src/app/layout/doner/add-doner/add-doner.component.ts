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

  constructor(private donerService: DonerService,
    private commonService: CommonService,
    private router: Router, private activatedRouter: ActivatedRoute) { }
    profileImage:any;
  // profileImage = "C://Users/15DA435TX/eclipse-workspace/new/ngo-admin-system/ngo-admin-system/Images/Doner/no image/dpno.jpg";
  donerForm: FormGroup;
  donerId: any;
  isAddForm = true;
  isDiscritpionShow: boolean = false;


  ngOnInit(): void {
    this.iniatilzeFrom();


    this.donerId = this.activatedRouter.queryParams['value'].id;

    if (this.donerId == undefined || this.donerId == null) {

      this.profileImage = "/assets/images/user2-160x160.jpg";
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Add Doner';
      });

      // this.profileImage = "C://Users/15DA435TX/eclipse-workspace/new/ngo-admin-system/ngo-admin-system/Images/Doner/78/hall_table-02.jpeg"
     
    }
    else {
      this.isAddForm = false;
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Edit Doner';
      });

      this.donerForm.controls['imageInPut'].setErrors(null);
      this.donerForm.controls['imageInPut'].clearValidators();
      this.donerForm.controls['imageInPut'].updateValueAndValidity();


      this.donerService.getIdDoner(this.donerId).subscribe((result) => {
        console.log(result);
  
        this.donerForm.controls.donerName.setValue(result.donerName);
        this.donerForm.controls.id.setValue(result.id);
        this.donerForm.controls.contactNumber.setValue(result.contactNumber);
        this.donerForm.controls.typeofDonation.setValue(result.typeofDonation);
        this.donerForm.controls.reason.setValue(result.reason);
        this.donerForm.controls.dateOfDonation.setValue(result.dateOfDonation);
        this.donerForm.controls.donerEmail.setValue(result.donerEmail);
        this.donerForm.controls.donationDescription.setValue(result.donationDescription);
        this.donerForm.controls.isImageUpload.setValue(false);
        this.profileImage = result.imageOutPut;
        
      }, (error) => {

      });
    }


  }



  iniatilzeFrom() {
    this.donerForm = new FormGroup({
      id: new FormControl(''),

      donerName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),

      donerEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      contactNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),

      dateOfDonation: new FormControl('', [Validators.required]),

      reason: new FormControl(''),

      typeofDonation: new FormControl('', [Validators.required]),

      donationDescription: new FormControl('', []),

      isPresent: new FormControl(false),
      
      imageInPut: new FormControl('',[Validators.required]),

      isImageUpload: new FormControl(true)
    });
  }

  submit() {
    this.donerForm.markAllAsTouched();
    console.log(this.donerForm.controls.imageInPut.value);
    if (this.donerForm.valid) {
      this.donerService.addDoner(this.donerForm.value).subscribe((resultes) => {
        let msg;
        if (this.isAddForm) {
          msg = "Doner Added Sucessfully";
        } else {
          msg = "Doner Updated Sucessfully";
        }
        this.commonService.showMessage("success", msg);
       
        this.router.navigate(['/doner']);
      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });
    }
  }

  donationTypeChnage(e: any) {
    this.removeValidation('donationDescription');
    if (e.target.value) {
      this.isDiscritpionShow = true;
      if (e.target.value == "money") {
        this.addValidation('donationDescription', [Validators.required, Validators.pattern("^[0-9]*$")]);
      } else {
        this.addValidation('donationDescription', [Validators.required]);
      }
    } else {
      this.isDiscritpionShow = false;
    }
  }

  addValidation(fieldName, validations) {
    this.donerForm.controls[fieldName].setValidators(validations);
    this.donerForm.controls[fieldName].updateValueAndValidity();
  }

  removeValidation(fieldName) {
    this.donerForm.controls[fieldName].setErrors(null);
    this.donerForm.controls[fieldName].clearValidators();
    this.donerForm.controls[fieldName].updateValueAndValidity();
  }

  imageUpload(e) {
    this.donerForm.controls.imageInPut.setValue(e.target.files[0]);
    this.donerForm.controls.isImageUpload.setValue(true);
  }

}


