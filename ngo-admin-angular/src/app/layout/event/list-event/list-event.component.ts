import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { EvnetService } from 'src/app/services/event.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {





  constructor(private eventService: EvnetService,
    private commonService: CommonService) { }
  eventList: any;
  pageLimitOptions: any = [10, 15, 20, 25, 30];
  totalCount: any = 0;

  fetchEventListParam = {
    pageSize: this.pageLimitOptions[0],
    searchStr: "",
    pageNo: 0,
    currentPage: 0
  }

  ngOnInit(): void {
    console.log("List Event");
    this.getEventData();
  }

  getEventData() {
    this.eventService.getAllEvent(this.fetchEventListParam).subscribe((results) => {
      console.log(results);
      this.eventList = results.content;
      this.totalCount = results.totalElements;

    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }

  pageChanged(e: any) {
    this.fetchEventListParam.currentPage = e;
    this.fetchEventListParam.pageNo = e - 1;
    this.eventList = [];
    this.getEventData();
  }

}


