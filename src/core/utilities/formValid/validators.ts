import { validator } from './interface';

// export class Validators {
//     static emailValidators = (errMsg?: string): validator => value => {
//         const regex = new RegExp(/^[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*$/g);
//         return regex.test(value) ? null : errMsg ? errMsg : 'Invalid emailValidators';
//     };
//
//     static minLengthValidators = (length: number, errMsg?: string): validator => (value: string) => {
//         if (value == null || value.length < length) {
//             return errMsg ? errMsg : 'Min length ' + length;
//         }
//     };
//
//     static requiredValidators = (errMsg?: string): validator => value => {
//         if (value == null || value.length === 0 || value === '') {
//             return errMsg ? errMsg : 'Field requiredValidators';
//         } else {
//             return null;
//         }
//     };
// }

export const emailValidators = (errMsg?: string): validator => value => {
    const regex = new RegExp(/^[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*$/g);
    return regex.test(value) ? null : errMsg ? errMsg : 'Invalid emailValidators';
};

export const minLengthValidators = (length: number, errMsg?: string): validator => (value: string) => {
    if (value == null || value.length < length) {
        return errMsg ? errMsg : 'Min length ' + length;
    }
};

export const requiredValidators = (errMsg?: string): validator => value => {
    if (value == null || value.length === 0 || value === '') {
        return errMsg ? errMsg : 'Field requiredValidators';
    } else {
        return null;
    }
};
