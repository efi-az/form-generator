import { Directive, TemplateRef, ContentChild, input } from '@angular/core';

@Directive({
  selector: '[inputName]',
  standalone: true
})
export class FormDefaultDirective {

  constructor() { }

  inputName = input.required<string>();
  @ContentChild(TemplateRef) public inputTemplate?: TemplateRef<any>;

}