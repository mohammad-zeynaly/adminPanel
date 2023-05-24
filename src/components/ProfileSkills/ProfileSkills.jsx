import { userProfileSkillsData } from "../../data/allDatas";
import ProgressBar from "../ProgressBar/ProgressBar";



function ProfileSkills() {
  return (
    <div className="mt-5 sm:mt-8 mb-5 bg-white p-4 rounded-lg w-full ">
      <h4 className="text-lg text-center"> مهارت ها </h4>
      <ul className="flex flex-col my-4">
        {userProfileSkillsData.map((skillInfo) => (
          <li key={skillInfo.id} className="mb-4">
            <h5 className="text-sm mb-2">{skillInfo.skill}</h5>
            <div className="flex items-center">
              <ProgressBar
                progressColorValue={skillInfo.colorProgress}
                progressValue={skillInfo.progressSkill}
              />
              <h6 className="pr-3 text-sm">{skillInfo.progressSkill}%</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSkills;
