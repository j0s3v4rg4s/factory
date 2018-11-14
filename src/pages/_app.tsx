import React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import App, { Container } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import getPageContext from "../core/config/theme";
import withRedux from "next-redux-wrapper";
import store from "../redux";
import { Provider } from "react-redux";
import Firebase from "../core/lib/firebase";

class MyApp extends App<{ store: any }> {
    // ***************************************************************************
    // Static
    // ***************************************************************************
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        Firebase.getInstance();
        return { pageProps};
    }

    // ***************************************************************************
    // Properties
    // ***************************************************************************

    private pageContext;

    // ***************************************************************************
    // Constructor
    // ***************************************************************************
    constructor(props) {
        super(props);
        this.pageContext = getPageContext();
    }

    // ***************************************************************************
    // Life cycle
    // ***************************************************************************

    componentDidMount() {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    // ***************************************************************************
    // Methods
    // ***************************************************************************

    render() {
        const { Component, pageProps, store } = this.props;
        const firebaseInstance = Firebase.getInstance();
        return (
            <Container>
                <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                >
                    <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
                        <CssBaseline />
                        <Provider store={store}>
                            <Component pageContext={this.pageContext} {...pageProps} firebaseInstance={firebaseInstance} />
                        </Provider>

                        {/*language=CSS*/}
                        <style jsx global>{`
                            html,
                            body,
                            #__next {
                                margin: 0;
                                width: 100%;
                                height: 100%;
                            }
                        `}</style>
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }
}

export default withRedux(store)(MyApp);
