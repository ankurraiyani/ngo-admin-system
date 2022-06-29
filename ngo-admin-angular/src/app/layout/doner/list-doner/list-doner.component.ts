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

  donerList: any;
  pageLimitOptions: any = [10, 15, 20, 25, 30];
  totalCount: any = 0;
  fetchDonerListParam = {
    pageSize: this.pageLimitOptions[0],
    searchStr: "",
    pageNo: 0,
    currentPage: 0
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Donner List';
    });
    this.getDonerData();
  }

  getDonerData() {
    this.donerService.getAllDoner().subscribe((results) => {
      this.donerList = results;
    }, (error) => {
      this.commonService.showMessage("error", error.message);
    });
  }
  pageChanged(e: any) {
    this.fetchDonerListParam.currentPage = e;
    this.fetchDonerListParam.pageNo = e - 1;
    this.donerList = [];
    this.getDonerData();
  }

  deleteDoner(id){
    this.donerService.deleteDoner(id).subscribe((results) => {
      this.donerList = results;
      this.getDonerData();
    }, (error) => {
      this.commonService.showMessage("error", error.message);
    });
  }

  
}

