import SearchBox from "../../Common/SearchBox";
import { useGetEmployeeNamesQuery } from "../../../lib/services/hintApiV1";
import { SpecifiedSearchProps } from "../SpecifiedSearchProps";

export const NameSearch = ({
  value,
  setValue,
  width,
}: SpecifiedSearchProps & { width?: number | string }) => {
  const { data: { names } = { names: [] }, isLoading } =
    useGetEmployeeNamesQuery({
      name_search_term: value,
    });

  return (
    <SearchBox
      placeholder="Поиск по именам"
      width={width ?? "40%"}
      searchValue={value}
      setSearchValue={setValue}
      options={isLoading ? ["1"] : names}
      isLoading={isLoading}
    ></SearchBox>
  );
};
