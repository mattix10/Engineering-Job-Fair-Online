import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom.validators';
import { CompanyEditorComponent } from './../companyEditorComponent/companyEditor.component';

@Component({
    selector: 'app-formRegistration',
    templateUrl: 'formRegistration.component.html'
}) export class FormRegistrationComponent {

    @Input() user: any;
    constructor(private fb: FormBuilder, private companyEditorComponent: CompanyEditorComponent) {}
    public model: any;
    public formAddCompany: FormGroup;
    public dayOfParticipation: string[] = [
        'Pierwszy dzień',
        'Drugi dzień',
        'Wszystkie',
    ];
    public companyStatus: string[] = [
        'Uczestnik',
        'Srebrny',
        'Złoty',
        'Diamentowy'
    ];
  
    ngOnInit(): void {
      this.formAddCompany =  this.fb.group({
          dayOfParticipation: [null, Validators.compose([Validators.required])],
          companyStatus: [null, Validators.compose([Validators.required])],
          password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
          confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        validator: CustomValidators.passwordMatchValidator
      });
      this.formAddCompany.controls.companyStatus.setValue(this.companyStatus[1], {onlySelf: true});
      this.formAddCompany.controls.dayOfParticipation.setValue(this.dayOfParticipation[0], {onlySelf: true});
    }

    sendForm(email: string, value: object) {
      this.model = value;
      this.model.email = email;
  }

    hide(id: string) {
        this.companyEditorComponent.hide(id);
      }
}
