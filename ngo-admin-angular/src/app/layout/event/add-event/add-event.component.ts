import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { EvnetService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EvnetService,
    private commonService: CommonService,
    private rourte: Router) { }

  eventFrom: FormGroup;

  ngOnInit(): void {
    this.iniatilzeFrom();
  }

  iniatilzeFrom() {
    this.eventFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
  }

  submit() {
    this.eventFrom.markAllAsTouched();
    if (this.eventFrom.valid) {
      this.eventService.addEvent(this.eventFrom.value).subscribe((results) => {
        this.commonService.showMessage("success", "Event Added Sucessfully");
        this.rourte.navigate(['/event']);

      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });

    }
  }
}
