import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Bind isOpen to the class 'open'
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(){
    // Listen for click event and toggle the open class
    this.isOpen = !this.isOpen;
  }

}
