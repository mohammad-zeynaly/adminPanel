import useFetchAndFilteredData from "../../hooks/useFetchAndFilteredData";
import ProgressBar from "../ProgressBar/ProgressBar";

function ProfileSkills() {

  const userProfileSkillsData = useFetchAndFilteredData("userProfileSkillsData")

  return (
    <div className="mt-5 sm:mt-8 mb-5 bg-white p-4 rounded-lg w-full ">
      <h4 className="text-lg text-center"> مهارت ها </h4>
      <ul className="flex flex-col my-4">
        {userProfileSkillsData.map((skillInfo) => (
          <li key={skillInfo.id} className="mb-4">
            <h5 className="text-sm mb-2">{skillInfo.title}</h5>
            <div className="flex items-center">
              <ProgressBar
                progressColorValue={skillInfo.progressValueColor}
                progressValue={skillInfo.progressValue}
              />
              <h6 className="pr-3 text-sm">{skillInfo.progressValue}%</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSkills;
