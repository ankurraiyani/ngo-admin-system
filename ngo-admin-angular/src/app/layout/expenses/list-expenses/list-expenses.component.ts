import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/common.service';
import { ExpensesService } from 'src/app/services/expenses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  constructor(private commonService:CommonService,private router:Router,private expensesService:ExpensesService) { }


  expensesList: any;
  pageLimitOptions: any = [10, 15, 20, 25, 30];
  totalCount: any = 0;
  fetchExpensesListParam = {
    pageSize: this.pageLimitOptions[0],
    searchStr: "",
    pageNo: 0,
    currentPage: 0
  }
  searchSubscriber: Subscription;

  ngOnInit(): void {

    setTimeout(() => {
      this.commonService.currentPageTitle = 'Expenses List';
    });

    this.getExpensesData();
   
  }

  getExpensesData()
  {
    if (this.searchSubscriber) {
      this.searchSubscriber.unsubscribe();
    }
    this.searchSubscriber = this.expensesService.getAllExpenses(this.fetchExpensesListParam).subscribe((results) => {
      console.log(this.expensesService.getAllExpenses((this.fetchExpensesListParam)));

      // console.log(results);
      this.expensesList = results.content;
      this.totalCount = results.totalElements;
    }, (error) => {
      this.commonService.showMessage("error", error.message)
    });
  }

  pageChanged(e: any) {
    this.fetchExpensesListParam.currentPage = e;
    this.fetchExpensesListParam.pageNo = e - 1;
    this.expensesList = [];
    this.getExpensesData();
  }
  deleteExpenses(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary ml-2 ',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure you want to delete Expenses?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        this.expensesService.deleteExpenses(id).subscribe((results) => {
          this.commonService.showMessage('success', 'Expenses Detail Delete Sucessfully');
          this.getExpensesData();
          this.commonService.fetchSearch();
          this.getExpensesData();
        }, (error) => {
          this.commonService.showMessage('error', error.message);
        });
      }
    });
  }

  
  
  editExpenses(id)
  {
    this.router.navigate(['/expenses/add'],{ queryParams:{id:id}});
  }

}
