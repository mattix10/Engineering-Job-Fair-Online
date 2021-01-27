import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompanyListComponent } from './../company-list/company-list.component';
import { CompanyNotAcceptedComponent } from './../company-not-accepted/company-not-accepted.component';

@Component({
  selector: 'app-company-editor',
  templateUrl: './companyEditor.component.html',
  styleUrls: ['./companyEditor.component.css'],
})
export class CompanyEditorComponent {

  @Input() showDetails;
  @Input() user: any;
  @Input() mode: string;

    constructor(private companyList: CompanyListComponent) {}

  hide(id: string) {
    const modal = document.getElementById(id);
    modal.classList.add('hidden');
    modal.classList.remove('visible');
  }

  setEdit() {
    this.companyList.setEdit();
  }

  setPasswordMode() {
    this.companyList.setPasswordMode();
  }

}
