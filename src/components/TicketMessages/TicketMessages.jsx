import ProgressBar from "../ProgressBar/ProgressBar";
import { ticketMessagesItems } from "../../data/allDatas";

function TicketMessages() {
  return (
    <>
      <section className="lg:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {ticketMessagesItems.map((ticketItem) => (
            <div key={ticketItem.id} className="bg-white rounded-lg p-4">
              <h5 className="font-iranYekanBold text-xl">
                {ticketItem.ticketCount}
                <span className="text-base"> {ticketItem.ticketTitle} </span>
              </h5>
              <ProgressBar
                progressClass="mt-3"
                progressValue={ticketItem.progressPercent}
                progressColorValue={ticketItem.progressColor}
              />

              <div className="flex items-center ">
                <span
                  className={`${ticketItem.growthColor } text-secondary text-2sm`}
                >
                  {ticketItem.growth}%
                </span>
                <span className="pr-2 text-sm">از دیروز </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TicketMessages;
