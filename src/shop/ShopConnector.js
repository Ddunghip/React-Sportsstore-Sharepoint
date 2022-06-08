import React, { Component } from "react";
import { Switch, Route, Redirect }
    from "react-router-dom"
import { connect } from "react-redux";
import { loadData, loadDatap } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import { addToCart, updateCartQuantity, removeFromCart, clearCart }
    from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";
import { authProvider } from "../authProvider";

const mapStateToProps = (dataStore) => ({
    ...dataStore,

})

const mapDispatchToProps = {
    loadData, loadDatap,
    addToCart, updateCartQuantity, removeFromCart, clearCart
}

const filterProducts = (products = [], category) =>

    (!category || category === "All") ? products : products.filter(p => p.Category.toLowerCase() === category.toLowerCase());


export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            { console.log('check props shop connectors', this.props) }
            return <Switch>
                <Route path="/shop/products/:category?"

                    render={(routeProps) =>
                        <Shop {...this.props} {...routeProps}
                            products={filterProducts(this.props.products,
                                routeProps.match.params.category)} />} />
                {console.log('check props shop connectors', this.props)}
                <Route path="/shop/cart" render={(routeProps) =>
                    <CartDetails {...this.props} {...routeProps} />} />
                <Redirect to="/shop/products" />
            </Switch>
        }

        componentDidMount() {

            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadDatap(DataTypes.PRODUCTS);

        }
    }
)
