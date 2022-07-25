import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { ServicedetailService } from 'src/app/services/servicedetail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-servicedetail',
  templateUrl: './list-servicedetail.component.html',
  styleUrls: ['./list-servicedetail.component.css']
})
export class ListServicedetailComponent implements OnInit {

  constructor(private commonService : CommonService,private servicedetailService : ServicedetailService,private router : Router) { }

  servicedetailList:any;
  pageLimitOptions : any = [10,15,20,25,30];
  totalCount: any = 0;
  fetchServicedetailListParam = {
    pageSize: this.pageLimitOptions[0],
    searchStr: "",
    pageNo: 0,
    currentPage: 0
  }
  searchSubscriber : Subscription;


  ngOnInit(): void {

    setTimeout(()=>{
      this.commonService.currentPageTitle="Service Details List ";
    });
    this.getServicedetailData();
  }

  getServicedetailData()
  {
    if(this.searchSubscriber)
    {
      this.searchSubscriber.unsubscribe();
    }
    this.searchSubscriber = this.servicedetailService.getAllServicedetail(this.fetchServicedetailListParam).subscribe((results)=>{
      this.servicedetailList = results.content;
      this.totalCount = results.totalElements;
    }, (error) => {
      this.commonService.showMessage("error",error.message)
    });
  }

  pageChanged(e:any){
    this.fetchServicedetailListParam.currentPage = e;
    this.fetchServicedetailListParam.pageNo = e-1;
    this.servicedetailList = [];
    this.getServicedetailData();
  }

 deleteIdServicedetail(id){
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-primary ml-2 ',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false,
        })
        swalWithBootstrapButtons.fire({
          title: 'Are you sure you want to delete Service Detail?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel',
          allowOutsideClick: false
        }).then((result) => {
          if (result.value) {
            this.servicedetailService.deleteIdServicedetail(id).subscribe((results) => {
              this.commonService.showMessage('success', 'Servicedetail Delete Sucessfully');
              this.getServicedetailData();
              this.commonService.fetchSearch();
              this.getServicedetailData();
            }, (error) => {
              this.commonService.showMessage('error',error.message);
            });
          }
        });
      }

      editServicedetail(id)
      {
        this.router.navigate(['servicedetail/add'],{queryParams:{id:id}});
      }

}
