import useFilteredData from "../../hooks/useFilteredData";

function ProfileInformation() {

  const userProfileInformation = useFilteredData("userProfileInformation")

  return (
    <section className="mt-5 sm:mt-8 bg-white p-4 rounded-lg w-full ">
      <h4 className="text-lg text-center"> اطلاعات </h4>
      <ul className="flex flex-col my-4 sm:px-6">
        {userProfileInformation.map((profileInfo) => (
          <li
            key={profileInfo.id}
            className="flex items-center justify-between my-2"
          >
            <h5 className="text-[#a7abc3] text-sm sm:text-base">
              {profileInfo.informationKey}:
            </h5>
            <h6 className="text-center text-sm sm:text-base">
              {profileInfo.informationValue}
            </h6>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProfileInformation;
