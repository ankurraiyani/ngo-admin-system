import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  isAddForm = true;
  constructor( private commonService: CommonService,
                private router:Router,
                private roleService:RoleService
              ) { }

  roleForm:FormGroup

  ngOnInit(): void {

    this.iniatilzeFrom();

    setTimeout(() => {
      this.commonService.currentPageTitle = 'Add Role';
    });
  }

  iniatilzeFrom() {
    this.roleForm = new FormGroup({
      id:new FormControl(''),
      roleName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')])
    })
}
 submit() {
  this.roleForm.markAllAsTouched();
  if (this.roleForm.valid) {
      this.roleService.addRole(this.roleForm.value).subscribe((results) => {
       console.log(results);
      this.commonService.showMessage("success", "Role Added Sucessfully");
     this.router.navigate(['/role']);
     },
      (error) => { 
        this.commonService.showMessage('error',error.message);
      }
     );
  }

}
}
