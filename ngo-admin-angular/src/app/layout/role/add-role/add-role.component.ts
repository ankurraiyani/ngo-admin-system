import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  isAddForm = true;
  constructor(private commonService: CommonService,
    private router: Router,
    private roleService: RoleService, private permissionService: PermissionService
  ) { }

  permissionList: any = [];
  roleForm: FormGroup

  async ngOnInit() {

   
    this.iniatilzeFrom();
    await this.getAllPermission();

    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Role';
    });
  }

  iniatilzeFrom() {
    this.roleForm = new FormGroup({

      id: new FormControl(''),

      permissionIds:new FormControl([]),

      roleName: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),

     
    });
  }


  submit() {
    this.roleForm.markAllAsTouched();
    console.log("hii")
    if (this.roleForm.valid) {
      this.roleService.addRole(this.roleForm.value).subscribe((results) => {

        console.log("hello "+results);
        this.commonService.showMessage("success", "Role Added Sucessfully");
        this.router.navigate(['/role']);
      },
        (error) => {
          this.commonService.showMessage('error', error.message);
        }
      );
    }

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
}

// getActiveDoner(){
//   this.donerService.getAllActiveDoner().subscribe((result)=>{
//   this.donerList=result;
// },(error)=>
// {
//   this.commonService.showMessage("error", error.message);
// });
// }
