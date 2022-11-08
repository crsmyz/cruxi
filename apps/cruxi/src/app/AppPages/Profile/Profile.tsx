import React from "react";
// interfaces
import { ProfileProps } from './ProfileProps.interface';
// styles
import { StyledProfile } from './StyledProfile';

const Profile = (props: ProfileProps) => {
  return (
    <StyledProfile>
      <h1>Welcome to User Profile Page!</h1>
    </StyledProfile>
  );
}

export default Profile;
