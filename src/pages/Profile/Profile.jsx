import Topbar from "../../components/Topbar/Topbar";
import ProfileIntroduction from "../../components/ProfileIntroduction/ProfileIntroduction"
import ProfileInformation from "../../components/ProfileInformation/ProfileInformation"
import ProfileSkills from "../../components/ProfileSkills/ProfileSkills"


function Profile() {
  return (
    <div>
      <Topbar BreadcrumbTitle="پروفایل" BreadcrumbLink="/profile" />
       <>
       <ProfileIntroduction />
       {/* <section className="mt-5 sm:mt-8 flex flex-col xl:flex-row items-center"> */}
       <ProfileInformation />
       <ProfileSkills />
       {/* </section> */}
       </>
    </div>
  );
}

export default Profile;
