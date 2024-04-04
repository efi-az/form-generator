import { ChangeDetectionStrategy, Component, ElementRef, input, viewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ISubClassSchema } from '../model/sub-component.interface';
import { FormSubComponentService } from '../services/form-sub-component.service';

@Component({
  selector: 'input-sub',
  template: `
    <input #el 
      type="text" 
      [formControl]="formGroup().get(fieldId())"
    />
  `,
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSubComponent implements ISubClassSchema {

  element = viewChild.required<ElementRef>('el')
  formGroup = input.required<any>()
  fieldId = input.required<string>()
  options = input<any>()

  constructor(private formSubComponentService: FormSubComponentService) { }

  ngAfterViewInit(): void {
    this.formSubComponentService.bindAttr(this.element, this.options)
  }
}
