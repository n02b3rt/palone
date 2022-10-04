import { useState } from 'react';
import footer from './PhoneFooter.module.scss';
import styles from './PhoneHeader.module.scss';

import type { NextComponentType, NextPageContext } from 'next';

interface Props {
  showSubstitutions: () => void;
  showTimetable: () => void;
}

const PhoneFooter: NextComponentType<NextPageContext, {}, Props> = ({ showSubstitutions, showTimetable }: Props) => {
  const [substSelected, setSubstSelected] = useState(false);

  return (
    <div className={styles.phone__footer}>
      <div
        className={styles.phone__header__class}
        style={{ cursor: 'pointer', color: `${substSelected ? 'white' : 'gray'}` }}
        onClick={() => {
          showSubstitutions();
          setSubstSelected(true);
        }}
      >
        Zastępstwa
      </div>
      <div
        className={styles.phone__header__class}
        style={{ cursor: 'pointer', color: `${substSelected ? 'gray' : 'white'}` }}
        onClick={() => {
          showTimetable();
          setSubstSelected(false);
        }}
      >
        Plan Lekcji
      </div>
    </div>
  );
};

export default PhoneFooter;
