import styles from "./Counter.module.css";

const Counter = (props) => {
  const { increment, decrement, reset, count } = props;
  return (
    <div className={styles.couterContainer}>
      <h2 className={styles.countShow}>Count {count}</h2>
      <h3 className={styles.heading3}>
        Number id:{" "}
        {count % 2 === 0 ? (
          <span style={{ color: "green" }}>Even</span>
        ) : (
          <span style={{ color: "brown" }}>Odd</span>
        )}
      </h3>
      <div className={styles.btnContainer}>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
