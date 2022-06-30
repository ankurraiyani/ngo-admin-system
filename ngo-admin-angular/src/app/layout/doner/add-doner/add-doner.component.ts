import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router) { }

  donerForm: FormGroup;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Donner';
    });

    this.iniatilzeFrom();
  }

  iniatilzeFrom() {
    this.donerForm = new FormGroup({

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
