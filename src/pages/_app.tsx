import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Container>
          <Component {...pageProps} />
        </Container>

        {/*language=CSS*/}
        <style jsx global>{`
          html, body {
            margin: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
