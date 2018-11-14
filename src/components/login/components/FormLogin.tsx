import * as React from "react";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { FormEvent } from "react";

import FormValidator from "../../../core/components/FormValidator";
import { connect } from "react-redux";
import { ILoginState } from "../../../redux/actions/login";
import { emailValidators, minLengthValidators, requiredValidators } from "../../../core/utilities/formValid";
import Typography from '@material-ui/core/Typography';
import Spinner from "../../../core/components/spinner";




type IProps = {
    classes?: any;
    submit: (email: string, pass: string) => void;
    login?: ILoginState;
};

type IState = {
    emailValid: {
        valid: boolean;
        value: string;
    };
    passValid: {
        valid: boolean;
        value: string;
    };
};

const styles = {
    card: {
        width: 300,
        margin: "auto",
        marginTop: "100px",
    },
};

class FormLogin extends React.Component<IProps, IState> {
    state = {
        emailValid: {
            valid: true,
            value: "",
        },
        passValid: {
            valid: true,
            value: "",
        },
    };
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.submit(this.state.emailValid.value, this.state.passValid.value);
    };

    render() {
        const { classes } = this.props;
        return (
            <Card raised={true} className={classes.card}>
                <CardContent>
                    <Typography variant="h3" color={'primary'}>
                        Entrar
                    </Typography>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <FormValidator
                            id="email"
                            label="Correo"
                            margin="normal"
                            variant="standard"
                            required={true}
                            fullWidth={true}
                            type={"email"}
                            validators={[requiredValidators("Campo requerido"), emailValidators("Email inválido")]}
                            valid={valid => this.setState({ emailValid: valid })}
                        />

                        <FormValidator
                            validators={[requiredValidators("Campo requerido"), minLengthValidators(6)]}
                            id="pass"
                            label="Contraseña"
                            margin="normal"
                            variant="standard"
                            required={true}
                            fullWidth={true}
                            type={"password"}
                            valid={valid => this.setState({ passValid: valid })}
                        />

                        <Button
                            disabled={!(this.state.emailValid.valid && this.state.passValid.valid)}
                            color="primary"
                            fullWidth={true}
                            variant="contained"
                            type="submit"
                        >
                            {this.props.login && this.props.login.isLogin ? <Spinner size={20} width={2} />: 'Entrar'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = ({ userReducer }) => {
    const { login } = userReducer;
    return { login };
};

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(FormLogin));
