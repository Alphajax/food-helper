import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

function App(){
    return (
        <Router>

            <Switch>
                <Route path="/">
                    <RegistrationPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
