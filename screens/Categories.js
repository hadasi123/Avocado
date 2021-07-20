import React from "react";
import BaseScreen from "../components/BaseScreen";
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";

const Categories = () => {
  return (
    <BaseScreen
    title={strings.categories}
    backgroundColor={colors.blue}/>
  );
}

export default Categories;