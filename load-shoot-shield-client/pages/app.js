import React from "react";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import LivesComponent from "../components/LivesComponent";

////////////////////////     Methods     ////////////////////////////

////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>Load Shoot Shield</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">Load Shoot Shield</h1>

          <p className="description">
            Play the classic school game online with your friends!
          </p>

          <body>
            <div class="lss-wrapper">
              <ul id="events"></ul>
              <div class="button-wrapper">
                <ButtonGroup
                  color="primary"
                  aria-label="load shoot shield button group"
                >
                  <Button id="load">Load</Button>
                  <Button id="shoot">Shoot</Button>
                  <Button id="shield">Shield</Button>
                </ButtonGroup>
              </div>
              <div>
                <LivesComponent></LivesComponent>
              </div>
            </div>
            <script src="http://localhost:8080/socket.io/socket.io.js"></script>
          </body>
        </main>
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .lss-button-group {
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
