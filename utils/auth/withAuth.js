import React from "react";
import router from "next/router";

import { connect } from "react-redux";
import { compose } from "redux";

// import { auth } from "firebase";

import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "./initFirebase";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../../redux/actions/authActions";
import { incrementCounter } from "../../redux/actions/counterActions";

const withAuth = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: "LOADING",
      };
    }
    componentDidMount() {
        this.props.loginRequest();
      //   this.props.incrementCounter();
      initFirebase();

      const auth = firebase.auth();

      auth.onAuthStateChanged((authUser) => {
        console.log("hohohoho");

        console.log(authUser);
        if (authUser) {
                  this.props.loginSuccess(authUser.email);

          this.setState({
            status: "SIGNED_IN",
          });
        } else {
          this.props.loginFailure();
          router.push("/");
        }
      });
    }
    renderContent() {
      const { status } = this.state;
      if (status == "LOADING") {
        return <h1>Loading ......</h1>;
      } else if (status == "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    }
    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  loginRequest: loginRequest,
  loginSuccess: loginSuccess,
  loginFailure: loginFailure,
  incrementCounter: incrementCounter,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuth);
