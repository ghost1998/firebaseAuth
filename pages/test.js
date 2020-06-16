import useSWR from 'swr'
import Link from 'next/link'
import { useUser } from '../utils/auth/useUser'

import Test from "../components/Test";

import React from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../redux/actions/counterActions";
import withAuth from '../utils/auth/withAuth';

// import Button from "@material-ui/core/Button";

class App extends React.Component {
  // If you build and start the app, the date returned here will have the same
  // value for all requests, as this method gets executed at build time.

  // static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <h1>{this.props.counter}</h1>

        <div>
          <Link href={"/example"}>
            <a>Another example page</a>
          </Link>
        </div>
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
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default withAuth(App);
// const tvr = withAuth(App);


// export default (App);
