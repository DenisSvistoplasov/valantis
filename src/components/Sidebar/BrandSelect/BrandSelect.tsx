import { ChangeEvent } from "react";
import styles from "./BrandSelect.module.scss";

interface BrandSelectProps {
  brands: string[];
  onChange: (value: string) => void;
}

export function BrandSelect({ brands, onChange }: BrandSelectProps) {
  const onChange_ = (e:ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Brand</h3>
      <select className={styles.select} onChange={onChange_}>
        <option className={styles.option} value={"default"}>
          Any brand
        </option>
        {brands.map((brand) => (
          <option className={styles.option} value={brand} key={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
