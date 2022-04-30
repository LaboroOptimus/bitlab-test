import React, { useEffect, useState } from "react";
import { Fees } from "../Fees/Fees";
import { Input } from "../Input/Input";
import { CurrencyType, InputType, LoadingStatus } from "../../types";
import { Description } from "../Description/Description";
import { Button } from "../Button/Button";
import { getQoutes } from "../../api";
import {
  mapQuotesResponse,
  mapQuotesRequest,
  validateInput,
} from "../../utils";

import classes from "./Calculator.module.scss";

export const Calculator = () => {
  const [loading, setLoading] = useState(LoadingStatus.None);
  const [input, setInput] = useState("100");
  const [output, setOutput] = useState("");
  const [fees, setFees] = useState({
    absolute: "0",
    fiat: "0",
  });
  const [inputCurrency, setInputCurrency] = useState(CurrencyType.USD);
  const [outputCurrency, setOutputCurrency] = useState(CurrencyType.USDC_EVMOS);
  const [touchedField, setTouchedField] = useState(InputType.Input);

  const handleChange = (type: InputType, value: string) => {
    if (!validateInput(value)) {
      return false;
    }
    if (type === InputType.Input) {
      setInput(value.length ? value : "1");
      setTouchedField(InputType.Input);
    }

    if (type === InputType.Output) {
      setInput(value.length ? value : "1");
      setTouchedField(InputType.Output);
    }
  };

  useEffect(() => {
    if (loading === LoadingStatus.Pending) {
      return;
    }
    const timeoutId = setTimeout(() => {
      const data = mapQuotesRequest(
        touchedField,
        input,
        output,
        inputCurrency,
        outputCurrency
      );
      setLoading(LoadingStatus.Pending);
      getQoutes(data)
        .then((res) => {
          if (res.status === 201) {
            const {
              absolute_internal_fee,
              fiat_blockchain_fee,
              source_amount,
              target_amount,
            } = mapQuotesResponse(res.data);
            setInput(source_amount);
            setOutput(target_amount);
            setFees({
              fiat: fiat_blockchain_fee,
              absolute: absolute_internal_fee,
            });
            setLoading(LoadingStatus.Success);
          } else {
            setLoading(LoadingStatus.Error);
          }
        })
        .catch((err) => {
          setLoading(LoadingStatus.Error);
        });
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [input, output]);

  return (
    <div className={classes.panel}>
      <h2>Select Your Amount</h2>
      <Input
        type={InputType.Input}
        currency={inputCurrency}
        handleChange={handleChange}
        value={input}
      />
      <Fees fiat={fees.fiat} absolute={fees.absolute} />
      <Input
        type={InputType.Output}
        currency={outputCurrency}
        handleChange={handleChange}
        value={output}
      />
      <Description />
      <Button />
    </div>
  );
};
