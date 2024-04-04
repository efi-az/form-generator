export interface IFormType {
  fieldId: string;
  validator?: inputValidator[];
  inputType?: inputType
  options?: any
}

export type inputType = 'Input' //...

export type inputValidator = 'required' | 'email' //...