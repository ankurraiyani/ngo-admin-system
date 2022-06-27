import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EvnetService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService : EvnetService) { }

  eventFrom : FormGroup;

  ngOnInit(): void {
    this.iniatilzeFrom();
  }
  iniatilzeFrom() {
    this.eventFrom = new FormGroup({
      name: new FormControl('',  [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    });
  }

  submit() {
    this.eventFrom.markAllAsTouched();
    if(this.eventFrom.valid) {
      console.log("success");
      this.eventService.addEvent(this.eventFrom.value).subscribe((results) => {
        console.log("api success");
        // showMessage(icon, message) {
        //   const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top',
        //     showConfirmButton: false,
        //     timer: icon == 'error' ? 7000 : 2000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //       toast.addEventListener('mouseenter', Swal.stopTimer)
        //       toast.addEventListener('mouseleave', Swal.resumeTimer)
        //     }
        //   })
        //   Toast.fire({
        //     icon: icon,
        //     title: message
        //   })
        // }
       
      }, (error) => {

      });

    }
  }
}
