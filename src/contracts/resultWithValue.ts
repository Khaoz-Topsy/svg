export interface Result {
  isSuccess: boolean;
  errorMessage: string;
  errorCode?: number;
}

export interface ResultWithValue<T> extends Result {
  value: T;
}
