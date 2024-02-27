import * as React from "react";

import Index from "./index";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store";

// OutputSetId
function App({tableContent, context, imageUrl}: {tableContent: any, context: any, imageUrl?: any}) {  
  return (
    <Provider store={store}>
      <Index tableContent={tableContent} context={context} imageUrl={imageUrl} />
    </Provider>
  )
}

export default React.memo(App)
