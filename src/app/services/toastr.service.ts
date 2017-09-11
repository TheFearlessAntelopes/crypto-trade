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

  public showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  public showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  public showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  public showInfo() {
    this.toastr.info('Just some information for you.');
  }

  public showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, );
  }

}
