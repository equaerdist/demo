import SearchBox from "../../Common/SearchBox";
import { useGetEmployeeRolesQuery } from "../../../lib/services/hintApiV1";
import { SpecifiedSearchProps } from "../SpecifiedSearchProps";

export const RoleSearch = ({ value, setValue }: SpecifiedSearchProps) => {
  const { data: { roles } = { roles: [] }, isLoading } =
    useGetEmployeeRolesQuery({
      role_search_term: value,
    });

  return (
    <SearchBox
      placeholder={"Поиск по ролям"}
      width={"40%"}
      searchValue={value}
      setSearchValue={setValue}
      options={isLoading ? ["1"] : roles}
      isLoading={isLoading}
    ></SearchBox>
  );
};
