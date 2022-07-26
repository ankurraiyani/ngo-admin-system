import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { ServicedetailService } from 'src/app/services/servicedetail.service';

export enum servicetype {
  ELECTRICIAN = 'ELECTRICIAN',
  PLUMBER = 'PLUMBER',

}
@Component({
  selector: 'app-add-servicedetail',
  templateUrl: './add-servicedetail.component.html',
  styleUrls: ['./add-servicedetail.component.css']
})
export class AddServicedetailComponent implements OnInit {
  type = servicetype;
  enumkeys: string[];
  constructor(private commonService: CommonService, private router: Router,
    private servicedetailService: ServicedetailService,private activatedRoute : ActivatedRoute) {
    this.enumkeys = Object.keys(this.type);
  }

  servicedetailFrom: FormGroup;
  servicedetailId : any;
  isAddFrom: boolean = true;

  ngOnInit(): void {
    this.iniatilzeFrom();
    this.servicedetailId=this.activatedRoute.queryParams['value'].id;

    if(this.servicedetailId == undefined || this.servicedetailId==null)
    {
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Add Service Details';
      });
    }
    else{
      this.isAddFrom=false;
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Edit Service Details';
      });

      this.servicedetailService.getIdServicedetail(this.servicedetailId).subscribe((results)=>{
        this.servicedetailFrom.controls.id.setValue(results.id);
        this.servicedetailFrom.controls.name.setValue(results.name);
        this.servicedetailFrom.controls.servicetype.setValue(results.servicetype);
        this.servicedetailFrom.controls.contactNumber.setValue(results.contactNumber);
        this.servicedetailFrom.controls.aadharcardNo.setValue(results.aadharcardNo);
        this.servicedetailFrom.controls.address.setValue(results.address);
        
      });
    }
  }

  iniatilzeFrom() {
    this.servicedetailFrom = new FormGroup({
      id: new FormControl(''),

      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

      contactNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),

      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),

      aadharcardNo: new FormControl('', [Validators.required,
      Validators.minLength(12), Validators.maxLength(50), Validators.pattern("^[0-9]*$")]),

      servicetype: new FormControl('',[Validators.required])

    });
  }
  submit() {
    this.servicedetailFrom.markAllAsTouched();
    if (this.servicedetailFrom.valid) {
      this.servicedetailService.addServicedetail(this.servicedetailFrom.value).subscribe((results) => {
        let msg;
        if (this.isAddFrom) {
          msg = "Service Detail Added Sucessfully";
        } else {
          msg = "Service Detail Updated Sucessfully";
        }
        this.commonService.showMessage("success", msg);
        this.router.navigate(['/servicedetail']);
      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });
    }
  }
}
