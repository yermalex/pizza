import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPizzaData, IPizzaForm } from './checkout.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form = new FormGroup<IPizzaForm>({
    firstName: new FormControl('', { validators: [Validators.required] }),
    address: new FormControl('', { validators: [Validators.required] }),
    phone: new FormControl('', { validators: [Validators.required] }),
  });
  regexp = /[.]/g;
  fakeUrlWithOkStatus = 'https://jsonplaceholder.typicode.com/posts';
  alerts: {type: string, msg: string}[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.form.get('firstName').valueChanges.subscribe((firstName) => {
      if (firstName?.trim() && this.regexp.test(firstName)) {
        this.form.get('firstName').setValue(firstName.replaceAll(this.regexp, ''));
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue: IPizzaData = this.form.getRawValue();

      this.http.post<IPizzaData>(this.fakeUrlWithOkStatus, formValue)
        .pipe(
          catchError((err) => {
            return of(err);
          })
        )
        .subscribe(
          (value: IPizzaData | HttpErrorResponse) => {
            this.onClosed();

            if (value instanceof HttpErrorResponse) {
              this.alerts.push({
                type: 'warning',
                msg: 'Не удалось сделать заказ',
              });
            } else {
              this.alerts.push({
                type: 'success',
                msg: 'Спасибо за заказ',
              });
            }

            this.form.reset();
          })
    }
  }

  isValidControl(controlName: string): boolean {
    return this.form.get(controlName).touched && this.form.get(controlName).invalid;
  }

  onClosed(): void {
    this.alerts = [];
  }
}
