import { ToastsManager, ToastOptions } from 'ng2-toastr';
import { Injectable, ViewContainerRef, OnInit } from '@angular/core';


@Injectable()
export class ToastrService implements OnInit {
  private toastOptions: ToastOptions;
  public vcr: ViewContainerRef;

  ngOnInit() {
    this.toastOptions = {
      positionClass: 'toast-bottom-center',
      maxShown: 3,
      newestOnTop: true,
      animate: 'fade',
      toastLife: 2000,
      enableHTML: false,
      dismiss: 'auto',
      messageClass: 'toastr-message',
      titleClass: 'toastr-title',
      showCloseButton: true,
    };
  }

  constructor(public toastr: ToastsManager) {
  }

  public showSuccess(message = 'You are awesome!', title = 'Success!') {
    this.toastr.success(message, title);
  }

  public showError(message ='This is not good!', title= 'Oops!') {
    this.toastr.error(message, title);
  }

  public showWarning(message = 'You are being warned.', title = 'Alert!') {
    this.toastr.warning(message,title);
  }

  public showInfo(message = 'Just some information for you.') {
    this.toastr.info(message);
  }

}
