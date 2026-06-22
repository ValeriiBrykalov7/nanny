interface IconProps {
  name: string;
  size: number;
  styles: string;
}

export default function Icon({ name, size, styles }: IconProps) {
  return (
    <svg width={size} height={size} className={styles}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
