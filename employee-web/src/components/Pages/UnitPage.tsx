import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useGetUnitByIdQuery } from "../../lib/services/untiApiV1";
import { Section } from "../Section/Section";
import { Unit } from "../../types/Contracts/V1/Common/Unit";
import { getAvatarName } from "../../functions/getAvatarName";
import { EmployeeBaseProfile } from "../EmployeeBaseProfile/EmployeeProfile";
import { teamUnitMock } from "../../mocks/faker";
import { Loading } from "../Common/Loading";
import { Error } from "../Common/Error";

export const UnitPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: unit = teamUnitMock,
    isLoading,
    isError,
  } = useGetUnitByIdQuery({ id: Number(id) ?? 0 });
  if (!unit) return <Loading></Loading>;
  return (
    <Section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        {isLoading ? <Loading></Loading> : null}
        {isError ? <Error /> : null}
        {unit?.participants?.length > 0 ? (
          <TeamView unit={unit}></TeamView>
        ) : (
          <DepartmentView unit={unit}></DepartmentView>
        )}
      </Box>
    </Section>
  );
};

const DepartmentView = ({ unit }: { unit: Unit }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 10,
      }}
    >
      <UnitLeaderCard fullName={unit.leader_full_name}></UnitLeaderCard>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",

          justifyContent: "center",
        }}
      >
        {unit.units?.map((t) => (
          <UnitCard
            unit={t}
            onClick={() => navigate(`/unit/${t.id}`)}
          ></UnitCard>
        ))}
      </Box>
      {unit.unit_parent_id > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            backgroundColor: "var(--bg-dark)",
            padding: 3,
            borderRadius: 10,
          }}
        >
          <div onClick={() => navigate(`/unit/${unit.unit_parent_id}`)}>
            <Typography
              variant="h6"
              sx={{ color: "var(--brand)", fontWeight: "bold" }}
            >
              ПЕРЕЙТИ НА СТУПЕНЬ ВЫШЕ
            </Typography>
          </div>
        </Box>
      ) : null}
    </Box>
  );
};

const TeamView = ({ unit }: { unit: Unit }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "var(--text)", fontWeight: "bold" }}
        >
          {unit.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--text)", marginTop: 1 }}>
          Руководитель: {unit.leader_full_name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexWrap: "wrap",

          justifyContent: "center",
        }}
      >
        {unit.participants?.map((t) => (
          <EmployeeBaseProfile
            data={t}
            onClick={() => navigate(`/employee/${t.id}`)}
          ></EmployeeBaseProfile>
        ))}
      </Box>
      {unit.unit_parent_id > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            backgroundColor: "var(--bg-dark)",
            padding: 3,
            borderRadius: 10,
          }}
        >
          <div onClick={() => navigate(`/unit/${unit.unit_parent_id}`)}>
            <Typography
              variant="h6"
              sx={{ color: "var(--brand)", fontWeight: "bold" }}
            >
              ПЕРЕЙТИ НА СТУПЕНЬ ВЫШЕ
            </Typography>
          </div>
        </Box>
      ) : null}
    </Box>
  );
};

const UnitCard = ({ unit, onClick }: { unit: Unit; onClick?: () => void }) => {
  return (
    <div onClick={onClick}>
      <Card
        sx={{
          width: 250,
          margin: 2,
          boxShadow: 2,
          borderRadius: 2,
          backgroundColor: "var(--bg-dark)",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{ color: "var(--text)", fontWeight: "bold" }}
          >
            {unit.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "var(--text)", marginTop: 1 }}
          >
            Руководитель: {unit.leader_full_name}
          </Typography>

          {unit.participants.length > 0 ? (
            <Typography
              variant="body2"
              sx={{ color: "var(--text)", marginTop: 1 }}
            >
              +{unit.participants.length} участников
            </Typography>
          ) : null}
          {unit.units.length > 0 ? (
            <Typography
              variant="body2"
              sx={{ color: "var(--text)", marginTop: 1 }}
            >
              +{unit.units.length} отделов
            </Typography>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};

const UnitLeaderCard = ({ fullName }: { fullName: string }) => {
  const avatarName = getAvatarName(fullName);

  return (
    <Card
      sx={{
        width: 250,
        margin: 2,
        boxShadow: 2,
        borderRadius: 2,
        backgroundColor: "var(--bg-dark)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Avatar
        sx={{
          width: 60,
          height: 60,
          backgroundColor: "var(--brand)", // Цвет фона аватара
          fontSize: 24,
        }}
      >
        {avatarName}
      </Avatar>
      <CardContent sx={{ textAlign: "center", marginTop: 1 }}>
        <Typography
          variant="h6"
          sx={{ color: "var(--text)", fontWeight: "bold" }}
        >
          {fullName}
        </Typography>
      </CardContent>
    </Card>
  );
};
