import { useEffect, useState } from "react";
import styles from "./countdown.module.css";

const Countdown = () => {
  const [numberOfDays, setNumberOfDays] = useState<number>(0);
  const [numberOfHours, setNumberOfHours] = useState<number>(0);
  const [numberOfMinutes, setNumberOfMinutes] = useState<number>(0);
  const [numberOfSeconds, setNumberOfSeconds] = useState<number>(0);

  const now = new Date().getTime();

  //this will create date in the future (targetDate); arbitraryNumber is number of miliseconds based on arbitrary choice of days (here 8 days was used but it could be any number): days * hours * minutes * seconds * 1000
  //in real life application arbitrary number would users choice or input

  const arbitraryNumber = 8 * 24 * 60 * 60 * 1000;
  const targetDate = now + arbitraryNumber;

  useEffect(() => {
    let x = setInterval(function () {
      const now2 = new Date().getTime();

      const distance = targetDate - now2;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setNumberOfDays(days);
      setNumberOfHours(hours);
      setNumberOfMinutes(minutes);
      setNumberOfSeconds(seconds);
    }, 1000);
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.count_item}>
        <div className={styles.count_rectangle}>
          <div
            className={`${styles.count_circle} ${styles.count_circle_left}`}
          ></div>
          <div
            className={`${styles.count_circle} ${styles.count_circle_right}`}
          ></div>
          <p className={styles.count_number} id="days">
            {numberOfDays.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </p>
        </div>

        <p className={styles.count_name}>days</p>
      </div>
      <div className={styles.count_item}>
        <div className={styles.count_rectangle}>
          <div
            className={`${styles.count_circle} ${styles.count_circle_left}`}
          ></div>
          <div
            className={`${styles.count_circle} ${styles.count_circle_right}`}
          ></div>
          <p className={styles.count_number} id="hours">
            {numberOfHours.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </p>
        </div>
        <p className={styles.count_name}>hours</p>
      </div>
      <div className={styles.count_item}>
        <div className={styles.count_rectangle}>
          <div
            className={`${styles.count_circle} ${styles.count_circle_left}`}
          ></div>
          <div
            className={`${styles.count_circle} ${styles.count_circle_right}`}
          ></div>
          <p className={styles.count_number} id="minutes">
            {numberOfMinutes.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </p>
        </div>
        <p className={styles.count_name}>minutes</p>
      </div>
      <div className={styles.count_item}>
        <div className={styles.count_rectangle}>
          <div
            className={`${styles.count_circle} ${styles.count_circle_left}`}
          ></div>
          <div
            className={`${styles.count_circle} ${styles.count_circle_right}`}
          ></div>
          <p className={styles.count_number} id="seconds">
            {numberOfSeconds.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </p>
        </div>
        <p className={styles.count_name}>seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
