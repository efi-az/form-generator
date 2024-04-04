import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormType } from '../model/form.types';

export class FormGroupService {

  static create(formList: IFormType[], currentEntity: any) {
    const formGroup = new FormGroup({})
    for (const item of formList) {
      const validate: Validators[] = []
      item.validator?.forEach(val => validate.push(Validators[val]))
      formGroup.addControl(item.fieldId, new FormControl(currentEntity[item.fieldId], ...validate))
    }
    return formGroup
  }

}