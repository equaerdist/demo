import { StringDictionary } from "../../../Common/StringDictionary";

export interface BaseEmployee {
  id: number;
  is_general: boolean;
  role: string;
  name: string; //ANCHOR - Ivan
  family_name: string; //ANCHOR - Ivanov
  middle_name: string; //ANCHOR - Ivanovich
  position: string; //ANCHOR - Senior backend
  unit: string;
  units: StringDictionary;
}
