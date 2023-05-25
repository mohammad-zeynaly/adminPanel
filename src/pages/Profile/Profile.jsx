import Topbar from "../../components/Topbar/Topbar";
import ProfileIntroduction from "../../components/ProfileIntroduction/ProfileIntroduction";
import ProfileInformation from "../../components/ProfileInformation/ProfileInformation";
import ProfileSkills from "../../components/ProfileSkills/ProfileSkills";
import Loader from "../../components/Loader/Loader";

function Profile() {

  return (
    <div>
      <Topbar BreadcrumbTitle="پروفایل" BreadcrumbLink="/profile" />
      <>
        <ProfileIntroduction />
        <ProfileInformation />
        <ProfileSkills />
        <Loader />
      </>
    </div>
  );
  
}

export default Profile;
