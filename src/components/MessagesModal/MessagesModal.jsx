import { messageItems } from "../../allDatas"

function MessagesModal() {
  return (
    <div className="w-full lg:w-72 mt-2 rounded-lg bg-white ">
      <div className="relative rounded-t-lg overflow-hidden flex flex-col items-center justify-center bg-[url('./assets/images/messageBg.png')] bg-cover bg-center h-24 after:bg-[rgba(0,0,0,0.5)] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
        <h5 className="text-white relative z-10">پیام ها</h5>
        <span className="mt-1 text-sm relative z-10 text-[rgba(255,255,255,0.7)]">
          1 پیام خوانده نشده
        </span>
      </div>
      <div className="p-3">
        <ul className="flex flex-col">
          {
            messageItems.map(message => (

              <li key={message.id} className="flex items-center mb-4">
                <span className={`${message.avatarBg} text-white px-4 py-2 rounded-full`}> {message.avatar} </span>
                <div className="pr-4">
                  <h5 className="font-iranYekanBold text-2sm"> {message.name} </h5>
                  <div className="flex items-center text-sm mt-1 text-[#a7abc3]">
                    <h6> {message.time} </h6>
                    <span className="pr-3"> متن ساختگی </span>
                  </div>
                </div>
              </li>
              
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default MessagesModal;
