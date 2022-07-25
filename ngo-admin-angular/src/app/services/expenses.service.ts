import { Injectable } from "@angular/core";
import { DonerRepository } from "../repository/doner.repository";
import { EvnetRepository } from "../repository/event.repository";
import { ExpensesRepository } from "../repository/expenses.repository";

@Injectable()
export class ExpensesService {
    showMessage: any;
    constructor( 
        private expensesRepo:ExpensesRepository) { }

        addExpenses(data:any)
        {
            console.log("service");
            return this.expensesRepo.addExpenses(data);
        }

        getIdExpenses(data)
        {
            return this.expensesRepo.getIdExpenses(data);
        }

        deleteExpenses(data:any)
        {
            return this.expensesRepo.deleteExpenses(data);
        }
        getAllExpenses(fetchExpensesListParam:any)
        {
            return this.expensesRepo.getAllExpenses(fetchExpensesListParam);
        }


    // addDoner(data:any)
    // {
    //     return this.donerRepo.addDoner(data);
    // }
    // getAllDoner(fetchDonerListParam:any)
    // {
    //     return this.donerRepo.getAllDoner(fetchDonerListParam);
    // }
    // deleteDoner(data:any)
    // {
    //     return this.donerRepo.deleteDoner(data);
    // }
    // getIdDoner(data:any)
    // {  
    //     return this.donerRepo.getIdDoner(data);      
    // }
    // getAllActiveDoner() {
    //     return this.donerRepo.getAllActiveDoner();
    // }
    // isActiveDeactiveDoner(donerId: any,isPresent : any) {
    //     return this.donerRepo.isActiveDeactiveDoner(donerId,isPresent);
    //   }
}