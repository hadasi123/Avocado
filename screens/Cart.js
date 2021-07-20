import React from "react";
import BaseScreen from "../components/BaseScreen";
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";

const Cart = () => {
    return (
        <BaseScreen
        title={strings.cart}
        backgroundColor={colors.blue}/>
      );
}

export default Cart;