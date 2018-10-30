import * as React from "react";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { FormEvent } from "react";
import { Validators } from "../../core/utilities/formValid";
import FormValidator from "../../core/components/FormValidator";

type IProps = {
    classes?: any;
};

const styles = {
    card: {
        width: 300,
        margin: "auto",
        marginTop: "100px",
    },
};

class FormLogin extends React.Component<IProps> {
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        const { classes } = this.props;

        return (
            <Card raised={true} className={classes.card}>
                <CardContent>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <FormValidator
                            id="email"
                            label="Correo"
                            margin="normal"
                            variant="standard"
                            required={true}
                            fullWidth={true}
                            type={"email"}
                            validators={[Validators.required("Campo requerido"), Validators.email("Email inválido")]}
                        />

                        <FormValidator
                            validators={[Validators.required("Campo requerido"), Validators.minLength(6)]}
                            id="pass"
                            label="Contraseña"
                            margin="normal"
                            variant="standard"
                            required={true}
                            fullWidth={true}
                            type={"password"}
                        />

                        <Button color="primary" fullWidth={true} variant="contained" type="submit">
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(FormLogin);
