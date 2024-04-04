import { ElementRef, InputSignal, Signal } from "@angular/core";

export interface ISubClassSchema {
  element: Signal<ElementRef>
  options: InputSignal<any>;
  formGroup: InputSignal<string>
  fieldId: InputSignal<string>
}