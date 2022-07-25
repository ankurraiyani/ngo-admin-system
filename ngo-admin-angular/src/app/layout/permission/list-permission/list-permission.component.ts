import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-list-permission',
  templateUrl: './list-permission.component.html',
  styleUrls: ['./list-permission.component.css']
})
export class ListPermissionComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.commonService.currentPageTitle = 'Permission List';
    });

  }

}
