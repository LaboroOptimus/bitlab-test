import React from "react";
import classes from "./Input.module.scss";
import { ArrowIcon } from "../../icons";
import { CurrencyType, InputType } from "../../types";
import { CurrencyIcon, CurrencyName } from "../../utils";

interface Props {
  type: InputType;
  currency: CurrencyType;
  handleChange: (type: InputType, value: string) => void;
  value: string;
}

export const Input: React.FC<Props> = ({
  type,
  currency,
  value,
  handleChange,
}) => {
  return (
    <div className={classes.container}>
      <span>{type === InputType.Input ? "You pay" : "You Receive"}</span>
      <div className={classes.inputContainer}>
        <input
          onChange={(e) => handleChange(type, e.target.value)}
          value={value}
          step="any"
          pattern="^[1-9]\d*(,\d+)?$"
        />
        <Currency currency={currency} />
      </div>
    </div>
  );
};

const Currency: React.FC<{ currency: CurrencyType }> = ({ currency }) => {
  const Icon = CurrencyIcon[currency];
  return (
    <div className={classes.currency}>
      <span>{CurrencyName[currency]}</span>
      <Icon />
      <ArrowIcon />
    </div>
  );
};
