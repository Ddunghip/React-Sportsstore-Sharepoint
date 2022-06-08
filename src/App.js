import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect }
    from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";
import Login from "./Login";
import { basicReduxStore } from "./reduxStore";

export default class App extends Component {

    render() {

        return (
            <>

                <Login reduxStore={basicReduxStore} />

                <Provider store={SportsStoreDataStore}>

                    <Router>
                        <Switch>


                            <Route path="/shop" component={ShopConnector} />
                            <Redirect to="/shop" />

                        </Switch>

                    </Router>
                </Provider>



            </>
        )


    }
}
