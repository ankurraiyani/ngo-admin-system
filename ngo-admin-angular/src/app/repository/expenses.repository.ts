import { Injectable } from "@angular/core";
import { ApiClientRepository } from "../common/Apiclient.repository";
import { BASE_URL, DONER_ADD, DONER_DELETE, DONER_GETALL, DONER_GETID, DONER_ISACTIVE_DEACTIVE, EVENT_ADD, EVENT_GETALL, EXPENSES_ADD, EXPENSES_DELETE, EXPENSES_GETALL, EXPENSES_GETID, GET_ALL_ACTIVE_DONER } from "../common/url";

@Injectable()
export class ExpensesRepository { 
    constructor(private apiClient:ApiClientRepository) { }
        addExpenses(data:any)
        {
            console.log("Repo");
            // let formData = new FormData()
            // //     console.log("-----"+data.imageInPut);
            // 	if(data.imageInPut)
            //         formData.append('imageInPut', data.imageInPut);
            //     if(data.id)
            //         formData.append('id', data.id);
            //         formData.append('typeofExpenses', data.typeofExpenses);
            //         formData.append('amount', data.amount);
            //         formData.append('gst', data.gst);
            //         formData.append('gstPercentage', data.gstPercentage);
            //         formData.append('billingDate', data.billingDate);
            //         formData.append('transactionDate', data.transactionDate);
            //         formData.append('paymentMethod', data.paymentMethod);
            //         formData.append('checkNumber', data.checkNumber);
            //         formData.append('description', data.description);
            //         formData.append('isImageUpload', data.isImageUpload);
            //         console.log(FormData);



            return this.apiClient.doPublicPost(EXPENSES_ADD,data);
        }

        getIdExpenses(data)
        {
            return this.apiClient.doPublicGet(EXPENSES_GETID+"/"+data);
        }

        deleteExpenses(data: any) {
            return this.apiClient.doPublicDelete(EXPENSES_DELETE+"/"+data);
        }

        getAllExpenses(fetchExpensesListParam:any)
        {
            return this.apiClient.doPublicPost(EXPENSES_GETALL,fetchExpensesListParam);
        }
    
   
    
}

