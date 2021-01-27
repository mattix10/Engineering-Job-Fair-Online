import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ConfirmService {
    constructor() {}

    public name: string;
    public isShowed: boolean;
    private isConfirmed: boolean;
    private showSubject = new Subject<boolean>();
    private confirmSubject = new Subject<boolean>();

    openConfirm() {
        this.isShowed = true;
        this.showSubject.next(this.isShowed);
    }

    closeConfirm() {
        this.isShowed = false;
        this.isConfirmed = false;
        this.showSubject.next(this.isShowed);
        this.confirmSubject.next(this.isConfirmed);
    }

    confirm() {
        this.isConfirmed = true;
        this.confirmSubject.next(this.isConfirmed);
    }

    getIsConfirmedStatus(): Observable<boolean>{
        return this.confirmSubject.asObservable();
    }

    clearSubscription() {
        this.confirmSubject = new Subject<boolean>();
        this.showSubject = new Subject<boolean>();
    }

    getIsShowedStatus(): Observable<boolean> {
        return this.showSubject.asObservable();
    }

    setName(name: string) {
        this.name = name;
    }
}