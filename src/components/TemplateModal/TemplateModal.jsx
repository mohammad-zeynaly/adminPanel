
function TemplateModal({ modalTitle, modalCaption, children }) {
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className="w-full lg:w-72 mt-2 rounded-lg bg-white lg:absolute lg:left-0"
    >
      <div className="relative rounded-t-lg overflow-hidden flex flex-col items-center justify-center bg-[url('./assets/images/messageBg.png')] bg-cover bg-center h-24 after:bg-[rgba(0,0,0,0.5)] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0">
        <h5 className="text-white relative z-10">{modalTitle}</h5>
        <span className="mt-1 text-sm relative z-10 text-[rgba(255,255,255,0.7)]">
          {modalCaption}
        </span>
      </div>
      <div className="">
        <ul className="flex flex-col py-2">{children}</ul>
      </div>
    </div>
  );
}

export default TemplateModal;
