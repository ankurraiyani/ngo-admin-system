import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { DonerService } from 'src/app/services/doner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-doner',
  templateUrl: './list-doner.component.html',
  styleUrls: ['./list-doner.component.css']
})
export class ListDonerComponent implements OnInit {

  constructor(private donerService: DonerService,
    private commonService: CommonService, private router: Router) { }

  donerList: any;
  pageLimitOptions: any = [10, 15, 20, 25, 30];
  totalCount: any = 0;
  fetchDonerListParam = {
    pageSize: this.pageLimitOptions[0],
    searchStr: "",
    pageNo: 0,
    currentPage: 0
  }
  searchSubscriber: Subscription;

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Donner List';
    });
    this.getDonerData();
  }
  getDonerData() {
    if (this.searchSubscriber) {
      this.searchSubscriber.unsubscribe();
    }
    this.searchSubscriber = this.donerService.getAllDoner(this.fetchDonerListParam).subscribe((results) => {
      this.donerList = results.content;
      this.totalCount = results.totalElements;
    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }

  pageChanged(e: any) {
    this.fetchDonerListParam.currentPage = e;
    this.fetchDonerListParam.pageNo = e - 1;
    this.donerList = [];
    this.getDonerData();
  }
  deleteDoner(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary ml-2 ',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure you want to delete event?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        this.donerService.deleteDoner(id).subscribe((results) => {
          this.commonService.showMessage('success', 'Doner Detail Delete Sucessfully');
          this.getDonerData();
          this.commonService.fetchSearch();
          this.getDonerData();
        }, (error) => {
          this.commonService.showMessage('error', error.message);
        });
      }
    });
  }

  editDoner(id) {
    this.router.navigate(['/doner/add'], { queryParams: { id: id } });
  }
}

