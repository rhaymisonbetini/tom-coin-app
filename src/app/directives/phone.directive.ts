import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[PhoneMask]'
})
export class PhoneDireactive {

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }


  @HostListener('keyup')

  maskField() {

    const inputValue = this.el.nativeElement.value;
    var newVal = inputValue.replace(/\D/g, '');

    if (newVal.length == 0) {
      newVal = '';
    } else {
      newVal = newVal.replace(/^(\d{2})(\d)/g, "($1) $2");
      newVal = newVal.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    this.el.nativeElement.value = newVal;

  }

}
