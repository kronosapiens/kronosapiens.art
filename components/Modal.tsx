"use client";

import {
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";
import styles from "./Modal.module.css";

/** How far each arrow key steps through the page's pictures. */
const steps: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1 };

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
  // An arrow key opens the picture before or after this one on the page,
  // going round from the last to the first.
  const step = (event: KeyboardEvent<HTMLDialogElement>) => {
    const by = steps[event.key];
    if (!by) return;
    const all = [...document.querySelectorAll("dialog")];
    const here = all.indexOf(event.currentTarget);
    close();
    all[(here + by + all.length) % all.length].showModal();
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
        onKeyDown={step}
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
