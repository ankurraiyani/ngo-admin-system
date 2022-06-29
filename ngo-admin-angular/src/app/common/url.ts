export const BASE_URL: string = "http://localhost:8080/api/";

//volunteer apis
export const VOLUNTEER_ADD : string = BASE_URL + "volunteer/save";
export const VOLUNTEER_GETALL : string = BASE_URL + "volunteer/get/all";

//event apis
export const EVENT_ADD: string = BASE_URL + "event/save";
export const EVENT_GETALL:string= BASE_URL + "event/get";
export const EVENT_DELETE: string=BASE_URL+"event/delete";

//employee apis
export const EMPLOYEE_ADD: string = BASE_URL + "employee/save";
export const EMPLOYEE_GETALL: string = BASE_URL + "employee/get/all";

//donner apis
export const DONER_ADD:string =BASE_URL+"doner/save";
export const DONER_GETALL:string =BASE_URL+"doner/get/all";
export const DONER_DELETE: string=BASE_URL+"doner/delete";

