import { BaseEmployee } from "../types/Contracts/V1/Common/BaseEmployee";
import { Unit } from "../types/Contracts/V1/Common/Unit";
import { Employee } from "../types/Employee";

export const baseEmployeeMock: BaseEmployee = {
  id: 1,
  is_general: true,
  role: "Frontend",
  name: "Ivan",
  family_name: "Ivanov",
  middle_name: "Ivanovich",
  unit: "Development",
  position: "Senior frontend",
  units: {},
};

const randomBaseEmployee = (
  p_id?: number | null,
  p_is_general?: boolean | null,
  p_role?: string | null,
  p_name?: string | null,
  p_family_name?: string | null,
  p_middle_name?: string | null,
  p_unit?: string | null,
  p_position?: string | null
): BaseEmployee => {
  return {
    id: p_id ?? baseEmployeeMock.id,
    is_general: p_is_general ?? baseEmployeeMock.is_general,
    role: p_role ?? baseEmployeeMock.role,
    name: p_name ?? baseEmployeeMock.name,
    family_name: p_family_name ?? baseEmployeeMock.family_name,
    middle_name: p_middle_name ?? baseEmployeeMock.middle_name,
    unit: p_unit ?? baseEmployeeMock.unit,
    position: p_position ?? baseEmployeeMock.position,
    units: baseEmployeeMock.units, // так как units не имеет параметров для замены, используем из mock
  };
};

export const employeeMock: Employee = {
  id: 1,
  role: "Frontend",
  name: "Anna",
  family_name: "Petrova",
  middle_name: "Ivanovna",
  phone: "+12345678",
  city: "Moscow",
  project: "UI Kit",
  office_address: "ул. Ленина, д. 5, офис 10",
  position: "Senior frontend",
  birth_date: new Date("1990-01-01"),
  Teammates: Array.from({ length: 5 }, (_, i) => i).map((_) =>
    randomBaseEmployee(undefined, _ == 1)
  ),
  unit_id: 1,
};

export const teamUnitMock: Unit = {
  id: 1,
  name: "Development Team",
  unit_parent_id: 3,
  leader_full_name: "John Doe",
  participants: Array.from({ length: 5 }, (_, i) => i).map((_) =>
    randomBaseEmployee(undefined, _ == 1)
  ),
  units: [],
};

export const departmentUnitMock: Unit = {
  id: 1,
  name: "Development Team",
  unit_parent_id: 1,

  leader_full_name: "John Doe",
  units: Array.from({ length: 5 }, (_, i) => i).map((_) => ({
    ...teamUnitMock,
    participants: [],
    units: Array.from({ length: 5 }, (_, i) => i).map((_) => teamUnitMock),
  })),
  participants: [],
};
