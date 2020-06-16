import { Provider } from "react-redux";
import { useStore } from "../redux/store";

// import { createMuiTheme } from "@material-ui/core/styles";
// import { ThemeProvider } from "styled-components";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#ffffff",
//     },
//     // secondary: '#ff3d00',
//   },
// });

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </Provider>
  );
}
