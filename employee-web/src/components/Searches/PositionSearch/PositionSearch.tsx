import SearchBox from "../../Common/SearchBox";
import { useGetEmployeePositionsQuery } from "../../../lib/services/hintApiV1";
import { SpecifiedSearchProps } from "../SpecifiedSearchProps";

export const PositionSearch = ({ value, setValue }: SpecifiedSearchProps) => {
  const { data: { positions } = { positions: [] }, isLoading } =
    useGetEmployeePositionsQuery({
      position_search_term: value,
    });

  return (
    <SearchBox
      placeholder={"Поиск по позициям"}
      width={"40%"}
      searchValue={value}
      setSearchValue={setValue}
      options={isLoading ? ["1"] : positions}
      isLoading={isLoading}
    ></SearchBox>
  );
};
