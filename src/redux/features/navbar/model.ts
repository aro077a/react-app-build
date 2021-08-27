export interface NavbarState {
  navLinks: navLinksType[]
  loading: boolean
  errors: string
}

export type navLinksType = {
  id: number | string
  name: string
  link: string | null
}
