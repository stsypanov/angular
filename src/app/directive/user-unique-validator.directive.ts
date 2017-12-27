import {Directive} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS} from "@angular/forms";
import {Http, Headers, URLSearchParams} from "@angular/http";

@Directive({
  selector: '[userUniqueValid][formControlName],[userUniqueValid][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UserUniqueValidator,
      multi: true
    }
  ]
})
export class UserUniqueValidator {

  url = "http://localhost:8080/checkUserUnique";

  constructor(private http: Http) {
  }

  validate(control: AbstractControl): Promise<{ [key: string]: any }> {
    const user = control.value;
    const params: URLSearchParams = new URLSearchParams();
    params.set('user', user);

    return new Promise(resolve =>
      this.http
        .get(this.url, {search: params})
        .map(response => response.json())
        .subscribe(res =>
          res ? resolve(null) : resolve({userUniqueValid: false})));
  }

}
