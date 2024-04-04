import { NgModule } from '@angular/core';
import { FormGeneratorComponent } from './components/form-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './components/component.component';
import { FormDefaultDirective } from './directives/form-dafault.directive';

@NgModule({
  declarations: [
    FormGeneratorComponent,
    ComponentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormDefaultDirective,
  ],
  exports: [
    FormGeneratorComponent
  ]
})
export class FormGeneratorModule { }