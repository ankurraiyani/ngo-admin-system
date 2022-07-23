import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { ServicetypeService } from 'src/app/services/servicetype.service';

@Component({
  selector: 'app-add-servicetype',
  templateUrl: './add-servicetype.component.html',
  styleUrls: ['./add-servicetype.component.css']
})
export class AddServicetypeComponent implements OnInit {
  isAddForm = true;
  constructor( private commonService: CommonService,
                private router:Router,
                private servicetypeService:ServicetypeService) { }

  servicetypeForm:FormGroup

  ngOnInit(): void {

    this.iniatilzeFrom();

    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add ServiceType';
    });
  }

  iniatilzeFrom() {
    this.servicetypeForm = new FormGroup({
      id:new FormControl(''),
      serviceName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')])
    })
}
 submit() {
  this.servicetypeForm.markAllAsTouched();
  if (this.servicetypeForm.valid) {
     this.servicetypeService.addServicetype(this.servicetypeForm.value).subscribe((results) => {
       console.log(results);
      // this.commonService.showMessage("success", "Employee Added Sucessfully");
      // this.router.navigate(['/servicetype']);
    },
      (error) => { 
        this.commonService.showMessage('error',error.message);
      }
    );
  }

}
}
