import { useDeferredValue, useState } from "react";
import SearchBox from "../../Common/SearchBox";
import { useGetEmployeeUnitsQuery } from "../../../lib/services/hintApiV1";
import { SpecifiedSearchProps } from "../SpecifiedSearchProps";

export const UnitSearch = ({ value, setValue }: SpecifiedSearchProps) => {
  const { data: { units } = { units: [] }, isLoading } =
    useGetEmployeeUnitsQuery({
      unit_search_term: value,
    });

  return (
    <SearchBox
      placeholder={"Поиск по департаментам"}
      width={"40%"}
      searchValue={value}
      setSearchValue={setValue}
      options={isLoading ? ["1"] : units}
      isLoading={isLoading}
    ></SearchBox>
  );
};
