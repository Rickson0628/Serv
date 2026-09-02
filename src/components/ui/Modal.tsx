"use client"

import { HTMLAttributes, ReactNode } from "react";

interface ModalProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode,
  isOpen: boolean

}

const Modal = ({ children, isOpen, ...props}: ModalProps) => {
  return (
    isOpen ? 
    <div {...props}>
      {children}
    </div> : null
  );
};

export default Modal;