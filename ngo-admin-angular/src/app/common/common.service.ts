import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable()
export class CommonService {

	currentPageTitle: any = "Dashboard";
	fetchDonerListParam: any;
	pageLimitOptions: any;

	showMessage(icon, message) {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top',
			showConfirmButton: false,
			timer: icon == 'error' ? 7000 : 2000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		})
		Toast.fire({
			icon: icon,
			title: message
		})
	}

	fetchSearch()
	{
	this.fetchDonerListParam.pageSize=this.pageLimitOptions[0],
	this.fetchDonerListParam.searchStr= "",
	this.fetchDonerListParam.pageNo=0,
	this.fetchDonerListParam.currentPage= 0;
	}





}


