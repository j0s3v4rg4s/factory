import * as React from "react";
import FormLogin from "../components/login/components/FormLogin";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions";

type IProps = {
    login: typeof loginAction;
};

class Login extends React.Component<IProps> {
    loginSubmit = (email, pass) => {
        this.props.login(email, pass);
    };

    render() {
        return (
            <div className={"content"}>
                <FormLogin submit={this.loginSubmit} />

                {/*language=SCSS*/}
                <style jsx>{`
                    .content {
                        overflow: hidden;
                        height: 100%;
                        background: url(static/img/walper.jpg) no-repeat bottom;
                        background-size: cover;
                    }
                `}</style>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: bindActionCreators(loginAction, dispatch),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Login);
