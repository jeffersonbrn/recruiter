export type ValidationErrorType = {
  name: string
  message?: string
  option?: {
    [key: string]: string | number
  }
}