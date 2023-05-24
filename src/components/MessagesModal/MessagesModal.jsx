import TemplateModal from "../TemplateModal/TemplateModal";
import { messageItems } from "../../data/allDatas";

function MessagesModal() {
  return (
    <TemplateModal modalTitle="پیام ها" modalCaption="1 پیام خوانده نشده">
      {messageItems.map((message) => (
        <li key={message.id} className="transition-all duration-150 hover:bg-[rgba(106,110,146,0.3)] flex items-center cursor-pointer p-3">
          <span className={`${message.avatarBg} text-white flex justify-center items-center w-8 h-8 rounded-full`}>
            {message.avatar}
          </span>
          <div className="pr-4">
            <h5 className="font-iranYekanBold text-2sm"> {message.name} </h5>
            <div className="flex items-center text-sm mt-1 text-[#a7abc3]">
              <h6> {message.time} </h6>
              <span className="pr-3"> متن ساختگی </span>
            </div>
          </div>
        </li>
      ))}
    </TemplateModal>
  );
}

export default MessagesModal;
