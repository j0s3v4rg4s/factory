import * as React from "react";
import { validator } from "../utilities/formValid";
import TextField, { TextFieldProps } from "@material-ui/core/TextField/TextField";
import { ChangeEvent } from "react";

type IProps = {
    validators: validator[];
    id: string;
} & TextFieldProps;

type IState = {
    error: string[];
    valid: boolean;
    value: string;
};

class FormValidator extends React.Component<IProps, IState> {
    // ***************************************************************************
    // Properties
    // ***************************************************************************
    isFocus = false;

    // ***************************************************************************
    // Constructor
    // ***************************************************************************
    constructor(props) {
        super(props);
        this.state = {
            error: [],
            valid: true,
            value: "",
        };
    }

    // ***************************************************************************
    // Methods
    // ***************************************************************************

    validateField = (value: string) => {
        if (this.isFocus) {
            const errors = [];
            this.props.validators.forEach(fn => {
                const err = fn(value);
                if (err) {
                    errors.push(err);
                }
            });
            return {
                error: errors,
                valid: errors.length === 0,
                value: value,
            };
        } else {
            return {
                error: [],
                valid: true,
                value: value,
            }
        }
    };

    handle = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState(this.validateField(event.target.value));
    };

    blur = event => {
        this.isFocus = true;
        this.setState(this.validateField(this.state.value));
    };

    render() {
        return (
            <TextField
                {...this.props}
                onChange={this.handle}
                value={this.state.value}
                error={!this.state.valid}
                helperText={this.state.error[0]}
                onBlur={this.blur}
            />
        );
    }
}

export default FormValidator;
