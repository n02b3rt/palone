import styles from './MainSVG.module.scss';

interface Props {
  klasa: string;
}

const MainSVG = ({ klasa }: Props) => {
  return (
    <svg
      className={klasa}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 980.31 1681.06'
    >
      <g id='butla'>
        <g
          id='wst_ka_0_Layer0_0_FILL'
          data-name='wst  ka 0 Layer0 0 FILL'
        >
          <path
            className={styles.cls__3}
            d='M270,740.1c-2.41,3.79-7.25,11.34-14.53,22.65-7.34,11.25-13.11,26.5-17.32,45.75-4.21,19.25-6.11,30.89-5.68,34.92,.36,3.97,.48,7.91,.36,11.82l50.62,10.29c22.68-62.92,26.26-107.71,10.74-134.35-14.08,2.71-22.14,5.68-24.18,8.93m490.85,670.41c3.61-4.21,5.86-7.1,6.77-8.66-.54,.24-1.65-.66-3.34-2.71-2.77,4.03-5.41,7.88-7.94,11.55-15.22,21.84-26.41,37.3-33.57,46.38-3.55,4.57-5.99,6.8-7.31,6.68l10.92,89.6c.06-.84,.24-1.71,.54-2.62,.78-2.53,.84-6.2,.18-11.01-.66-4.63-.69-7.61-.09-8.93,2.83-12.45,9.44-30.98,19.85-55.58,5.9-13.47,11.4-25.17,16.51-35.1v-.09c6.2-12.09,11.76-21.57,16.69-28.42-2.71-2.23-4.81-3.88-6.32-4.96-.6,.42-6.02,10.59-16.24,30.5-6.2,11.97-12.3,23.19-18.32,33.66-4.03,6.98-8.03,13.59-12,19.85-10.05,15.7-7.88,7.37,6.5-24.99,12.69-28.51,21.2-46.14,25.54-52.88,.66-.96,1.2-1.71,1.62-2.26m13.26,38.17c-7.46,14.8-12.51,24.99-15.16,30.59-8.24,19.79-16.9,39.58-25.99,59.37,.78-.06,1.68-.09,2.71-.09,4.81-.06,10.98,.9,18.5,2.89,.3-.24,.57-1.8,.81-4.69,1.08-5.29,2.02-9.41,2.8-12.36,13.29-46.86,25.26-81.03,35.91-102.5-1.74-1.08-3.4-2.32-4.96-3.7-3.31,8.18-8.18,18.35-14.62,30.5m26.35-21.29c-8.72,22.02-16.03,40.81-21.93,56.39-5.96,15.52-10.44,31.01-13.44,46.47-1.38,6.92-2.53,11.22-3.43,12.9,4.75,1.38,10.5,3.16,17.23,5.32,.12-.72,.27-1.38,.45-1.99,2.65-18.11,6.11-35.13,10.38-51.07,2.89-12.99,6.05-24.93,9.47-35.82,2.59-9.26,5.44-18.02,8.57-26.26-2.23-1.86-4.66-3.85-7.31-5.96m28.51,25.72c-3.61-3.49-7.37-7.25-11.28-11.28-2.59,7.58-4.96,14.41-7.13,20.48-6.56,23.16-9.9,34.68-10.02,34.56-4.81,20.21-8.57,37.54-11.28,51.97,.12,1.08,0,2.02-.36,2.8,2.23,.84,4.45,1.41,6.68,1.71,1.62-.06,2.92,.21,3.88,.81,3.79,.48,7.19,.9,10.2,1.26,.3-.36,.39-.93,.27-1.71,.84-12.15,2.59-27.04,5.23-44.66,4.99-26.83,9.59-45.48,13.81-55.94m21.93,25.54c-2.83-4.57-7.07-10.11-12.72-16.6-.6,3.67-4.18,19.46-10.74,47.37-2.47,14.98-4.9,29.75-7.31,44.3,12.63-2.65,22.95-9.59,30.95-20.84,6.92-7.88,10.14-17.23,9.65-28.06-.78-8.6-4.06-17.32-9.84-26.17M144.4,724.76c-.6,.78-1.17,1.59-1.71,2.44-4.15,6.14-6.44,12.9-6.86,20.3-.12,1.14-.21,2.35-.27,3.61,.12,.48,.21,.96,.27,1.44l6.32,24.99,11.01-50.8-8.75-1.99m64.33,35.28c-2.95,7.88-6.11,15.67-9.47,23.37-6.62,15.22-13.93,30.11-21.93,44.66,3.67,6.56,9.02,10.71,16.06,12.45,4.21-17.99,9.77-35.43,16.69-52.33,6.86-16.9,15.07-33.26,24.63-49.09l-19.22,2.26-6.77,18.68m-29.23-26.62l-21.11-4.96-5.14,37.36-4.96,21.66,5.77,12.72c10.29-21.53,18.77-43.79,25.44-66.77m26.98,6.59l-21.29-5.68-10.38,38.89-11.19,33.39,8.3,14.44c6.38-11.73,12.06-23.88,17.05-36.45,1.56-4.03,3.19-8,4.87-11.91,4.99-11.25,9.2-22.14,12.63-32.66m29.14,43.4c2.41-5.71,5.08-11.16,8.03-16.33,5.83-10.29,12.51-20.24,20.03-29.87l-21.02,2.08c-6.02,13.29-11.64,26.74-16.87,40.33-1.5,3.91-2.98,7.85-4.42,11.82-.78,2.17-1.56,4.36-2.35,6.59-5.35,15.1-10.2,30.44-14.53,46.02,5.05,4.99,10.71,7.61,16.96,7.85,.36-2.65,.78-8.54,1.26-17.69,.42-9.2,2.56-20.12,6.41-32.75,1.92-6.32,4.09-12.33,6.5-18.05m457.29,193.36l-71.28-24.18c-17.63-6.02-35.46-11.13-53.51-15.34-10.47-2.53-20.99-4.63-31.58-6.32-4.57-.72-9.14-1.35-13.72-1.89l-20.93-2.53-73.45-10.65c-25.63-3.73-49.69-7.58-72.18-11.55-1.08-.42-2.23-.63-3.43-.63-1.2-.12-2.38-.33-3.52-.63-5.23-1.14-10.41-2.02-15.52-2.62-3.19-.6-6.32-1.2-9.38-1.8-5.83-1.14-11.46-2.26-16.87-3.34-.54-.12-1.05-.21-1.53-.27-.48-.12-.93-.21-1.35-.27-14.02-2.83-27.94-6.05-41.78-9.65-11.91-3.13-23.73-6.59-35.46-10.38-.66-.18-1.32-.39-1.99-.63-7.04-2.35-13.9-5.17-20.57-8.48-11.97-6.08-23.01-13.62-33.11-22.65-8.84-7.94-16.72-16.72-23.64-26.35-4.21-5.83-8.3-11.7-12.27-17.59-.06-.12-.12-.24-.18-.36-4.39-7.52-7.94-15.58-10.65-24.18-.78-3.07-1.35-6.14-1.71-9.2-.12-1.5-.24-2.98-.36-4.42-.24-6.44,.24-12.54,1.44-18.32,1.32-4.39,2.74-8.27,4.24-11.64,1.38-3.25,3.04-6.02,4.96-8.3-1.26-.18-2.62-.36-4.06-.54-6.02-.96-12.12-1.23-18.32-.81-2.41,.06-4.81,.27-7.22,.63-.78,.12-1.56,.24-2.35,.36,.36-2.59,.66-5.2,.9-7.85l-.99,8.03c-2.71,.48-5.41,1.08-8.12,1.8-7.7,1.92-15.19,4.81-22.47,8.66-6.32,3.85-12.15,8.42-17.5,13.72-4.09,3.37-7.85,7.58-11.28,12.63-7.82,12.09-12.3,24.75-13.44,37.99,.18,1.56,.27,3.82,.27,6.77,.9,5.35,1.8,10.98,2.71,16.87,1.14,4.57,2.32,9.56,3.52,14.98,2.05,4.81,4.09,9.87,6.14,15.16,2.65,6.5,5.38,13.84,8.21,22.02,.18,.54,.39,1.11,.63,1.71,4.63,13.96,6.95,29.08,6.95,45.39,3.19,5.05,5.99,11.28,8.39,18.68,3.67,10.17,6.44,19.85,8.3,29.05,6.44,27.79,7.61,49.87,3.52,66.23-.78,6.14-3.52,9.44-8.21,9.93-3.73,.3-6.14-2.56-7.22-8.57-.18-3.97-.75-14.5-1.71-31.58-.24-13.29-.99-23.16-2.26-29.6-.72-6.38-1.86-12.84-3.43-19.4,0,.48-.18,1.38-.54,2.71-1.86,11.79-6.44,26.47-13.72,44.03-9.14,21.66-14.65,35.76-16.51,42.32-3.97,13.84-5.68,27.7-5.14,41.6,.42,10.83,2.2,21.69,5.32,32.57,4.81,13.47,11.4,24.78,19.76,33.93,5.83,5.17,14.62,11.58,26.35,19.22,.9,.48,1.77,.99,2.62,1.53,6.38,3.73,13.78,8.12,22.2,13.17,10.11,5.41,27.94,15.4,53.51,29.96,25.51,14.62,78.23,33.93,158.17,57.93,79.76,24,129.24,36.27,148.43,36.81,53.3,5.77,100.07,11.61,140.31,17.5,28.63,5.29,58.71,11.1,90.23,17.41,38.38,8.18,70.95,21.44,97.72,39.79,17.69,12.51,36.27,27.85,55.76,46.02,10.59,10.41,18.95,19.28,25.08,26.62,8.78,11.31,14.71,22.92,17.78,34.83,2.89,12.03,1.89,23.91-2.98,35.64-4.75,11.43-12.06,21.2-21.93,29.32,14.38-1.26,27.7-5.2,39.97-11.82,12.75-7.04,23.04-16.42,30.86-28.15,7.82-12.33,10.68-25.35,8.57-39.07-1.14-8.12-4.03-18.23-8.66-30.32-1.99,5.65-5.14,8.09-9.47,7.31-5.77-.9-7.85-6.47-6.23-16.69,1.08-7.28,3.16-11.79,6.23-13.53-1.74-4.75-3.31-9.08-4.69-12.99,.3,3.55-.6,6.65-2.71,9.29-1.92,3.49-3.97,4.75-6.14,3.79-2.59-.9-6.71-5.44-12.36-13.62-2.29-3.97-5.65-8.54-10.11-13.72-4.63-5.29-8.18-9.23-10.65-11.82-6.62-6.14-10.41-9.99-11.37-11.55-.84-1.2-1.05-3.22-.63-6.05,.48-3.01,1.59-4.57,3.34-4.69,3.91-.3,8.75,1.08,14.53,4.15,6.44,3.31,10.92,6.08,13.44,8.3l12.54,13.35c2.65,3.13,4.78,6.38,6.41,9.74-1.32-10.71-2.38-21.78-3.16-33.2-.72-2.11-1.17-4.99-1.35-8.66-.24-9.44-.45-20.33-.63-32.66,0-14.38-.42-25.69-1.26-33.93-2.23-17.02-6.68-40-13.35-68.94-1.08-5.23,.63-9.65,5.14-13.26,5.05-3.07,8.69-2.71,10.92,1.08,8.66,18.59,14.17,43.19,16.51,73.81,.3,4.03,.45,7.64,.45,10.83,.36,1.14,.72,1.53,1.08,1.17,.12,.42,.36,.09,.72-.99,2.53-4.39,8.12-14.86,16.78-31.4,7.58-13.78,12.45-25.78,14.62-36,6.26-27.49,4.45-53.72-5.41-78.68-7.58-19.61-19.1-36.9-34.56-51.88-17.63-18.17-37.9-34.59-60.82-49.27-17.99-11.19-50.47-26.35-97.45-45.48-23.52-9.62-45.24-18.11-65.15-25.44m-55.22,299.66c.9,.48,1.74,1.77,2.53,3.88,.66,1.44,.96,2.95,.9,4.51,.3,1.74,.3,3.46,0,5.14l-.63,4.15c-1.14,2.83-2.14,4.81-2.98,5.96l-2.26,2.08c-1.44,1.08-2.95,1.53-4.51,1.35-1.08-.3-2.11-.99-3.07-2.08-.78-.48-1.53-1.47-2.26-2.98l-1.08-4.78c-.24-1.74-.21-3.82,.09-6.23l.81-3.25c.84-2.23,1.89-4.15,3.16-5.77l1.89-2.08c1.56-1.32,3.07-1.83,4.51-1.53,1.38,.18,2.35,.72,2.89,1.62m-47.19-2.26c7.64,1.2,13.9,2.98,18.77,5.32,2.05,.96,2.74,3.73,2.08,8.3-.6,4.51-2.02,6.83-4.24,6.95-5.23,1.02-11.31,1.23-18.23,.63-7.94-1.56-13.9-2.59-17.87-3.07l-36.72-3.97c-16-1.8-30.17-3.28-42.5-4.42l-32.84-2.89-22.56-4.78c-21.78-3.91-38.89-7.22-51.34-9.93-29.72-5.65-53.84-13.11-72.36-22.38-1.32-.24-1.68-1.41-1.08-3.52,.42-1.86,1.17-2.8,2.26-2.8,16.72-.42,41.66,2.5,74.8,8.75,16.78,3.43,33.54,6.47,50.26,9.11,2.23,.36,4.45,.69,6.68,.99,2.71,.42,5.32,.75,7.85,.99,2.77,.66,5.47,1.23,8.12,1.71,1.56,.3,3.13,.54,4.69,.72,2.95,.36,5.9,.66,8.84,.9,1.62,.18,3.28,.39,4.96,.63,2.89,.36,5.8,.63,8.75,.81,1.8,.24,3.67,.42,5.59,.54,21.23,1.99,34.68,3.4,40.33,4.24l36.54,4.96c4.27,.54,10.68,1.26,19.22,2.17M73.12,761.49c-.3,.54-.6,1.08-.9,1.62-1.02,1.8-2.02,3.61-2.98,5.41-.9,1.56-1.83,3.13-2.8,4.69-.84,1.44-1.62,2.92-2.35,4.42-1.08,2.47-1.99,5.05-2.71,7.76-1.02,3.85-1.99,7.7-2.89,11.55-.78,3.37-1.44,6.8-1.99,10.29-.66,4.33-1.05,8.72-1.17,13.17-.12,4.03,.06,8.06,.54,12.09,.18,1.74,.36,3.49,.54,5.23,.54,4.63-.84,8.57-4.15,11.82-1.56,1.44-3.16,2.14-4.78,2.08-1.02-.12-1.89-.57-2.62-1.35s-1.32-1.8-1.8-3.07c0-.06-.03-.12-.09-.18-1.38-3.85-2.38-7.43-2.98-10.74-.36-1.74-.57-3.49-.63-5.23-.12-5.29,.18-10.68,.9-16.15,1.32-10.53,3.94-20.78,7.85-30.77,2.35-6.14,4.54-11.25,6.59-15.34,1.38-2.47,2.89-4.93,4.51-7.4,1.74-2.71,4.33-4.51,7.76-5.41,2.53-.66,4.66-.24,6.41,1.26,.42,1.2,.36,2.56-.18,4.06,0,.06-.03,.12-.09,.18m11.73,366.25c4.27,2.89,7.28,5.53,9.02,7.94,2.71,2.89,3.61,6.8,2.71,11.73-.78,3.79-1.35,6.02-1.71,6.68-1.8,4.33-4.27,6.29-7.4,5.86-2.77-.42-6.8-2.68-12.09-6.77-2.65-2.05-5.56-4.45-8.75-7.22-6.14-5.35-12.33-11.7-18.59-19.04-5.23-6.2-9.32-13.84-12.27-22.92-1.44-4.81-2.08-9.81-1.89-14.98,.12-1.08,.33-2.26,.63-3.52,.54-2.65,1.5-5.74,2.89-9.29,.48-2.05,1.29-2.92,2.44-2.62,1.08,.48,1.56,1.8,1.44,3.97-.12,1.2,.27,2.74,1.17,4.6l1.99,4.69,3.97,7.22c3.19,4.15,7.52,8.81,12.99,13.99l23.46,19.67m33.93,33.3c-2.89-.24-4.06-2.8-3.52-7.67,.54-5.05,2.23-7.46,5.05-7.22,2.83,.48,3.97,3.25,3.43,8.3-.54,4.75-2.2,6.95-4.96,6.59m441.63-53.56'
          />
          <path
            className={styles.cls__1}
            d='M696.97,943.48c-7.88-2.47-15.85-4.84-23.91-7.13-6.8-1.92-13.65-3.82-20.57-5.68-9.2-2.41-19.43-4.96-30.68-7.67l-26.98-6.05c-10.35-1.99-19.22-3.55-26.62-4.69-11.01-1.86-21.57-3.52-31.67-4.96-4.63-.72-9.14-1.38-13.53-1.99l-91.49-13.08c-28.27-4.27-52.63-8.24-73.09-11.91l-3.25-.54c-.3,0-1.5-.15-3.61-.45l-68.12-13.81-50.62-10.29c.12-3.91,0-7.85-.36-11.82-.42-4.03,1.47-15.67,5.68-34.92,4.21-19.25,9.99-34.5,17.32-45.75,7.28-11.31,12.12-18.86,14.53-22.65,2.05-3.25,10.11-6.23,24.18-8.93l10.47-12.09c1.99-3.37,3.82-7.16,5.5-11.37-1.5,.48-3.34,.93-5.5,1.35-9.26,1.74-18.77,2.92-28.51,3.52-17.75,1.14-35.49,1.56-53.24,1.26-11.91-.18-23.73-.81-35.46-1.89-9.26-1.2-18.23-3.28-26.89-6.23l-24.72-3.61c-11.67-1.62-18.95-2.29-21.84-1.99-2.59,0-5.38,.27-8.39,.81-.18-.18-.6-.12-1.26,.18v.18l-.18,.09c-2.89,.36-5.8,1.08-8.75,2.17l-1.8,.45c-11.49,2.59-23.37,6.65-35.64,12.18-6.2,3.97-11.49,8.18-15.88,12.63-4.75,4.03-9.38,8.6-13.9,13.72-2.65,3.37-5.08,7.64-7.31,12.81-1.92,4.99-3.55,9.96-4.87,14.89-1.2,4.69-2.26,9.23-3.16,13.62-1.14,5.83-1.65,11.61-1.53,17.32,.06,5.05,.39,10.11,.99,15.16,.54,4.87,1.29,9.68,2.26,14.44,.12,.66,.24,1.29,.36,1.89,.18,.72,.36,1.41,.54,2.08,.78,2.71,1.68,5.41,2.71,8.12l6.41,17.87c1.99,4.99,3.7,9.65,5.14,13.99,.84,2.47,1.59,4.81,2.26,7.04l2.71,7.76c1.38,9.44,2.32,20.6,2.8,33.48,.84,8.48,.51,17.23-.99,26.26,.06,2.77-.48,5.83-1.62,9.2-1.68,7.04-4.24,15.91-7.67,26.62-.9,2.65-1.65,5.14-2.26,7.49-1.32,3.43-5.83,14.32-13.53,32.66-5.83,15.4-9.29,29.72-10.38,42.95-.36,5.9-.45,11.67-.27,17.32,.42,16.3,2.98,31.85,7.67,46.65,6.98,19.67,16.54,35.04,28.69,46.11,10.11,8.54,20.81,16.45,32.12,23.73,7.52,4.81,13.68,8.66,18.5,11.55,1.02,.12,1.83,.57,2.44,1.35l46.11,23.64c32.12,14.62,64.85,28.03,98.17,40.24,27.37,9.44,53.51,17.72,78.41,24.81,1.8,.42,3.16,.75,4.06,.99,1.74,.48,3.01,.9,3.79,1.26,30.2,8.12,58.14,14.95,83.82,20.48,10.35,1.99,22.11,4.06,35.28,6.23,7.88,1.2,12,1.83,12.36,1.89l.09-.36,7.85,.9c51.67,5.77,96.4,11.49,134.17,17.14,7.4,1.2,17.11,2.89,29.14,5.05l15.34,2.26c12.81,2.59,26.83,5.68,42.05,9.29,28.99,6.26,53.24,14.74,72.73,25.44-1.5,.78-6.86,8.48-16.06,23.1-3.79,6.08-8.75,15.34-14.89,27.79-3.07,6.26-5.74,11.91-8.03,16.96l.09,.81c.12,.54,.39,.84,.81,.9,1.32,.12,3.76-2.11,7.31-6.68,7.16-9.08,18.35-24.54,33.57-46.38,2.53-3.67,5.17-7.52,7.94-11.55,1.68,2.05,2.8,2.95,3.34,2.71-.9,1.56-3.16,4.45-6.77,8.66-.42,.54-.96,1.29-1.62,2.26-4.33,6.74-12.84,24.36-25.54,52.88-14.38,32.36-16.54,40.69-6.5,24.99,3.97-6.26,7.97-12.87,12-19.85,6.02-10.47,12.12-21.69,18.32-33.66,10.23-19.91,15.64-30.08,16.24-30.5,1.5,1.08,3.61,2.74,6.32,4.96-4.93,6.86-10.5,16.33-16.69,28.42v.09c-5.11,9.93-10.62,21.63-16.51,35.1-10.41,24.6-17.02,43.13-19.85,55.58-.6,1.32-.57,4.3,.09,8.93,.66,4.81,.6,8.48-.18,11.01-.3,.9-.48,1.77-.54,2.62-.06,1.02,.06,2.02,.36,2.98,1.32,4.09,6.38,6.98,15.16,8.66,5.77,1.14,11.76,2.47,17.96,3.97,6.38,1.56,12.96,3.37,19.76,5.41,6.92,1.26,14.29,2.8,22.11,4.6,16.3,3.25,23.52,4.48,21.66,3.7,14.14,1.56,28.36,1.08,42.68-1.44,10.83-1.44,20.84-4.09,30.05-7.94,3.61-1.32,7.1-2.77,10.47-4.33,13.9-6.56,25.99-15.58,36.27-27.07,20.03-22.74,25.78-48.33,17.23-76.79-3.07-9.5-8.18-22.5-15.34-38.98-3.91-10.29-6.83-18.35-8.75-24.18-2.11-4.81-3.49-9.84-4.15-15.07-.24-.48-.39-.87-.45-1.17-1.14-8.12-1.62-17.2-1.44-27.25,.6-8.42,1.74-15.85,3.43-22.29,1.62-5.71,3.88-12.69,6.77-20.93,2.71-6.98,4.87-12.81,6.5-17.5,1.14-1.32,1.92-2.74,2.35-4.24,10.83-20.93,17.38-34.29,19.67-40.06,4.33-9.68,7.43-19.25,9.29-28.69,.96-5.23,1.56-10.41,1.8-15.52,2.05-26.11-1.53-51.76-10.74-76.97-2.35-6.44-5.05-12.66-8.12-18.68-6.38-12.57-14.26-24.3-23.64-35.19-7.94-9.26-21.11-21.47-39.52-36.63-16.84-13.11-36.66-26.38-59.46-39.79-41.87-22.62-88.97-42.11-141.3-58.47m-75.34,9.11l71.28,24.18c19.91,7.34,41.63,15.82,65.15,25.44,46.98,19.13,79.46,34.29,97.45,45.48,22.92,14.68,43.19,31.1,60.82,49.27,15.46,14.98,26.98,32.27,34.56,51.88,9.87,24.96,11.67,51.19,5.41,78.68-2.17,10.23-7.04,22.23-14.62,36-8.66,16.54-14.26,27.01-16.78,31.4-.36,1.08-.6,1.41-.72,.99-.36,.36-.72-.03-1.08-1.17,0-3.19-.15-6.8-.45-10.83-2.35-30.62-7.85-55.22-16.51-73.81-2.23-3.79-5.86-4.15-10.92-1.08-4.51,3.61-6.23,8.03-5.14,13.26,6.68,28.93,11.13,51.91,13.35,68.94,.84,8.24,1.26,19.55,1.26,33.93,.18,12.33,.39,23.22,.63,32.66,.18,3.67,.63,6.56,1.35,8.66,.78,11.43,1.83,22.5,3.16,33.2-1.62-3.37-3.76-6.62-6.41-9.74l-12.54-13.35c-2.53-2.23-7.01-4.99-13.44-8.3-5.77-3.07-10.62-4.45-14.53-4.15-1.74,.12-2.86,1.68-3.34,4.69-.42,2.83-.21,4.84,.63,6.05,.96,1.56,4.75,5.41,11.37,11.55,2.47,2.59,6.02,6.53,10.65,11.82,4.45,5.17,7.82,9.74,10.11,13.72,5.65,8.18,9.77,12.72,12.36,13.62,2.17,.96,4.21-.3,6.14-3.79,2.11-2.65,3.01-5.74,2.71-9.29,1.38,3.91,2.95,8.24,4.69,12.99-3.07,1.74-5.14,6.26-6.23,13.53-1.62,10.23,.45,15.79,6.23,16.69,4.33,.78,7.49-1.65,9.47-7.31,4.63,12.09,7.52,22.2,8.66,30.32,2.11,13.72-.75,26.74-8.57,39.07-7.82,11.73-18.11,21.11-30.86,28.15-12.27,6.62-25.6,10.56-39.97,11.82,9.87-8.12,17.17-17.9,21.93-29.32,4.87-11.73,5.86-23.61,2.98-35.64-3.07-11.91-8.99-23.52-17.78-34.83-6.14-7.34-14.5-16.21-25.08-26.62-19.49-18.17-38.08-33.51-55.76-46.02-26.77-18.35-59.34-31.61-97.72-39.79-31.52-6.32-61.6-12.12-90.23-17.41-40.24-5.9-87.01-11.73-140.31-17.5-19.19-.54-68.67-12.81-148.43-36.81-79.94-24-132.67-43.31-158.17-57.93-25.57-14.56-43.4-24.54-53.51-29.96-8.42-5.05-15.82-9.44-22.2-13.17-.84-.54-1.71-1.05-2.62-1.53-11.73-7.64-20.51-14.05-26.35-19.22-8.36-9.14-14.95-20.45-19.76-33.93-3.13-10.89-4.9-21.75-5.32-32.57-.54-13.9,1.17-27.76,5.14-41.6,1.86-6.56,7.37-20.66,16.51-42.32,7.28-17.56,11.85-32.24,13.72-44.03,.36-1.32,.54-2.23,.54-2.71,1.56,6.56,2.71,13.02,3.43,19.4,1.26,6.44,2.02,16.3,2.26,29.6,.96,17.08,1.53,27.61,1.71,31.58,1.08,6.02,3.49,8.87,7.22,8.57,4.69-.48,7.43-3.79,8.21-9.93,4.09-16.36,2.92-38.44-3.52-66.23-1.86-9.2-4.63-18.89-8.3-29.05-2.41-7.4-5.2-13.62-8.39-18.68,0-16.3-2.32-31.43-6.95-45.39-.24-.6-.45-1.17-.63-1.71-2.83-8.18-5.56-15.52-8.21-22.02-2.05-5.29-4.09-10.35-6.14-15.16-1.2-5.41-2.38-10.41-3.52-14.98-.9-5.9-1.8-11.52-2.71-16.87,0-2.95-.09-5.2-.27-6.77,1.14-13.23,5.62-25.9,13.44-37.99,3.43-5.05,7.19-9.26,11.28-12.63,5.35-5.29,11.19-9.87,17.5-13.72,7.28-3.85,14.77-6.74,22.47-8.66,2.71-.72,5.41-1.32,8.12-1.8l.99-8.03c-.24,2.65-.54,5.26-.9,7.85,.78-.12,1.56-.24,2.35-.36,2.41-.36,4.81-.57,7.22-.63,6.2-.42,12.3-.15,18.32,.81,1.44,.18,2.8,.36,4.06,.54-1.92,2.29-3.58,5.05-4.96,8.3-1.5,3.37-2.92,7.25-4.24,11.64-1.2,5.77-1.68,11.88-1.44,18.32,.12,1.44,.24,2.92,.36,4.42,.36,3.07,.93,6.14,1.71,9.2,2.71,8.6,6.26,16.66,10.65,24.18,.06,.12,.12,.24,.18,.36,3.97,5.9,8.06,11.76,12.27,17.59,6.92,9.62,14.8,18.41,23.64,26.35,10.11,9.02,21.14,16.57,33.11,22.65,6.68,3.31,13.53,6.14,20.57,8.48,.66,.24,1.32,.45,1.99,.63,11.73,3.79,23.55,7.25,35.46,10.38,13.84,3.61,27.76,6.83,41.78,9.65,.42,.06,.87,.15,1.35,.27,.48,.06,.99,.15,1.53,.27,5.41,1.08,11.04,2.2,16.87,3.34,3.07,.6,6.2,1.2,9.38,1.8,5.11,.6,10.29,1.47,15.52,2.62,1.14,.3,2.32,.51,3.52,.63,1.2,0,2.35,.21,3.43,.63,22.5,3.97,46.56,7.82,72.18,11.55l73.45,10.65,20.93,2.53c4.57,.54,9.14,1.17,13.72,1.89,10.59,1.68,21.11,3.79,31.58,6.32,18.05,4.21,35.88,9.32,53.51,15.34m-377.98-185.51c-2.95,5.17-5.62,10.62-8.03,16.33-2.41,5.71-4.57,11.73-6.5,18.05-3.85,12.63-5.99,23.55-6.41,32.75-.48,9.14-.9,15.04-1.26,17.69-6.26-.24-11.91-2.86-16.96-7.85,4.33-15.58,9.17-30.92,14.53-46.02,.78-2.23,1.56-4.42,2.35-6.59,1.44-3.97,2.92-7.91,4.42-11.82,5.23-13.59,10.86-27.04,16.87-40.33l21.02-2.08c-7.52,9.62-14.2,19.58-20.03,29.87m-58.47-32.75l21.29,5.68c-3.43,10.53-7.64,21.41-12.63,32.66-1.68,3.91-3.31,7.88-4.87,11.91-4.99,12.57-10.68,24.72-17.05,36.45l-8.3-14.44,11.19-33.39,10.38-38.89m-26.8-5.86l21.11,4.96c-6.68,22.98-15.16,45.24-25.44,66.77l-5.77-12.72,4.96-21.66,5.14-37.36m40.87,54.95c3.37-7.7,6.53-15.49,9.47-23.37l6.77-18.68,19.22-2.26c-9.56,15.82-17.78,32.18-24.63,49.09-6.92,16.9-12.48,34.35-16.69,52.33-7.04-1.74-12.39-5.9-16.06-12.45,8-14.56,15.31-29.45,21.93-44.66m-56.57-56.21c.54-.84,1.11-1.65,1.71-2.44l8.75,1.99-11.01,50.8-6.32-24.99c-.06-.48-.15-.96-.27-1.44,.06-1.26,.15-2.47,.27-3.61,.42-7.4,2.71-14.17,6.86-20.3m695.5,734.84c5.65,6.5,9.9,12.03,12.72,16.6,5.77,8.84,9.05,17.56,9.84,26.17,.48,10.83-2.74,20.18-9.65,28.06-8,11.25-18.32,18.2-30.95,20.84,2.41-14.56,4.84-29.32,7.31-44.3,6.56-27.91,10.14-43.7,10.74-47.37m-20.48-20.21c3.91,4.03,7.67,7.79,11.28,11.28-4.21,10.47-8.81,29.11-13.81,55.94-2.65,17.63-4.39,32.51-5.23,44.66,.12,.78,.03,1.35-.27,1.71-3.01-.36-6.41-.78-10.2-1.26-.96-.6-2.26-.87-3.88-.81-2.23-.3-4.45-.87-6.68-1.71,.36-.78,.48-1.71,.36-2.8,2.71-14.44,6.47-31.76,11.28-51.97,.12,.12,3.46-11.4,10.02-34.56,2.17-6.08,4.54-12.9,7.13-20.48m-39.16,41.96c5.9-15.58,13.2-34.38,21.93-56.39,2.65,2.11,5.08,4.09,7.31,5.96-3.13,8.24-5.99,16.99-8.57,26.26-3.43,10.89-6.59,22.83-9.47,35.82-4.27,15.94-7.73,32.96-10.38,51.07-.18,.6-.33,1.26-.45,1.99-6.74-2.17-12.48-3.94-17.23-5.32,.9-1.68,2.05-5.99,3.43-12.9,3.01-15.46,7.49-30.95,13.44-46.47m-19.58-4.51c2.65-5.59,7.7-15.79,15.16-30.59,6.44-12.15,11.31-22.32,14.62-30.5,1.56,1.38,3.22,2.62,4.96,3.7-10.65,21.47-22.62,55.64-35.91,102.5-.78,2.95-1.71,7.07-2.8,12.36-.24,2.89-.51,4.45-.81,4.69-7.52-1.99-13.68-2.95-18.5-2.89-1.02,0-1.92,.03-2.71,.09,9.08-19.79,17.75-39.58,25.99-59.37M115.26,1153.36c-.54,4.87,.63,7.43,3.52,7.67,2.77,.36,4.42-1.83,4.96-6.59,.54-5.05-.6-7.82-3.43-8.3-2.83-.24-4.51,2.17-5.05,7.22m-21.38-17.69c-1.74-2.41-4.75-5.05-9.02-7.94l-23.46-19.67c-5.47-5.17-9.81-9.84-12.99-13.99l-3.97-7.22-1.99-4.69c-.9-1.86-1.29-3.4-1.17-4.6,.12-2.17-.36-3.49-1.44-3.97-1.14-.3-1.95,.57-2.44,2.62-1.38,3.55-2.35,6.65-2.89,9.29-.3,1.26-.51,2.44-.63,3.52-.18,5.17,.45,10.17,1.89,14.98,2.95,9.08,7.04,16.72,12.27,22.92,6.26,7.34,12.45,13.68,18.59,19.04,3.19,2.77,6.11,5.17,8.75,7.22,5.29,4.09,9.32,6.35,12.09,6.77,3.13,.42,5.59-1.53,7.4-5.86,.36-.66,.93-2.89,1.71-6.68,.9-4.93,0-8.84-2.71-11.73m-21.66-372.56c.3-.54,.6-1.08,.9-1.62,.06-.06,.09-.12,.09-.18,.54-1.5,.6-2.86,.18-4.06-1.74-1.5-3.88-1.92-6.41-1.26-3.43,.9-6.02,2.71-7.76,5.41-1.62,2.47-3.13,4.93-4.51,7.4-2.05,4.09-4.24,9.2-6.59,15.34-3.91,9.99-6.53,20.24-7.85,30.77-.72,5.47-1.02,10.86-.9,16.15,.06,1.74,.27,3.49,.63,5.23,.6,3.31,1.59,6.89,2.98,10.74,.06,.06,.09,.12,.09,.18,.48,1.26,1.08,2.29,1.8,3.07s1.59,1.23,2.62,1.35c1.62,.06,3.22-.63,4.78-2.08,3.31-3.25,4.69-7.19,4.15-11.82-.18-1.74-.36-3.49-.54-5.23-.48-4.03-.66-8.06-.54-12.09,.12-4.45,.51-8.84,1.17-13.17,.54-3.49,1.2-6.92,1.99-10.29,.9-3.85,1.86-7.7,2.89-11.55,.72-2.71,1.62-5.29,2.71-7.76,.72-1.5,1.5-2.98,2.35-4.42,.96-1.56,1.89-3.13,2.8-4.69,.96-1.8,1.95-3.61,2.98-5.41m537.05,516.39c-4.87-2.35-11.13-4.12-18.77-5.32-8.54-.9-14.95-1.62-19.22-2.17l-36.54-4.96c-5.65-.84-19.1-2.26-40.33-4.24-1.92-.12-3.79-.3-5.59-.54-2.95-.18-5.86-.45-8.75-.81-1.68-.24-3.34-.45-4.96-.63-2.95-.24-5.9-.54-8.84-.9-1.56-.18-3.13-.42-4.69-.72-2.65-.48-5.35-1.05-8.12-1.71-2.53-.24-5.14-.57-7.85-.99-2.23-.3-4.45-.63-6.68-.99-16.72-2.65-33.48-5.68-50.26-9.11-33.14-6.26-58.08-9.17-74.8-8.75-1.08,0-1.83,.93-2.26,2.8-.6,2.11-.24,3.28,1.08,3.52,18.53,9.26,42.65,16.72,72.36,22.38,12.45,2.71,29.57,6.02,51.34,9.93l22.56,4.78,32.84,2.89c12.33,1.14,26.5,2.62,42.5,4.42l36.72,3.97c3.97,.48,9.93,1.5,17.87,3.07,6.92,.6,12.99,.39,18.23-.63,2.23-.12,3.64-2.44,4.24-6.95,.66-4.57-.03-7.34-2.08-8.3m30.95,.81c-.78-2.11-1.62-3.4-2.53-3.88-.54-.9-1.5-1.44-2.89-1.62-1.44-.3-2.95,.21-4.51,1.53l-1.89,2.08c-1.26,1.62-2.32,3.55-3.16,5.77l-.81,3.25c-.3,2.41-.33,4.48-.09,6.23l1.08,4.78c.72,1.5,1.47,2.5,2.26,2.98,.96,1.08,1.99,1.77,3.07,2.08,1.56,.18,3.07-.27,4.51-1.35l2.26-2.08c.84-1.14,1.83-3.13,2.98-5.96l.63-4.15c.3-1.68,.3-3.4,0-5.14,.06-1.56-.24-3.07-.9-4.51'
          />
        </g>
        <path
          id='wst_ka_0_Layer0_0_1_STROKES'
          data-name='wst  ka 0 Layer0 0 1 STROKES'
          className={styles.cls__4}
          d='M726.75,1556.33c-.3-.96-.42-1.96-.36-2.98l-10.92-89.6'
        />
      </g>
      <g
        id='Warstwa_4'
        data-name='Warstwa 4'
      >
        <text
          className={styles.cls__2}
          transform='translate(143.72 1058.29) rotate(15)'
        >
          <tspan
            x='0'
            y='0'
          >
            O NAS
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default MainSVG;