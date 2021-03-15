export interface CoreForm2 {
  key: string,
  type: string,
  templateOptions?: {
    label?: string,
    options?: [
      {
        value?: string,
        label?: string
      }
    ]

  }
}
