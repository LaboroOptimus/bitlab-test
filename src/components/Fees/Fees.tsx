import React from "react";
import { CircleIcon } from "../../icons";
import classes from "./Fees.module.scss";

interface Props {
  absolute: string;
  fiat: string;
}

export const Fees: React.FC<Props> = ({ fiat, absolute }) => {
  return (
    <div className={classes.container}>
      <h3>
        <CircleIcon />
        Fees
      </h3>
      <div className={classes.fees}>
        <div className={classes.feesItem}>
          <h4>Network Fee</h4>
          <p>{fiat}$</p>
        </div>
        <span className={classes.plus}>+</span>
        <div className={classes.feesItem}>
          <h4>C14 Fee</h4>
          <p>{absolute}$</p>
        </div>
        <span className={classes.equal}>=</span>
        <div className={classes.feesItem}>
          <h4>Total Fee</h4>
          <p>{Math.ceil((Number(fiat) + Number(absolute)) * 100) / 100}$</p>
        </div>
      </div>
    </div>
  );
};
