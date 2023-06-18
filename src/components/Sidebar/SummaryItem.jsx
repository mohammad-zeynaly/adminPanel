import convertToSvgHtml from "../../functions/convertToSvgHtml";

function SummaryItem({ icon, bgClass, title, caption }) {
  return (
    <li className="mt-2 flex items-center hover:bg-[#f5f5f5] p-2 rounded-lg cursor-pointer">
      <div
        className={`${bgClass} flex justify-center items-center w-11 h-11 rounded-lg`}
        dangerouslySetInnerHTML={convertToSvgHtml(icon)}
      ></div>
      <div className="mr-3">
        <h4 className="">{title}</h4>
        <h5 className="mt-1 text-lg sm:text-xl font-iranYekanBold">
          {caption}
        </h5>
      </div>
    </li>
  );
}

export default SummaryItem;
