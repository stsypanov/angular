import {Attribute, Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EqualToValidatorDirective,
    multi: true
  }]
})
export class EqualToValidatorDirective {

  constructor(@Attribute("validateEqual") public validateEqual: string) {
  }

  validate(control: AbstractControl): { [key: string]: any } {
    const value = control.value;
    const e = control.root.get(this.validateEqual);
    e.valueChanges.subscribe((val: string) => {
        if (val != value) control.setErrors({validateEqual: false});
        else control.setErrors(null);
      }
    );
    if (e && value !== e.value) return {validateEqual: false};
    return null;
  }

}
