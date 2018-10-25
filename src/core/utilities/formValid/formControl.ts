import { FieldForm, IValidator, validator } from "./interface";

export class FormControl implements IValidator {

  constructor(private validators: validator[]) {}

  validate(value: string): FieldForm {
    const error = [];
    this.validators.forEach(fn => {
      const err = fn(value);
      if (err) error.push(err);
    });
    return {
      error,
      valid: error.length === 0,
      value,
    };
  }
}
