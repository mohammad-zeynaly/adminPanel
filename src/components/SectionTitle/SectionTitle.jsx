function sectionTitle({ sectionClass, children }) {
  return (
    <>
      <h4 className={`${sectionClass}`}> {children} </h4>
    </>
  );
}

export default sectionTitle;
