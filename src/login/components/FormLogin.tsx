import * as React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { ChangeEvent, FormEvent } from "react";
import { FieldForm, FormControl, Validators } from "../../core/utilities/formValid";

type IProps = {
  classes?: any;
};

type IState = {
  email: FieldForm;
  pass: FieldForm;
};

const styles = {
  card: {
    width: 275,
    margin: "auto",
    marginTop: "100px",
  },
};

class FormLogin extends React.Component<IProps, IState> {
  private emailValid: FormControl;
  private passValid: FormControl;

  constructor(props) {
    super(props);
    this.emailValid = new FormControl([Validators.required(), Validators.email()]);
    this.passValid = new FormControl([Validators.required(), Validators.minLength(6)]);


    this.state = {
      email: {
        error: [],
        valid: true,
        value: "",
      },
      pass: {
        value: "",
        valid: true,
        error: [],
      },
    };
  }

  handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: this.emailValid.validate(event.target.value) });
  };

  handlePass = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ pass: this.passValid.validate(event.target.value) });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
  };

  isDisable = () => {
    const { email, pass } = this.state;
    return !email.valid || !pass.valid;
  };

  render() {
    const { classes } = this.props;

    return (
      <Card raised={true} className={classes.card}>
        <CardContent>
          <form onSubmit={this.handleSubmit} noValidate>
            <TextField
              id="email"
              label="Correo"
              margin="normal"
              variant="outlined"
              required={true}
              fullWidth={true}
              type={"email"}
              onChange={this.handleEmail}
              value={this.state.email.value}
              error={!this.state.email.valid}
              helperText={this.state.email.error[0]}
            />
            <TextField
              id="pass"
              label="Contraseña"
              margin="normal"
              variant="outlined"
              required={true}
              fullWidth={true}
              type={"password"}
              onChange={this.handlePass}
              value={this.state.pass.value}
              error={!this.state.pass.valid}
              helperText={this.state.pass.error[0]}
            />
            <Button disabled={this.isDisable()} color="primary" fullWidth={true} variant="contained" type="submit">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(FormLogin);
