import * as React from "react";
import { validator } from "../utilities/formValid";
import TextField, { TextFieldProps } from "@material-ui/core/TextField/TextField";
import { ChangeEvent } from "react";

type IProps = {
    validators: validator[];
    id: string;
    valid: (update: { valid: boolean, value: string }) => void;
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
    // Life cycle
    // ***************************************************************************

    componentDidMount() {
        this.validateField(this.state.value);
    }

    // ***************************************************************************
    // Methods
    // ***************************************************************************

    validateField = (value: string) => {
        const errors = [];
        this.props.validators.forEach(fn => {
            const err = fn(value);
            if (err) {
                errors.push(err);
            }
        });
        if (this.isFocus) {
            this.props.valid({
                valid: errors.length === 0,
                value
            });
            return {
                error: errors,
                valid: errors.length === 0,
                value: value,
            };
        } else {
            this.props.valid({
                valid: errors.length === 0,
                value
            });
            return {
                error: [],
                valid: true,
                value: value,
            };
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
        const defaultProps = {...this.props};
        delete defaultProps["valid"];
        return (
            <TextField
                {...defaultProps}
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
