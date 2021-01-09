import { Node } from "../node/model";

export interface BTreeProps {
  nodes?: Node[];
  depth?: number;
  active?: number;
}
