export type Node = {
  index: number;
  parent?: number;
  level?: number;
  leftChildren?: number | string;
  rightChildren?: number | string;
};

export interface NodeProps {
  children: React.ReactNode;
  active?: boolean;
  leftChildren?: number | string;
  rightChildren?: number | string;
}
