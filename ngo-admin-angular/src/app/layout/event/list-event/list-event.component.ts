import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { EvnetService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

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
  searchSubscriber:Subscription

  ngOnInit(): void {
    setTimeout(() => {
			this.commonService.currentPageTitle = 'Event List';
		});
    this.getEventData();
  }

  getEventData() {
    if (this.searchSubscriber) {
      this.searchSubscriber.unsubscribe();
    }
    this.searchSubscriber = this.eventService.getAllEvent(this.fetchEventListParam).subscribe((results) => {
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

  // deleteEvent(){
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-primary ml-2 ',
  //       cancelButton: 'btn btn-danger'
  //     },
  //     buttonsStyling: false,
  //   })
  //   swalWithBootstrapButtons.fire({
  //     title: 'Are you sure you want to delete event?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'Cancel',
  //     allowOutsideClick: false
  //   }).then((result) => {
  //     if (result.value) {
  //       // this.eventService.deleteEvent(id).subscribe((results) => {
  //       //   this.commonService.showMessage('success', 'Event Delete Sucessfully');
  //       //   this.getEventData();
  //       // this.fetchEventListParam.pageSize=this.pageLimitOptions[0],
  //       // this.fetchEventListParam.searchStr= "",
  //       // this.fetchEventListParam.pageNo=0,
  //       // this.fetchEventListParam.currentPage= 0;
  //       //   this.getEventData();
  //       // }, (error) => {
  //       //   this.commonService.showMessage('error',error.message);
  //       // });
  //       console.log("deleted")
  //     }
  //   });
  // }

}


