export type DropdownSubItem = {
  name: string
  link: string
}

export type DropdownItem = {
  name: string
  link?: string
  subItems?: DropdownSubItem[]
}

export type DropdownProps = {
  label: string
  items: DropdownItem[]
}
