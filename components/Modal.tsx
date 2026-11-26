"use client";

import {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";
import styles from "./Modal.module.css";

type Props = {
  /** The look of the button that opens the modal, and what it shows. */
  className: string;
  /** The picture's proportions, which also size the modal. */
  style: CSSProperties;
  trigger: ReactNode;
  /** The picture, which the modal shows large above its caption. */
  children: ReactNode;
  caption: ReactNode;
};

/** A button that opens a picture in a modal, with its caption beneath. */
export function Modal({ className, style, trigger, children, caption }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => dialog.current?.close();
  // A click on the backdrop lands on the dialog itself, not on what it holds.
  const closeOnBackdrop = (event: MouseEvent) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => dialog.current?.showModal()}
      >
        {trigger}
      </button>
      <dialog
        ref={dialog}
        className={styles.modal}
        style={style}
        onClick={closeOnBackdrop}
      >
        <div className={styles.panel}>
          <button type="button" className={styles.close} onClick={close}>
            Close
          </button>
          {children}
          <div className={styles.caption}>{caption}</div>
        </div>
      </dialog>
    </>
  );
}
