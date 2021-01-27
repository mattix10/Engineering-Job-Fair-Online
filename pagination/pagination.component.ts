import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.css']
})
export class PaginationComponent {

  @Input()
  length;
  @Output()
  public changePageSize: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public changeSelectedPage: EventEmitter<any> = new EventEmitter<any>();

  public itemsPerPage = 9;
  public selectedPage = 1;
  public isActive;
  changePage(newPage: number) {
    this.selectedPage = newPage;
    this.changeSelectedPage.emit(this.selectedPage);
  }

  changeSize(newSize: number) {
    this.itemsPerPage = Number(newSize);
    this.changePageSize.emit(this.itemsPerPage);
    this.changePage(1);
  }
  get pageCount(): number {
      return Math.ceil(this.length / this.itemsPerPage);
  }
}
