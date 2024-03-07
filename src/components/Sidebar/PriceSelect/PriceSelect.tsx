import { ChangeEvent } from 'react';
import styles from './PriceSelect.module.scss';

interface PriceSelectProps{
  prices: string[];
  onChange: (value: string) => void;
}

export function PriceSelect({ prices, onChange }: PriceSelectProps) {
  const onChange_ = (e:ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Price</h3>
      <select className={styles.select} onChange={onChange_}>
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