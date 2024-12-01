import { BaseEmployee } from "./BaseEmployee";

export interface Unit {
  id: number;
  name: string;
  unit_parent_id: number;
  leader_full_name: string;
  participants: BaseEmployee[];
  units: Unit[];
}
