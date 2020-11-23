export interface ButtonProps {
  onClick?(e?: React.MouseEvent): void;
  children: React.ReactNode;
  className?: string;
}
