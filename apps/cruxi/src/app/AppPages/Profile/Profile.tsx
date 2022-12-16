// react
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// interfaces
import { ProfileProps } from './ProfileProps.interface';
// styles
import {
  StyledProfile,
  StyledWorkoutRow,
  StyleWorkoutSection,
} from './StyledProfile';
// components
import InputGroup from '../../Components/Input/Input';
import Form from '../../Components/Form/Form';
import Button from '../../Components/Button/Button';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { useAuth } from '../../Context/AuthContext';
// firebase
import {
  writeBoulderingProfile,
  writeRopeProfile,
  readBoulderingProfileDataFromDB,
  readRopeProfileDataFromDB,
} from '../../Firebase';
// config data
import {
  fontGradeDropdownData,
  frenchSportGradeDropdownData,
  vGradeDropdownData,
  ydsGradeDropdownData,
  gradingSystemDropdownData,
  ropeGradingSystemDropdownData,
} from './ClimbingGrades';



const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  // api state
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // bouldering
  const [boulderGradeSystem, setBoulderGradeSystem] = useState('');
  const [boulderHardestRedpoint, setBoulderHardestRedpoint] = useState([]);
  const [boulderConsistentRedpoint, setBoulderConsistentRedpoint] = useState([]);
  const [boulderEasyRedpoint, setBoulderEasyRedpoint] = useState([]);
  const [boulderHardestOnsight, setBoulderHardestOnsight] = useState('');
  const [boulderConsistentOnsight, setBoulderConsistentOnsight] = useState('');
  const [boulderEasyOnsight, setBoulderEasyOnsight] = useState('');
  const [boulderShortTermProject, setBoulderShortTermProject] = useState('');
  const [boulderLongTermProject, setBoulderLongTermProject] = useState('');
  // ropes
  const [ropeGradeSystem, setRopeGradeSystem] = useState('');
  const [ropeHardestRedpoint, setRopeHardestRedpoint] = useState([]);
  const [ropeConsistentRedpoint, setRopeConsistentRedpoint] = useState([]);
  const [ropeEasyRedpoint, setRopeEasyRedpoint] = useState([]);
  const [ropeHardestOnsight, setRopeHardestOnsight] = useState('');
  const [ropeConsistentOnsight, setRopeConsistentOnsight] = useState('');
  const [ropeEasyOnsight, setRopeEasyOnsight] = useState('');
  const [ropeShortTermProject, setRopeShortTermProject] = useState('');
  const [ropeLongTermProject, setRopeLongTermProject] = useState('');
  // profile
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [profileURL, setProfileURL] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [deleteAccount, setDeleteAccount] = useState('');
  // climbing profiles
  const [boulderProfile, setBoulderingProfile] = useState({});
  const [ropeProfile, setRopeProfile] = useState({});
  // grade dropdowns for boulder and rope
  const [boulderGradeDropdown, setBoulderGradeDropdown] = useState<any>([]);
  const [ropeGradeDropdown, setRopeGradeDropdown] = useState<any>([]);

  const { currentUser, updatePassword, updateEmail, updateDisplayName, updatePhoneNumber } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    readBoulderingProfileDataFromDB(
      setBoulderingProfile,
      currentUser,
      setBoulderGradeHandler,
      setBoulderGradesFromServerHandler
    );
    readRopeProfileDataFromDB(
      setRopeProfile,
      currentUser,
      setRopeGradeHandler,
      setRopeGradesFromServerHandler
    );
  }, []);
  const setBoulderGradesFromServerHandler = (boulderingDataFromServer: any) => {
    setBoulderHardestRedpoint(boulderingDataFromServer.hardestRedpoint);
    setBoulderConsistentRedpoint(boulderingDataFromServer.consistentRedpoint);
    setBoulderEasyRedpoint(boulderingDataFromServer.easyRedpoint);
    setBoulderHardestOnsight(boulderingDataFromServer.hardestOnsight);
    setBoulderConsistentOnsight(boulderingDataFromServer.consistentOnsight);
    setBoulderEasyOnsight(boulderingDataFromServer.easyOnsight);
    setBoulderShortTermProject(boulderingDataFromServer.shortTermProject);
    setBoulderLongTermProject(boulderingDataFromServer.longTermProject);
  };
  const setRopeGradesFromServerHandler = (ropeDataFromServer: any) => {
    setRopeHardestRedpoint(ropeDataFromServer.ropeHardestRedpoint);
    setRopeConsistentRedpoint(ropeDataFromServer.ropeConsistentRedpoint);
    setRopeEasyRedpoint(ropeDataFromServer.ropeEasyRedpoint);
    setRopeHardestOnsight(ropeDataFromServer.ropeHardestOnsight);
    setRopeConsistentOnsight(ropeDataFromServer.ropeConsistentOnsight);
    setRopeEasyOnsight(ropeDataFromServer.ropeEasyOnsight);
    setRopeShortTermProject(ropeDataFromServer.ropeShortTermProject);
    setRopeLongTermProject(ropeDataFromServer.ropeLongTermProject);
  };
  // handlers for local state
  const setBoulderGradeHandler = (boulderGradeSystem: string) => {
    setBoulderGradeSystem(boulderGradeSystem);
    if (boulderGradeSystem === 'V-Scale') setBoulderGradeDropdown(vGradeDropdownData);
    if (boulderGradeSystem === 'Font') setBoulderGradeDropdown(fontGradeDropdownData);
  };
  const setRopeGradeHandler = (ropeGradeSystem: string) => {
    setRopeGradeSystem(ropeGradeSystem);
    if (ropeGradeSystem === 'YDS') setRopeGradeDropdown(ydsGradeDropdownData);
    if (ropeGradeSystem === 'French') setRopeGradeDropdown(frenchSportGradeDropdownData);
  };

  // handlers for firebase changes
  const changePhoneNumberHandler = (e: any) => {
    e.preventDefault();
    if (phoneNumber !== '' && phoneNumber.length === 10) return setError('Phone number is not valid');
    promiseFunction(updatePhoneNumber, phoneNumber, 'Failed to update phone number');
  }
  const changeDisplayNameHandler = (e: any) => {
    e.preventDefault();
    if (password !== passwordConfirm) return setError('Passwords do not match');
    promiseFunction(updateDisplayName, username, 'Failed to update display name');
  }
  const changeEmailHandler = (e: any) => {
    e.preventDefault();
    promiseFunction(updateEmail, email, 'Failed to update email');
  }
  const changePasswordHandler = (e: any) => {
    e.preventDefault();
    if (password !== passwordConfirm) return setError('Passwords do not match');
    promiseFunction(updatePassword, password, 'Failed to update password');
  };
  const deleteAccountHandler = (e: any) => {
    e.preventDefault();
    console.log('delete account');
  }
  const promiseFunction = (profileStateFunc: any, profileState: any, errorString: string) => {
    const promises = [];
    setLoading(true);
    setError('');
    promises.push(profileStateFunc(profileState));
    Promise.all(promises)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setError(errorString);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const saveBoulderingProfileHandler = (e: any) => {
    e.preventDefault();
    const boulderProfile = {
      timestamp: new Date(),
      defaultGradingSys: boulderGradeSystem,
      hardestRedpoint: boulderHardestRedpoint,
      consistentRedpoint: boulderConsistentRedpoint,
      easyRedpoint: boulderEasyRedpoint,
      hardestOnsight: boulderHardestOnsight,
      consistentOnsight: boulderConsistentOnsight,
      easyOnsight: boulderEasyOnsight,
      shortTermProject: boulderShortTermProject,
      longTermProject: boulderLongTermProject,
    };
    setBoulderingProfile(boulderProfile);
    writeBoulderingProfile({
      userId: currentUser.uid,
      ...boulderProfile,
    });
    try {
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const saveRopesProfileHandler = (e: any) => {
    e.preventDefault();
    const ropeProfile = {
      timestamp: new Date(),
      ropeDefaultGradingSys: ropeGradeSystem,
      ropeHardestRedpoint: ropeHardestRedpoint,
      ropeConsistentRedpoint: ropeConsistentRedpoint,
      ropeEasyRedpoint: ropeEasyRedpoint,
      ropeHardestOnsight: ropeHardestOnsight,
      ropeConsistentOnsight: ropeConsistentOnsight,
      ropeEasyOnsight: ropeEasyOnsight,
      ropeShortTermProject: ropeShortTermProject,
      ropeLongTermProject: ropeLongTermProject,
    };
    setRopeProfile(ropeProfile);
    writeRopeProfile(currentUser.uid, {
      userId: currentUser.uid,
      ...ropeProfile,
    });
    try {
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledProfile>
      <h1>Profile</h1>
      <h3>Bouldering Profile</h3>
      <StyleWorkoutSection>
        <Form onSubmit={saveBoulderingProfileHandler}>
          <>
            <StyledWorkoutRow>
              <Dropdown
                htmlFor="defaultGradingSys"
                labelName="Default Grading System:"
                selectName="gradingSystem"
                selectId="grading-system-select"
                onChangeHandler={setBoulderGradeHandler}
                options={gradingSystemDropdownData}
                value={boulderGradeSystem}
              />
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="hardRepoint"
                labelName="Hardest Redpoint:"
                selectName="hardRedpointGradeSelect"
                selectId="hardRedpointGrade-select"
                onChangeHandler={setBoulderHardestRedpoint}
                options={boulderGradeDropdown}
                value={boulderHardestRedpoint}
              />
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="consistentRedpoint"
                labelName="Consistent Redpoint:"
                selectName="consistentRedpointGradeSelect"
                selectId="consistentRedpointGrade-select"
                onChangeHandler={setBoulderConsistentRedpoint}
                options={boulderGradeDropdown}
                value={boulderConsistentRedpoint}
              />
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="easyRedpoint"
                labelName="Easy Redpoint:"
                selectName="easyRedpointGradeSelect"
                selectId="easyRedpointGrade-select"
                onChangeHandler={setBoulderEasyRedpoint}
                options={boulderGradeDropdown}
                value={boulderEasyRedpoint}
              />
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="hardOnsight"
                labelName="Hardest Onsight:"
                selectName="hardOnsightGradeSelect"
                selectId="hardOnsightGrade-select"
                onChangeHandler={setBoulderHardestOnsight}
                options={boulderGradeDropdown}
                value={boulderHardestOnsight}
              />
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="consistentOnsight"
                labelName="Consistent Onsight:"
                selectName="consistentOnsightGradeSelect"
                selectId="hardRedpointGrade-select"
                onChangeHandler={setBoulderConsistentOnsight}
                options={boulderGradeDropdown}
                value={boulderConsistentOnsight}
              />
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="easyOnsight"
                labelName="Easy Onsight:"
                selectName="easyOnsightGradeSelect"
                selectId="easyOnsightGrade-select"
                onChangeHandler={setBoulderEasyOnsight}
                options={boulderGradeDropdown}
                value={boulderEasyOnsight}
              />
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="shortTermProj"
                labelName="Short-Term Project Grade:"
                selectName="shortTermProjGradeSelect"
                selectId="shortTermProjGrade-select"
                onChangeHandler={setBoulderShortTermProject}
                options={boulderGradeDropdown}
                value={boulderShortTermProject}
              />
              <Dropdown
                disable={(boulderGradeSystem?.length < 1)}
                htmlFor="longTermProj"
                labelName="Long-Term Project Grade:"
                selectName="longTermProjGradeSelect"
                selectId="longTermProjGrade-select"
                onChangeHandler={setBoulderLongTermProject}
                options={boulderGradeDropdown}
                value={boulderLongTermProject}
              />
            </StyledWorkoutRow>
            <Button buttonName="Save Changes" />
          </>
        </Form>
      </StyleWorkoutSection>
      <h3>Rope Profile</h3>
      <StyleWorkoutSection>
        <Form onSubmit={saveRopesProfileHandler}>
          <>
            <StyledWorkoutRow>
              <Dropdown
                htmlFor="defaultGradingSys"
                labelName="Default Grading System:"
                selectName="gradingSystem"
                selectId="grading-system-select"
                onChangeHandler={setRopeGradeHandler}
                options={ropeGradingSystemDropdownData}
                value={ropeGradeSystem}
              />
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Dropdown
                disable={(ropeGradeSystem?.length < 1)}
                htmlFor="hardRepoint"
                labelName="Hardest Redpoint:"
                selectName="hardRedpointGradeSelect"
                selectId="hardRedpointGrade-select"
                onChangeHandler={setRopeHardestRedpoint}
                options={ropeGradeDropdown}
                value={ropeHardestRedpoint}
              />
              <Dropdown
              disable={(ropeGradeSystem?.length < 1)}
                htmlFor="consistentRedpoint"
                labelName="Consistent Redpoint:"
                selectName="consistentRedpointGradeSelect"
                selectId="consistentRedpointGrade-select"
                onChangeHandler={setRopeConsistentRedpoint}
                options={ropeGradeDropdown}
                value={ropeConsistentRedpoint}
              />
              <Dropdown
                disable={(ropeGradeSystem?.length < 1)}
                htmlFor="easyRedpoint"
                labelName="Easy Redpoint:"
                selectName="easyRedpointGradeSelect"
                selectId="easyRedpointGrade-select"
                onChangeHandler={setRopeEasyRedpoint}
                options={ropeGradeDropdown}
                value={ropeEasyRedpoint}
              />
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Dropdown
                disable={(ropeGradeSystem?.length < 1)}
                htmlFor="hardOnsight"
                labelName="Hardest Onsight:"
                selectName="hardOnsightGradeSelect"
                selectId="hardOnsightGrade-select"
                onChangeHandler={setRopeHardestOnsight}
                options={ropeGradeDropdown}
                value={ropeHardestOnsight}
              />
              <Dropdown
                disable={(ropeGradeSystem?.length < 1)}
                htmlFor="consistentOnsight"
                labelName="Consistent Onsight:"
                selectName="consistentOnsightGradeSelect"
                selectId="hardRedpointGrade-select"
                onChangeHandler={setRopeConsistentOnsight}
                options={ropeGradeDropdown}
                value={ropeConsistentOnsight}
              />
              <Dropdown
                disable={(ropeGradeSystem?.length < 1)}
                htmlFor="easyOnsight"
                labelName="Easy Onsight:"
                selectName="easyOnsightGradeSelect"
                selectId="easyOnsightGrade-select"
                onChangeHandler={setRopeEasyOnsight}
                options={ropeGradeDropdown}
                value={ropeEasyOnsight}
              />
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Dropdown
                disable={(ropeGradeSystem?.length < 1)}
                htmlFor="shortTermProj"
                labelName="Short-Term Project Grade:"
                selectName="shortTermProjGradeSelect"
                selectId="shortTermProjGrade-select"
                onChangeHandler={setRopeShortTermProject}
                options={ropeGradeDropdown}
                value={ropeShortTermProject}
              />
              <Dropdown
                disable={(ropeGradeSystem?.length < 1)}
                htmlFor="longTermProj"
                labelName="Long-Term Project Grade:"
                selectName="longTermProjGradeSelect"
                selectId="longTermProjGrade-select"
                onChangeHandler={setRopeLongTermProject}
                options={ropeGradeDropdown}
                value={ropeLongTermProject}
              />
            </StyledWorkoutRow>
            <Button buttonName="Save Changes" />
          </>
        </Form>
      </StyleWorkoutSection>
      <h3>User Profile</h3>
      {error && <div>{error}</div>}
      <StyleWorkoutSection>
        <StyledWorkoutRow>
          <Form onSubmit={changeEmailHandler}>
            <InputGroup
              value={currentUser.email}
              htmlFor="email"
              labelName="Email:"
              type="text"
              onChangeHandler={setEmail}
            />
            <Button buttonName="Change Email" />
          </Form>
        </StyledWorkoutRow>
            <StyledWorkoutRow>
            <Form onSubmit={changePhoneNumberHandler}>
              <InputGroup
                htmlFor="userPhoneNumber"
                labelName="Phone Number:"
                type="text"
                value={currentUser.phoneNumber || 'Add Phone Number...'}
                onChangeHandler={setPhoneNumber}
              />
              <Button buttonName="Change Phone Number" />
            </Form>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
            <Form onSubmit={changeDisplayNameHandler}>
              <InputGroup
                htmlFor="userDisplayName"
                labelName="Username"
                type="text"
                value={currentUser.displayName || 'Choose display name...'}
                onChangeHandler={setUsername}
              />
              <Button buttonName="Change Display Name" />
            </Form>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
            <Form onSubmit={changeEmailHandler}>
              <InputGroup
                htmlFor="userPhotoURL"
                labelName="Profile Picture"
                type="file"
                onChangeHandler={setProfileURL}
              />
              <span>{currentUser.profileURL}</span>
              <Button buttonName="Change Profile Picture" />
            </Form>
            </StyledWorkoutRow>
      </StyleWorkoutSection>
      <h3>Change Password</h3>
      <StyleWorkoutSection>
        <StyledWorkoutRow>
          <Form onSubmit={changePasswordHandler}>
            <InputGroup
              htmlFor="password"
              labelName="Password:"
              type="text"
              onChangeHandler={setPassword}
            />
            <InputGroup
              htmlFor="passwordConfirm"
              labelName="Confirm Password:"
              type="text"
              onChangeHandler={setPasswordConfirm}
            />
            <Button buttonName="Change Password" />
          </Form>
        </StyledWorkoutRow>
      </StyleWorkoutSection>
      <h3>Delete Account</h3>
      <StyleWorkoutSection>
        <StyledWorkoutRow>
          <Form onSubmit={deleteAccountHandler}>
            <InputGroup
              htmlFor="deleteAccount"
              labelName="Delete Account:"
              type="text"
              onChangeHandler={setDeleteAccount}
            />
            <Button buttonName="Delete Account" />
          </Form>
        </StyledWorkoutRow>
      </StyleWorkoutSection>
    </StyledProfile>
  );
};

export default Profile;
