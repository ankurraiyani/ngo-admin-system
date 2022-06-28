import { Component, OnInit } from '@angular/core';
import { EvnetService } from 'src/app/services/event.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  


    
    
  constructor(private eventService : EvnetService) { }
  event:any[];
  ngOnInit(): void {
    console.log("List Event");
    
    this.eventService.getAllEvent().subscribe((results) => {
      console.log("done");
      this.event= results as any[];
   
  }, (error) => {   
  });

  }
  
}


