export interface FooterState {
    footerCompany: footerType[] | null;
    footerContact: footerType[] | null;  
    loading: boolean
    errors: string
  } 
  
  export type footerType = {
    id: number | string
    title: string
    description: string | null    
  }