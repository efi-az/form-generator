import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, TemplateRef, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormDefaultDirective } from '../directives/form-dafault.directive';
import { IFormType } from '../model/form.types';

@Component({
  selector: 'form-generator',
  template: `
    <form [formGroup]="formGroup()">
    @for (item of formList(); track $index) {
      <ng-container
        [ngTemplateOutlet]="inputTemplates[item.fieldId] || noTemplate"
        [ngTemplateOutletContext]="{ $implicit: item, form: formGroup() }"
      >
      </ng-container>
      <ng-template #noTemplate>
        @if(item.inputType) {
          <component
            [is]="item.inputType"
            [formList]="item"
            [formGroup]="formGroup()"
          ></component>
        }
      </ng-template>
    }
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGeneratorComponent {

  formList = input.required<IFormType[]>()
  formGroup = input.required<FormGroup>()

  @ContentChildren(FormDefaultDirective) inputList!: QueryList<FormDefaultDirective>

  get inputTemplates(): { [key: string]: TemplateRef<any> } {
    if (this.inputList.length !== 0) {
      const inputTemplates: { [key: string]: TemplateRef<any> } = {};
      for (const inputDefinition of this.inputList.toArray()) {
        if (inputDefinition.inputTemplate) {
          inputTemplates[inputDefinition.inputName()] = inputDefinition.inputTemplate;
        }
      }
      return inputTemplates;
    } else {
      return {};
    }
  };

}
