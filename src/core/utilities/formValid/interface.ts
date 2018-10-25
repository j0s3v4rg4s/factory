export interface IValidator {
  validate(value: string): FieldForm;
}

export interface FieldForm {
  valid: boolean;
  error: string[];
  value: string;
}

export type validator<T = string> = (value: T) => string | null;
