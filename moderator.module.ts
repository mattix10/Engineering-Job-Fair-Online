import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ModeratorComponent } from './moderator.component';
import { ModeratorRoutingModule } from './moderator-routing.module';
import { AccountBubbleModule } from '../account-bubble/account-bubble.module';
import { CompanyNotAcceptedComponent } from './company-not-accepted/company-not-accepted.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyEditorComponent } from './companyEditorComponent/companyEditor.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CounterDirective } from '../counter.directive';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmService } from './confirm/confirm.service';
import { FormEditCompanyComponent } from './formEditCompany/formEditCompany.component';
import { FormChangePasswordComponent } from './formChangePassword/formChangePassword.component';
import { FormRegistrationComponent } from './formRegistrationCompany/formRegistration.coomponent';


@NgModule({
  declarations: [
    ModeratorComponent,
    CompanyNotAcceptedComponent,
    CompanyListComponent,
    CompanyEditorComponent,
    PaginationComponent,
    CounterDirective,
    ConfirmComponent,
    FormEditCompanyComponent,
    FormChangePasswordComponent,
    FormRegistrationComponent
  ],
  imports: [
    CommonModule,
    ModeratorRoutingModule,
    AccountBubbleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ ModeratorComponent
  ],
  providers: [CompanyListComponent, CompanyNotAcceptedComponent, ConfirmService]
})
export class ModeratorModule { }
