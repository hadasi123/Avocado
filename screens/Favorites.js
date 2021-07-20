import React from "react";
import BaseScreen from "../components/BaseScreen";
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";

const Favorites = () => {
  return (
    <BaseScreen
    title={strings.favorites}
    backgroundColor={colors.blue}/>
  );
}

export default Favorites;