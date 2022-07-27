const IsOddEven = ({ pickValue }) => {
  return (
    <h2 style={{ textAlign: "center" }}>
      Selected number {pickValue} is (
      {pickValue && pickValue % 2 === 0 ? "EVEN" : "ODD"})
    </h2>
  );
};

export default IsOddEven;
