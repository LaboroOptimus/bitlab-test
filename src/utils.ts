import {
  CurrencyType,
  InputType,
  MapQuotesResponse,
  QuotesResponse,
} from "./types";
import { USDCIcon, USDIcon } from "./icons";

export const CurrencyIcon = {
  [CurrencyType.USD]: USDIcon,
  [CurrencyType.USDC_EVMOS]: USDCIcon,
};

export const CurrencyName = {
  [CurrencyType.USD]: CurrencyType.USD,
  [CurrencyType.USDC_EVMOS]: CurrencyType.USDC_EVMOS,
};

export const validateInput = (value: string) => {
  return parseFloat(value) ? true : false;
};

export const mapQuotesResponse = (data: QuotesResponse): MapQuotesResponse => {
  return {
    absolute_internal_fee: data.absolute_internal_fee,
    fiat_blockchain_fee: data.fiat_blockchain_fee,
    source_amount: data.source_amount,
    target_amount: data.target_amount,
  };
};

export const mapQuotesRequest = (
  touched: any,
  input: string,
  output: string,
  inputCurrency: string,
  outputCurrency: string
) => {
  if (touched === InputType.Input) {
    return {
      source_currency: inputCurrency,
      target_currency: outputCurrency,
      source_amount: input,
    };
  } else {
    return {
      source_currency: inputCurrency,
      target_currency: outputCurrency,
      target_amount: output,
    };
  }
};
