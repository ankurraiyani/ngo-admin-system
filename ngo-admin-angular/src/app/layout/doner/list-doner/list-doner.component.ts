import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { DonerService } from 'src/app/services/doner.service';

@Component({
  selector: 'app-list-doner',
  templateUrl: './list-doner.component.html',
  styleUrls: ['./list-doner.component.css']
})
export class ListDonerComponent implements OnInit {

  constructor(private donerService: DonerService,
    private commonService: CommonService) { }

  doner: any;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Donner List';
    });
    this.getAllDonner();
  }

  getAllDonner() {
    this.donerService.getAllDoner().subscribe((results) => {
      this.doner = results;
    }, (error) => {
      this.commonService.showMessage("error", error.message);
    });
  }

}