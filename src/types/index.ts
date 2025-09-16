export type IOption<V = number> = {
  value: V
  label: string
}

export type OptionsItem = {
  title: string
  isMultiple: boolean
  items: Array<IOption>
}
