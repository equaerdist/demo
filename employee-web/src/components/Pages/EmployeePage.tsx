import { useNavigate, useParams } from "react-router";
import { Section } from "../Section/Section";
import { useGetEmployeeByIdQuery } from "../../lib/services/employeeApiV1";

import { Loading } from "../Common/Loading";
import { Error } from "../Common/Error";
import { employeeMock } from "../../mocks/faker";
import { EmployeeProfile } from "../EmployeeProfile/EmployeeProfile";
import { Box, Typography } from "@mui/material";

export const EmployeePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    data: data = employeeMock,
    isLoading,
    isError,
  } = useGetEmployeeByIdQuery({ id: Number(id ?? 0) });
  return (
    <Section>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          <EmployeeProfile data={data}></EmployeeProfile>
        )}
        {data.unit_id > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              backgroundColor: "var(--bg-dark)",
              padding: 3,
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <div onClick={() => navigate(`/unit/${data.unit_id}`)}>
              <Typography
                variant="h6"
                sx={{ color: "var(--brand)", fontWeight: "bold" }}
              >
                ПЕРЕЙТИ В ПРОФИЛЬ КОМАНДЫ
              </Typography>
            </div>
          </Box>
        ) : null}
      </Box>
    </Section>
  );
};
