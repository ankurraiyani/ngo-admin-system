import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-add-volunteer',
  templateUrl: './add-volunteer.component.html',
  styleUrls: ['./add-volunteer.component.css']
})
export class AddVolunteerComponent implements OnInit {

  constructor(private volunteerService: VolunteerService,
    private commonService: CommonService,
    private router: Router) { }

  volunteerForm: FormGroup;


  ngOnInit(): void {

    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Volunteer';
    });

    this.iniatilzeForm();

  }
  iniatilzeForm() {
    this.volunteerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),

      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),

      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      // Validators.email(^[a-z0-9._]@[a-z0-9.-]+\.[a-z]{2,4}$)

      contactNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),

      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),

      age: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),

      gender: new FormControl('', [Validators.required]),

      dateOfJoining: new FormControl('', [Validators.required]),

      availableTime: new FormControl('', [Validators.required]),

      areaOfInterest: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)])

    });
  }

  submit() {
    this.volunteerForm.markAllAsTouched();

    if (this.volunteerForm.valid) {
      this.volunteerService.addVolunteer(this.volunteerForm.value).subscribe((results) => {
        this.commonService.showMessage("success", "Volunteer Added Sucessfully");
        this.router.navigate(['/volunteer']);
      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });
    }
  }

}