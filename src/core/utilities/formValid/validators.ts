import { validator } from "./interface";

export class Validators {
    static email = (errMsg?: string): validator => value => {
        const regex = new RegExp(/^[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*$/g);
        return regex.test(value) ? null : errMsg ? errMsg : "Invalid email";
    };

    static minLength = (length: number, errMsg?: string): validator => (value: string) => {
        if (value == null || value.length < length) {
            return errMsg ? errMsg : "Min length " + length;
        }
    };

    static required = (errMsg?: string): validator => value => {
        if (value == null || value.length === 0 || value === "") {
            return errMsg ? errMsg : "Field required";
        } else {
            return null;
        }
    };
}
