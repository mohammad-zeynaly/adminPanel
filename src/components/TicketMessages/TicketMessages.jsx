import ProgressBar from "../ProgressBar/ProgressBar";
import useFetchAndFilteredData from "../../hooks/useFetchAndFilteredData";

function TicketMessages() {
  const ticketMessagesItems = useFetchAndFilteredData("ticketMessagesItems");

  return (
    <>
      <section className="lg:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {ticketMessagesItems.map((ticketItem) => (
            <div key={ticketItem.id} className="bg-white rounded-lg p-4">
              <h5 className="font-iranYekanBold text-xl">
                {ticketItem.count}
                <span className="text-base"> {ticketItem.title} </span>
              </h5>
              <ProgressBar
                progressClass="mt-3"
                progressValue={ticketItem.progressValue}
                progressColorValue={ticketItem.progressValueColor}
              />

              <div className="flex items-center ">
                <span
                  className={`${ticketItem.growthColor} text-secondary text-2sm`}
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
