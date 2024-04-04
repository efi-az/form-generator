import { ChangeDetectionStrategy, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef, input, signal, } from '@angular/core';
import { formSchema } from '../model/form.schema';
import { FormGroup } from '@angular/forms';
import { IFormType, inputType } from '../model/form.types';
import { ISubClassSchema } from '../model/sub-component.interface';
import { SIGNAL, signalSetFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'component',
  template: `<ng-container #container></ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentComponent implements OnInit {

  is = input.required<inputType>()
  formList = input.required<IFormType>()
  formGroup = input.required<FormGroup>()

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private componentRef: ComponentRef<any> | null = null;

  constructor(private formSchemaClass: formSchema) { }

  ngOnInit() {
    if (this.is) {
      const componentType = this.formSchemaClass.getComponentType(this.is());

      if (this.container) {
        this.componentRef = this.container.createComponent(componentType);
        this.componentRef.setInput("formGroup", this.formGroup());
        this.componentRef.setInput("fieldId", this.formList().fieldId);
        this.componentRef.setInput("options", this.formList()?.options);
      }
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
