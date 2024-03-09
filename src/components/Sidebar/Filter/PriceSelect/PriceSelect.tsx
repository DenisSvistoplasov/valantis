import { ChangeEvent } from "react";
import styles from "./PriceSelect.module.scss";

interface PriceSelectProps {
  value: number | undefined;
  prices: number[];
  onChange: (value: number | null) => void;
}

export function PriceSelect({ value, prices, onChange }: PriceSelectProps) {
  const onChange_ = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "default") onChange(null);
    else onChange(+e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Price</h3>
      <select className={styles.select} value={value ?? 'default'} onChange={onChange_}>
        <option className={styles.option} value={"default"}>
          Any price
        </option>
        {prices.map((price) => (
          <option className={styles.option} value={price} key={price}>
            {price}
          </option>
        ))}
      </select>
    </div>
  );
}
