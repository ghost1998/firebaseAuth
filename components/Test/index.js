import React from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../../redux/actions/counterActions";

// import { useUser } from "../..u/utils/auth/useUser";

import { useUser } from "../../utils/auth/useUser";

// import Button from "@material-ui/core/Button";

class App extends React.Component {
  // If you build and start the app, the date returned here will have the same
  // value for all requests, as this method gets executed at build time.

  // static async getStaticProps() {
  //   // Note that in this case we're returning the state directly, without creating
  //   // the store first (like in /pages/ssr.js), this approach can be better and easier
  //   return {
  //     props: {
  //       initialReduxState: {
  //         lastUpdate: Date.now(),
  //         light: false,
  //       },
  //     },
  //   };
  // }

  // static getInitialProps({ store }) {}

  

  constructor(props) {
    super(props);
      // const { user, logout } = useUser();

  }

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <h1>{this.props.counter}</h1>

        {/* <p
          style={{
            display: "inlinelock",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => logout()}
        >
          Log out
        </p> */}
        {/* <Button variant="contained">Default</Button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default (App);
