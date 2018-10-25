import Document, { Head, Main, NextScript } from "next/document";
import * as React from "react";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
    // ***************************************************************************
    // Static
    // ***************************************************************************
    static async getInitialProps(ctx) {
        let pageContext;
        const page = ctx.renderPage(Component => {
            return props => {
                pageContext = props.pageContext;
                return <Component {...props} />;
            };
        });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...page,
            ...initialProps,
            styles: (
                <React.Fragment>
                    <style
                        id="jss-server-side"
                        dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
                    />
                    {flush() || null}
                </React.Fragment>
            ),
        };
    }

    // ***************************************************************************
    // Methods
    // ***************************************************************************
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
