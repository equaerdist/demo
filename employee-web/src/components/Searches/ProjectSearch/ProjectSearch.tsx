import SearchBox from "../../Common/SearchBox";
import { useGetEmployeeProjectsQuery } from "../../../lib/services/hintApiV1";
import { SpecifiedSearchProps } from "../SpecifiedSearchProps";

export const ProjectSearch = ({ value, setValue }: SpecifiedSearchProps) => {
  const { data: { projects } = { projects: [] }, isLoading } =
    useGetEmployeeProjectsQuery({
      project_search_term: value,
    });

  return (
    <SearchBox
      placeholder={"Поиск по проектам"}
      width={"40%"}
      searchValue={value}
      setSearchValue={setValue}
      options={isLoading ? ["1"] : projects}
      isLoading={isLoading}
    ></SearchBox>
  );
};
