import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable()
export class CommonService {



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
}
  

