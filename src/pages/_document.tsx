import Document, { Head, Main, NextScript } from "next/document";
import * as React from "react";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
    // ***************************************************************************
    // Static
    // ***************************************************************************
    static async getInitialProps(ctx) {

        let pageContext;
        const transform = Component => {
            return props => {
                pageContext = props.pageContext;
                return <Component {...props}/>
            };
        };
        const page = ctx.renderPage(transform);
        const styles = flush();
        return {
            ...page,
            styles: (
                <React.Fragment>
                    <style
                    id="jss-server-side"
                    dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
                    />
                    {styles || null}
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
