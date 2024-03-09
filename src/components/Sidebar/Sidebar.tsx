import { Filter } from "./Filter/Filter";
import styles from "./Sidebar.module.scss";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  return (
    <div className={styles.wrapper}>
      <Filter/>
    </div>
  );
}
