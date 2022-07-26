import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  constructor(private roleService: RoleService,
    private commonService: CommonService, private router: Router,private permissionService:PermissionService) { }

  roleList: any;
  permissionList:any=[];
 
  

  ngOnInit(): void {
    setTimeout(() => {
      this.commonService.currentPageTitle = 'Role List';
    });
    this.getRoleData();
    this.getAllPermission();
  }
  getRoleData() {
   
    this.roleService.getAllRole().subscribe((results) => {
       console.log(results);
      this.roleList = results;
    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }


  getAllPermission() {

    console.log("permission")
    this.permissionService.getAllPermission().subscribe((results) => {

      this.permissionList = results;

     console.log("permission"+this.permissionList)
    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }

  // pageChanged(e: any) {
  //   this.fetchDonerListParam.currentPage = e;
  //   this.fetchDonerListParam.pageNo = e - 1;
  //   this.donerList = [];
  //   this.getDonerData();
  // }
  deleteRole(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary ml-2 ',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure you want to delete Role?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        this.roleService.deleteRole(id).subscribe((results) => {
          this.commonService.showMessage('success', 'Role Detail Delete Sucessfully');
          this.getRoleData();
          this.commonService.fetchSearch();
          this.getRoleData();
        }, (error) => {
          this.commonService.showMessage('error', error.message);
        });
      }
    });
  }

  editRole(id) {
    this.router.navigate(['/role/add'], { queryParams: { id: id } });
  }

}


