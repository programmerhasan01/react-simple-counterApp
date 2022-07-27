import styles from "./randomCard.module.css";
const RandomCard = ({ cardValues, setPickValue }) => {
  return (
    <div className={styles.randomCard}>
      <h2 className={styles.heading3}>Showing Random Card</h2>
      <div className={styles.mapValues}>
        {cardValues.map((value, index) => (
          <div
            className={styles.singleValue}
            key={index}
            onClick={() => setPickValue(value)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomCard;
