export interface FaqState {
    faqs: faqsType[]
    loading: boolean
    errors: string
  }
  
  export type faqsType = {
    id: number | string
    question: string
    answer: string | null
    order: string | null
  }