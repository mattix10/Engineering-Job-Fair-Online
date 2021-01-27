import { Component } from '@angular/core';
import { ConfirmService } from './confirm.service';

@Component({
    selector: 'app-confirm',
    templateUrl: 'confirm.component.html',
    styleUrls: ['confirm.component.css'],
})

export class ConfirmComponent {

    public name: string;

    constructor(private confirmService: ConfirmService) {
      this.name = this.confirmService.name;
    }

    confirm() {
      this.confirmService.confirm();
    }

    close() {
      this.confirmService.closeConfirm();
    }
}
