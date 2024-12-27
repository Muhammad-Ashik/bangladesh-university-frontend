export type DropdownSubItem = {
  name: string
  link: string
}

export type DropdownItem = {
  name: string
  link?: string
  subItems?: DropdownSubItem[] // Updated subItems to an array of objects containing name and link
}

export type DropdownProps = {
  label: string
  items: DropdownItem[]
}
