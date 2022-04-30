import React from "react";
import { ClockIcon } from "../../icons/ClockIcon";
import { QRIcon } from "../../icons/QRIcon";
import classes from "./Description.module.scss";

export const Description = () => {
  return (
    <div className={classes.container}>
      <div className={classes.destination}>
        <QRIcon />
        <div>
          <h4>Destination Address</h4>
          <p>msWZQGyzYiCL3VPw1ajHkXcF9nRo9V2vsc</p>
        </div>
      </div>
      <div className={classes.time}>
        <ClockIcon />
        <div>
          <h4>Average Processing Time</h4>
          <p>4 Minutes</p>
        </div>
      </div>
    </div>
  );
};
