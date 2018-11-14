import * as React from 'react';
import FormLogin from '../components/login/components/FormLogin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import 'firebase/auth';
import Firebase from '../core/lib/firebase';
import { loginComplete } from '../redux/actions/login';
import { DefaultState } from '../redux/models';
import { FireState } from '../core/lib/firebase/model';
import Router from 'next/router';

type IProps = {
    login: typeof loginComplete;
    firebaseInstance?: Firebase;
    firebaseReducer?: FireState;
};

class Login extends React.Component<IProps> {

    loginSubmit = async (email, pass) => {
        try {
            await this.props.firebaseInstance.auth.signInWithEmailAndPassword(email, pass);
        } catch (e) {
            console.log(e);
        } finally {
            this.props.login();
        }
    };

    render() {
        const { firebaseReducer } = this.props;
        if (firebaseReducer.profile) {
            Router.push('/');
        }
        return (
            <div className={'content'}>
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
        login: bindActionCreators(loginComplete, dispatch),
    };
};

const mapStateToProps = ({ firebaseReducer }: DefaultState) => {
    return { firebaseReducer };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
