import { BaseEmployee } from "../Common/BaseEmployee";

export interface GetEmployeeResponse {
  id: number; //ANCHOR - 6
  role: string; //ANCHOR - Backend
  name: string; //ANCHOR - Ivan
  family_name: string; //ANCHOR - Ivanov
  middle_name: string; //ANCHOR - Ivanovich
  phone: string | null; //ANCHOR - +64645645
  city: string; //ANCHOR - Moscow
  project: string;
  office_address: string; //ANCHOR - проспект Мира, 14, 3 этаж, офис 301
  position: string; //ANCHOR - Senior backend
  birth_date: Date; //ANCHOR - 10.09.23
  unit_id: number;
  Teammates: BaseEmployee[];
}
