export const BASE_URL: string = "http://localhost:8080/api/";

//volunteer apis
export const VOLUNTEER_ADD : string = BASE_URL + "volunteer/save";
export const VOLUNTEER_GETALL : string = BASE_URL + "volunteer/get";
export const VOLUNTEER_DELETE : string = BASE_URL + "volunteer/delete";
export const VOLUNTEER_GETID : string = BASE_URL + "volunteer/get";
export const VOLUNTEER_ISACTIVE_DEACTIVE: string = BASE_URL + "volunteer/volunteerActiveDeactive";
export const GET_ALL_ACTIVE_VOLUNTEER:string = BASE_URL + "volunteer/getAll/active"

//event apis
export const EVENT_ADD: string = BASE_URL + "event/save";
export const EVENT_GETALL:string= BASE_URL + "event/get";
export const EVENT_DELETE: string=BASE_URL+"event/delete";
export const EVENT_GETID: string=BASE_URL+"event/get";
export const EVENT_GET_ACTIVE:string=BASE_URL+"event/get/active"; 

//employee apis
export const EMPLOYEE_ADD: string = BASE_URL + "employee/save";
export const EMPLOYEE_GETALL: string = BASE_URL + "employee/get";
export const EMPLOYEE_DELETE:string= BASE_URL + "employee/deleteId";
export const EMPLOYEE_ISACTIVE_DEACTIVE: string = BASE_URL + "employee/employeeActiveDeactive";
export const GET_ALL_ACTIVE_EMPLOYEE: string = BASE_URL + "employee/getAll/active";

//donner apis
export const DONER_ADD:string =BASE_URL+"doner/save";
export const DONER_GETALL:string =BASE_URL+"doner/get";
export const DONER_DELETE: string=BASE_URL+"doner/delete";
export const DONER_GETID:string=BASE_URL+"doner/get";
export const GET_ALL_ACTIVE_DONER:string=BASE_URL+"doner/getAll/active";
export const DONER_ISACTIVE_DEACTIVE:string=BASE_URL+"doner/donerActiveDeactive";

//expenses apis

export const EXPENSES_ADD:string=BASE_URL+"expenses/save";

export const EXPENSES_GETID:string=BASE_URL+"expenses/get";

export const EXPENSES_DELETE:string=BASE_URL+"expenses/delete";

export const EXPENSES_GETALL:string=BASE_URL+"expenses/get";

//permission apis

export const GET_ALL_PERMISSION:string=BASE_URL+"permission/get/all"