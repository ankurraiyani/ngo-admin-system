import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    setTimeout(() => {
      
      this.commonService.currentPageTitle = 'Dashboard';
    });
  }

}
