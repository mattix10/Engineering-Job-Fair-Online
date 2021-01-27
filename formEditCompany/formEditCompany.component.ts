import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyEditorComponent } from './../companyEditorComponent/companyEditor.component';

@Component({
    selector: 'app-formEditCompany',
    templateUrl: 'formEditCompany.component.html'
}) export class FormEditCompanyComponent {

    @Input() user: any;
    model: any;
    public formEditCompany: FormGroup;
    public dayOfParticipation: string[] = [
        'Pierwszy dzień',
        'Drugi dzień',
        'wszystkie',
    ];
    public companyStatus: string[] = [
        'admin',
        'Uczestnik',
        'Srebrny',
        'Złoty',
        'diamentowy'
    ];
    constructor(private fb: FormBuilder, private companyEditorComponent: CompanyEditorComponent) {
       
    }

    ngOnInit(): void {
        this.formEditCompany = this.fb.group({
            dayOfParticipation: [null, Validators.compose([Validators.required])],
            companyStatus: [null, Validators.compose([Validators.required])],
          });

        this.formEditCompany.controls.companyStatus.setValue(this.user.userProfile.companyStatus, {onlySelf: true});
        this.formEditCompany.controls.dayOfParticipation.setValue(this.user.userProfile.dayOfParticipation, {onlySelf: true});
        
    }

    sendForm(email: string, value: object) {
        this.model = value;
        this.model.email = email;
    }

    hide(id) {
        this.companyEditorComponent.hide(id);
      }

}
