import TemplateModal from "../TemplateModal/TemplateModal";
import { notificationItems } from "../../allDatas";

function NotificationsModal() {
  return (
    <TemplateModal modalTitle="اعلان ها" modalCaption="2 اعلان خوانده نشده">
      {notificationItems.map((notification) => (
        <li key={notification.id} className="p-3 flex items-center">
          <span className={`${notification.bgIcon} flex items-center justify-center p-[0.6rem] rounded-full`}>
            {notification.icon}
          </span>
          <div className="text-2sm pr-4">
            <h5> {notification.description} </h5>
            <h6 className="flex items-center pt-2 text-[#a7abc3]">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="pr-2"> {notification.clock} </span>
            </h6>
          </div>
        </li>
      ))}
    </TemplateModal>
  );
}

export default NotificationsModal;
