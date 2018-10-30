import * as React from "react";
import FormLogin from "../login/components/FormLogin";

class Login extends React.Component {
    render() {
        return (
            <div className={"content"}>
                <FormLogin />

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

export default Login;
