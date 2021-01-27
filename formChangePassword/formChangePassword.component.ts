import { Component, Input } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/custom.validators';
import { CompanyEditorComponent } from './../companyEditorComponent/companyEditor.component';

@Component({
    selector: 'app-formChangePasswordCompany',
    templateUrl: 'formChangePassword.component.html'
}) export class FormChangePasswordComponent {

  @Input() user: any;

    public formChangePassword: FormGroup;
    public model: any;

    constructor(private fb: FormBuilder, private companyEditorComponent: CompanyEditorComponent) {
      this.formChangePassword = this.fb.group({
        password: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        validator: CustomValidators.passwordMatchValidator
      });
    }
    sendForm(email: string, value: object) {
      this.model = value;
      this.model.email = email;

    }

  hide(id: string) {
    this.companyEditorComponent.hide(id);
  }
}