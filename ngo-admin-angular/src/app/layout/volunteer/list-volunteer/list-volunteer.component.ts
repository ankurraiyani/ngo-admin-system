import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-volunteer',
  templateUrl: './list-volunteer.component.html',
  styleUrls: ['./list-volunteer.component.css']
})
export class ListVolunteerComponent implements OnInit {
  result: string;

  constructor(private volunteerService: VolunteerService,
    private commonService: CommonService) { }

  volunteerList: any;
  pageLimitOptions: any = [10, 15, 20, 25, 30];
  totalCount: any = 0;
  fetchVolunteerListParam = {
    pageSize: this.pageLimitOptions[0],
    searchStr: "",
    pageNo: 0,
    currentPage: 0
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Volunteer List';
    });
    this.getVolunteerData();
    // this.getAllVolunteer();
    // this.deleteIdVolunteer(id);
  }

  getVolunteerData() {
    this.volunteerService.getAllVolunteer(this.fetchVolunteerListParam).subscribe((results) => {
      this.volunteerList = results.content;
      this.totalCount = results.totalElements;
    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }
  
  pageChanged(e: any) {
    this.fetchVolunteerListParam.currentPage = e;
    this.fetchVolunteerListParam.pageNo = e - 1;
    this.volunteerList = [];
    this.getVolunteerData();
  }

  // getAllVolunteer() {
  //   this.volunteerService.getAllVolunteer().subscribe((results) => {
  //     this.volunteer = results;
  //   }, (error) => {
  //     this.commonService.showMessage("error", error.message)
  //   });
  // }

  // deleteIdVolunteer(id:any)
  // {
  //   console.log(id);
  //   this.volunteerService.deleteIdVolunteer(id).subscribe((result)=>
  //   {
  //     this.result=JSON.stringify(result);
  //     console.log("result:"+result);
  //   })
  // }
 
  deleteIdVolunteer(id:any){
        this.volunteerService.deleteIdVolunteer(id).subscribe((results) => {
          this.getVolunteerData();
        },(error)=>{

        });
      }


      // deleteIdVolunteer(id){
      //   console.log("idd: "+id);
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
      //       this.volunteerService.deleteIdVolunteer(id).subscribe((results) => {
              
      //         this.commonService.showMessage('success', 'Event Delete Sucessfully');
      //         this.getVolunteerData();
    
    
      //       }, (error) => {
      //         this.commonService.showMessage('error',error.message);
      //       });
      //     }
      //   });
      // }



}
// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

