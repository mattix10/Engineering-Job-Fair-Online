import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-company-not-accepted',
  templateUrl: './company-not-accepted.component.html',
  styleUrls: ['./company-not-accepted.component.css'],
})
export class CompanyNotAcceptedComponent implements OnInit{
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private alertify: AlertifyService) {}
  users: User[];
  model: any = {
    companyStatus: 'Uczestnik',
    dayOfParticipation: 'Pierwszy dzień'
  };

  public companyPerPage: number;
  public selectedPage: number;
  public showModal = false;
  public showDetails = false;
  public mode = 'REGISTRY';

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): User[] | any {
    this.userService.getUsersUnaccepted().subscribe(
      (users: User[]) => {
        this.users = users;      },
      (error) => {
        this.alertify.error('Nie udało się załadować');
      }
    );
  }

  getUsers(): User[] {
    if (this.companyPerPage === undefined) {
      this.companyPerPage = 6;
    }
    if (this.selectedPage === undefined) {
      this.selectedPage = 1;
    }
    if (typeof this.users !== 'undefined') {
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

  acceptUser(userEmail: string, formValue: any) {
    const {confirmPassword, ...rest} = formValue ;
    this.model = rest;
    this.model.email = userEmail;
    this.authService.registerCompany(this.model).subscribe(
      () => {
        this.alertify.success('Rejestracja udana.');
        this.users.splice(this.users.findIndex(u => u.email === userEmail), 1);
      },
      (error) => {
       this.alertify.error('Rejestracja nie powiodła się.');
      }
    );
  }
  show(id: string) {
    const modal = document.getElementById(id);
    modal.classList.add('show');
    modal.classList.remove('hidden');
  }
}
