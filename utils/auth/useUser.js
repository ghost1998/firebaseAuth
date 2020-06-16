import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../auth/initFirebase";
import {
  incrementCounter,
  decrementCounter,
} from "../../redux/actions/counterActions";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} from "../../redux/actions/authActions";

initFirebase();

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("in sing out");
        dispatch({ type: LOGOUT_REQUEST });
        // console.log(this.props);
        // this.props.decrementCounter();
        // Sign-out successful.
        cookies.remove("auth");
        router.push("/auth");
        dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch((e) => {
        dispatch({ type: LOGOUT_FAILURE });

        console.error(e);
      });
  };

  useEffect(() => {
    const cookie = cookies.get("auth");
    if (!cookie) {
      router.push("/");
      return;
    }
    setUser(JSON.parse(cookie));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, logout };
};

export { useUser };
