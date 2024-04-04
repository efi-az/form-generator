import { Component } from '@angular/core';
import { FormGeneratorModule } from './form-generator/form-generator.module';
import { IFormType } from './form-generator/model/form.types';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormGroupService } from './form-generator/services/form-group.service';
import { FormDefaultDirective } from './form-generator/directives/form-dafault.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormGeneratorModule, ReactiveFormsModule, FormDefaultDirective],
  template: `
    <form-generator [formGroup]="formGroup" [formList]="formList">
      <div inputName="phone">
        <ng-template let-form="form" let-item>
          <input type="tel" [formControl]="form.get(item.fieldId)">
        </ng-template>
      </div>
    </form-generator>
  `,
})
export class AppComponent {

  formGroup!: FormGroup
  formList: IFormType[] = [
    {
      fieldId: 'firstname',
      inputType: 'Input',
      validator: ['required'],
      options: {
        maxlength: 5
      }
    },
    {
      fieldId: 'lastname',
      inputType: 'Input',
      validator: ['email'],
    },
    {
      fieldId: 'phone',
    },
  ]

  ngOnInit() {
    const intialValue = { firstname: 'John' }
    this.formGroup = FormGroupService.create(this.formList, intialValue)
  }

}
