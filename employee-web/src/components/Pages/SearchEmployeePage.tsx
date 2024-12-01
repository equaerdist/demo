import { Box } from "@mui/material";
import { Section } from "../Section/Section";
import { CitySearch } from "../Searches/CitySearch/CitySearch";
import { NameSearch } from "../Searches/NameSearch/NameSearch";
import { PositionSearch } from "../Searches/PositionSearch/PositionSearch";
import { ProjectSearch } from "../Searches/ProjectSearch/ProjectSearch";
import { RoleSearch } from "../Searches/RoleSearch/RoleSearch";
import { UnitSearch } from "../Searches/UnitSearch/UnitSearch";
import { useSearchBox } from "../../hooks/useSearchBox";
import {
  baseEmployeesAdapter,
  useGetBaseEmployeesQuery,
} from "../../lib/services/employeeApiV1";
import { EmployeeBaseProfile } from "../EmployeeBaseProfile/EmployeeProfile";
import { useScrollPagination } from "../../hooks/useScrollPagination";
import { useRef } from "react";
import NothingFound from "../Common/NothingFound";
import { Loading } from "../Common/Loading";
import { useNavigate } from "react-router";

export const SearchEmployeePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useSearchBox();
  const [position, setPosition] = useSearchBox();
  const [project, setProject] = useSearchBox();
  const [role, setRole] = useSearchBox();
  const [unit, setUnit] = useSearchBox();
  const [city, setCity] = useSearchBox();
  const ref = useRef<HTMLDivElement | null>(null);
  const { page, pageSize, handleScroll } = useScrollPagination(ref);
  const { employees, isLoading } = useGetBaseEmployeesQuery(
    {
      city: city,
      full_name: name,
      limit: pageSize,
      offset: (page - 1) * pageSize,
      position: position,
      project: project,
      role: role,
      unit: unit,
    },
    {
      refetchOnMountOrArgChange: true,
      selectFromResult: ({ data, ...other }) => ({
        employees: baseEmployeesAdapter
          .getSelectors()
          .selectAll(data ?? baseEmployeesAdapter.getInitialState()),
        ...other,
      }),
    }
  );
  console.log(employees);
  return (
    <Section>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            rowGap: 2,
            columnGap: 5,

            justifyContent: "center",
          }}
        >
          <NameSearch value={name} setValue={setName}></NameSearch>
          <PositionSearch
            value={position}
            setValue={setPosition}
          ></PositionSearch>
          <ProjectSearch value={project} setValue={setProject}></ProjectSearch>
          <RoleSearch value={role} setValue={setRole}></RoleSearch>
          <UnitSearch value={unit} setValue={setUnit}></UnitSearch>
          <CitySearch value={city} setValue={setCity}></CitySearch>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {isLoading ? <Loading></Loading> : null}
          {employees.length === 0 ? <NothingFound></NothingFound> : null}
          <div
            onScroll={handleScroll}
            ref={ref}
            style={{
              maxHeight: "500px",
              display: "flex",
              overflowY: "scroll",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 25,
            }}
          >
            {employees.map((t) => (
              <EmployeeBaseProfile
                data={t}
                onClick={() => navigate(`/employee/${t.id}`)}
              ></EmployeeBaseProfile>
            ))}
          </div>
        </Box>
      </Box>
    </Section>
  );
};
