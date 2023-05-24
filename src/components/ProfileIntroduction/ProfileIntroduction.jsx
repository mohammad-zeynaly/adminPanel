import useNumberPersian from "../../hooks/useNumberPersian";

function ProfileIntroduction() {
  return (
    <section className="mt-5 sm:mt-8 bg-[url('./assets/images/profile-introduction-bg.png')] bg-cover bg-center rounded-lg overflow-hidden relative">
      <div className="flex flex-col flex-wrap lg:flex-row justify-between items-center bg-[rgba(0,0,0,0.5)] px-4 sm:px-5 py-8">
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="./assets/images/avatar.jpg"
            alt="عکس ادمین"
          />
          <div className="flex flex-col mr-3 text-white">
            <h5 className="text-lg font-iranYekanBold">محمد زینالی</h5>
            <h6 className="mt-2 text-2sm"> توسعه دهنده Front-end </h6>
          </div>
        </div>
        <div className="flex items-center mt-5 lg:mt-0">
          <div className="text-secondary text-center">
            <h6 className="text-xl font-iranYekanBold">418</h6>
            <span className="text-2sm">مطلب</span>
          </div>
          <div className="text-[#ffb822] mr-5 text-center">
            <h6 className="text-xl font-iranYekanBold">
              {useNumberPersian(1596)}
            </h6>
            <span className="text-2sm"> دنبال کننده </span>
          </div>
          <div className="text-[#55a6eb] mr-5 text-center">
            <h6 className="text-xl font-iranYekanBold">
              {useNumberPersian(7896)}
            </h6>
            <span className="text-2sm"> لایک </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileIntroduction;
