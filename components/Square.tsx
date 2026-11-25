import { Picture } from "@/components/Picture";
import styles from "./Square.module.css";

/** A picture, whole and centered in an outlined square. */
export function Square(props: React.ComponentProps<typeof Picture>) {
  return (
    <div className={styles.square}>
      <Picture {...props} />
    </div>
  );
}
