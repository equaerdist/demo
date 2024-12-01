import SearchBox from "../../Common/SearchBox";
import { useGetEmployeeCitiesQuery } from "../../../lib/services/hintApiV1";
import { SpecifiedSearchProps } from "../SpecifiedSearchProps";

export const CitySearch = ({ value, setValue }: SpecifiedSearchProps) => {
  const { data: { cities } = { cities: [] }, isLoading } =
    useGetEmployeeCitiesQuery({
      city_search_term: value,
    });

  return (
    <SearchBox
      placeholder={"Поиск по городам"}
      width={"40%"}
      searchValue={value}
      setSearchValue={setValue}
      options={isLoading ? ["1"] : cities}
      isLoading={isLoading}
    ></SearchBox>
  );
};
