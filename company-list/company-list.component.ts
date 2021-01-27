import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ConfirmService } from '../confirm/confirm.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {

  constructor(
    private userService: UserService,
    public alertify: AlertifyService,
    private confirmService: ConfirmService
  )
  {
  }
  public users: User[];
  public showDetails = false;
  public showConfirmWindow = false;
  public mode = 'EDIT';
  public companyPerPage: number;
  public selectedPage: number;

  ngOnInit() {
    this.loadUsers();
    this.confirmService.getIsShowedStatus().subscribe(show => {
      this.showConfirmWindow = show;
    });
    this.confirmService.getIsConfirmedStatus().subscribe(confirm => {
      if (confirm == true) {
        this.deleteCompany();
      }
    });

  }
  ngOnDestroy(): void {
    this.confirmService.clearSubscription();
  }

  loadUsers(): User[] | void {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.alertify.success('Załadowano firmy');
      },
      (error) => {
        this.alertify.error('Nie udało się załadować');
      }
    );
  }

  getUsers(): User[] {
    if (this.companyPerPage === undefined) {
      this.companyPerPage = 9;
    }
    if (this.selectedPage === undefined) {
      this.selectedPage = 1;
    }
    if (this.users !== undefined) {
      const pageIndex = (this.selectedPage - 1) * this.companyPerPage;
      return this.users.slice(pageIndex, pageIndex + this.companyPerPage);
    }
  }

  changePageSize(count: number) {
    this.companyPerPage = count;
  }

  changeSelectedPage(count: number) {
    this.selectedPage = count;
  }

  setEdit(){
    this.mode = 'EDIT';
    this.showDetails = false;
  }

  setPasswordMode() {
    this.mode = 'PASSWORD';
    this.showDetails = false;
  }

  displayConfirmWindow(name: string) {
    this.confirmService.setName(name);
    this.confirmService.openConfirm();
  }

  deleteCompany() {
    this.alertify.success('Usunięto');
    this.confirmService.closeConfirm();
  }

  showCompanyDetails(id: string) {
    this.showDetails = true;
    const modal = document.getElementById(id);
    modal.classList.add('visible');
    modal.classList.remove('hidden');
  }
}

