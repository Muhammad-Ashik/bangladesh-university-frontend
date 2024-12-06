export type DropdownItem = {
  name: string
  link?: string
  subItems?: string[]
}

export type DropdownProps = {
  label: string
  items: DropdownItem[]
}
