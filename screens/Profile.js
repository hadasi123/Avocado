import React from "react";
import BaseScreen from "../components/BaseScreen";
import * as strings from "../constants/strings";
import * as colors from "../constants/colors";

const Profile = () => {
  return (
    <BaseScreen
    title={strings.profile}
    backgroundColor={colors.blue}/>
  );
}

export default Profile;