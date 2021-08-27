import { FocusEvent, LegacyRef, ReactNode } from 'react'

export interface ButtonProps {
  className?: string
  buttonText?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface ContentDescriptionProps {
  firstLine?: string | any
  secondLine?: string
  info?: string | any
  buttonClassName?: string
  buttonText?: string
}
export interface PopupProps {
  isOpen?: boolean
  children?: ReactNode
  isPopupOpen?: boolean
  className?: string
  closePopup?: () => void
  bgColor?:string
}

export interface VideoContainerProps {
  className?: string
  preload?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  ref?: LegacyRef<HTMLVideoElement> | any
  onClick?: (arg0?: any) => void
}

export interface SliderContainerProps {
  children?: any
  settings?: settingsType
  ref?: any
}

export type settingsType = {
  slidesPerRow?: number
  dots?: boolean
  infinite?: any
  centerMode?: boolean
  className?: string
  centerPadding?: string
  speed?: number
  slidesToShow?: any
  slidesToScroll?: number
  beforeChange?: () => void
  afterChange?: () => void
  nextArrow?: any
  prevArrow?: any
}

export interface InputProps {
  name?: string
  value?: string
  placeholder?: string
  type?: string
  className?: string
  checked?: boolean
  id?: string
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
      | any,
  ) => void
  onBlur?: (
    e: FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>,
  ) => void
  errorsMessage?: string | boolean | any
}

export interface TitleProps {
  title?: string
  className?: string
  titleClassName?: string
}
export interface SelectProps {
  children?: ReactNode
  className?: string
}
