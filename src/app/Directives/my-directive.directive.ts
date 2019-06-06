import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class MyDirectiveDirective {

  constructor(private element:ElementRef) { 
    element.nativeElement.style.color = "red";
   }

}