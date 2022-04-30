export enum InputType {
  Input = "Input",
  Output = "Output",
}

export interface Quotes {
  source_currency: string;
  target_currency: string;
  source_amount?: string;
  target_amount?: string;
}

export enum CurrencyType {
  USD = "USD",
  USDC_EVMOS = "USDC_EVMOS",
}

export interface QuotesResponse {
  absolute_internal_fee: string;
  expires_at: string;
  fiat_blockchain_fee: string;
  id: string;
  internal_fee_percent: string;
  source_amount: string;
  source_currency: string;
  target_amount: string;
  target_currency: string;
}

export interface MapQuotesResponse
  extends Omit<
    QuotesResponse,
    | "id"
    | "source_currency"
    | "target_currency"
    | "internal_fee_percent"
    | "expires_at"
  > {}

export enum LoadingStatus {
  None = "None",
  Pending = "Pending",
  Success = "Success",
  Error = "Error",
}
