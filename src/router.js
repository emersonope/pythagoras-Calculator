import { Switch, Route, BrowserRouter } from "react-router-dom";

import * as Pages from "./pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" component={Pages.Home} />            
            </Switch>
        </BrowserRouter>
    );
}

export default Router;