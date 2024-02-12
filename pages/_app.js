import { useEffect } from "react";
import "../styles/globals.css";
import { useUserStore } from "@/store";

function MyApp({ Component, pageProps }) {
 // const state = useSelector(state => state.themes); 
  const state = useUserStore((state) => {
    return state; // couldve just returned state.userPreferences.theme here...
  })
  console.log(state); 

  useEffect(() => {
    // Your code here. Add the dark class to the <html /> tag
    // with vanilla js.
    
    const rootEl = document.documentElement;
   
    if (state.userPreferences.theme === 'dark') {
      rootEl.classList.add('dark') // gives us access to e.g. className="bg-white dark:bg-black" or whatever color we want during 'dark' mode!
    } else if (state.userPreferences.theme === 'light') {
      rootEl.classList.remove('dark') 
    } else {
      console.log("Unknown theme");
    }
    // rootEl.classList.toggle('dark'); // if-statements better so we can check for errors easier?

}, [state.userPreferences.theme]); // rerun useEffect when theme in state changes, to update the root element classList

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  //<Provider store={store}>
    <MyApp Component={Component} pageProps={pageProps} />
 // </Provider>
);