import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private commonService :CommonService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.commonService.currentPageTitle = 'Dash Board';
    });
  }

}
