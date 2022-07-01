import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { EvnetService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventId: any;
  isAddFrom : boolean = true;

  constructor(private eventService: EvnetService,
    private commonService: CommonService,
    private router: Router,private activatedRoute : ActivatedRoute) { }

  eventFrom: FormGroup;

  ngOnInit(): void {
    
    this.iniatilzeFrom();
    
    this.eventId=this.activatedRoute.queryParams['value'].id;
    if(this.eventId==undefined || this.eventId==null)
    {
        setTimeout(() => {
          this.commonService.currentPageTitle = 'Add Event';
        });

    }
    else
    {
      setTimeout(() => {
        this.commonService.currentPageTitle = 'Edit Event';
      });
        this.isAddFrom = false;
        this.eventService.getIdEvent(this.eventId).subscribe((results)=> {
            this.eventFrom.controls.name.setValue(results.name);
            this.eventFrom.controls.id.setValue(results.id);

                });
    }

  }

  iniatilzeFrom() {
    this.eventFrom = new FormGroup({
      id:new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
      
    });
  }

  
  submit() {
    this.eventFrom.markAllAsTouched();
    if (this.eventFrom.valid) {
      this.eventService.addEvent(this.eventFrom.value).subscribe((results) => {
        let msg;
        if(this.isAddFrom){
          msg="Event Added Sucessfully";
        } else{
          msg="Event Updated Sucessfully";
        }
        this.commonService.showMessage("success", msg);
        this.router.navigate(['/event']);
      }, (error) => {
        this.commonService.showMessage("error", error.message);
      });

    }
  }

}
  


