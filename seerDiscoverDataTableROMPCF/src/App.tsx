import * as React from "react";

import Index from "./index";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";


export default function App({tableContent, context}: {tableContent: any, context: any}) {
  return (
    <Provider store={store}>
      <Index tableContent={tableContent} context={context} />
    </Provider>
  )
}
