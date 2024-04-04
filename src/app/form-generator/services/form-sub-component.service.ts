import { ElementRef, Injectable, InputSignal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSubComponentService {

  constructor() { }

  bindAttr(element: Signal<ElementRef>, options: InputSignal<any>): void {
    if (element()) {
      let el: HTMLDivElement = element().nativeElement;
      for (let key in options()) {
        el.setAttribute(key, options()[key]);
      }
    }
  }
}
