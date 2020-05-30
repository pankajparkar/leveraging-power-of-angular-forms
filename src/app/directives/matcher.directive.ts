import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[lpafMatcher]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => MatcherDirective),
    multi: true
  }]
})
export class MatcherDirective implements Validator {

  constructor() {
    
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return { exceed: true };
  }
}
