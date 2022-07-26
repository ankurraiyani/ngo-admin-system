import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-list-permission',
  templateUrl: './list-permission.component.html',
  styleUrls: ['./list-permission.component.css']
})


export class ListPermissionComponent implements OnInit {


  // permissionList:Array<any>=[

  //   {name:'Add',value:'Add',id:1,select:true},
  //   {name:'Update',value:'Update',id:2,select:true},
  //   {name:'Delete',value:'Delete',id:3,select:true},
  //   {name:'View',value:'View',id:4,select:true},   

  // ];
  // permissionFrom:FormGroup;
  // roleList:any;
  permissionList:any=[];

  constructor(private permissionService:PermissionService,private roleService:RoleService,private fb:FormBuilder,private commonService:CommonService) 
  { 
  //  / this.permissionFrom=this.fb.group({checkArray:this.fb.array([])})

  }


  
 


  ngOnInit(): void {

    // setTimeout(() => {
    //   this.commonService.currentPageTitle = 'Permission List';
    // });
    // this. getPermission();
    // this.getRoleData();
    // this.intilize();

  }

  // intilize()
  // {

  //   this.permissionFrom=new FormGroup({


  //     permissionIds:new FormControl([]),

  //   });
   
  // }
  // getPermission()
  // {
    
  //   this.permissionService.getAllPermission().subscribe((results) => {
    

  //     // console.log(results);
  //     this.permissionList = results;
  //     //this.totalCount = results.totalElements;
  //   }, (error) => {
  //     this.commonService.showMessage("error", error.message)
  //   });
  // }

  // getRoleData()
  // {
    
  //  this.roleService.getAllRole().subscribe((results) => {
  
  //     this.roleList = results;
  //   }, (error) => {
  //     this.commonService.showMessage("error", error.message)
  //   });
  // }

  // changeCheckBox(e:any)
  // {
    // const checkArray:FormArray=this.permissionFrom.get('checkArray') as FormArray;

    // if(e.target.checked)
    // {
    //   checkArray.push(new FormControl(e.target.value));

    // }
    // else
    // {
    //   let i:number=0;

    //   checkArray.controls.forEach((item:FormControl)=>{
    //     if(item.value==e.target.value)
    //     {
    //       checkArray.removeAt(i);
    //       return;
    //     }
    //     i++;
    //   });
    // }
  }


  // submit()
  // {
  //   console.log(this.permissionFrom.value);
  // }

