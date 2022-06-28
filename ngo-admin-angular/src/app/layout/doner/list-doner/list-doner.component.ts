import { Component, OnInit } from '@angular/core';
import { DonerService } from 'src/app/services/doner.service';

@Component({
  selector: 'app-list-doner',
  templateUrl: './list-doner.component.html',
  styleUrls: ['./list-doner.component.css']
})
export class ListDonerComponent implements OnInit {

  constructor(private donerService: DonerService) { }
  doner : any[];
  ngOnInit(): void {
   
    this.donerService.getAllDoner().subscribe((results)=>
    {
      console.log("Done");
      this.doner=results as any[];
    },(error)=>
    {

    });
  }

}