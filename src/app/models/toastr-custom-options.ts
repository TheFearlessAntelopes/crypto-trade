import { ToastOptions } from 'ng2-toastr';
export class ToastrCustomOptions extends ToastOptions {

    newestOnTop = true;
    showCloseButton = true;
    toastLife = 2000;
    positionClass = 'toast-bottom-center';
    maxShown = 2;
}
