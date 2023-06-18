
function ChartBoxTemplate({ children }) {
  return (
    <section className="mt-5 sm:mt-8">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        {children}
      </div>
    </section>
  );
}

export default ChartBoxTemplate;
