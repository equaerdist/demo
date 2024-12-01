import {
  Box,
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { EmployeeBaseProfile } from "../EmployeeBaseProfile/EmployeeProfile";
import { Employee } from "../../types/Employee";
import { useNavigate } from "react-router";

export const EmployeeProfile = ({ data }: { data: Employee }) => {
  const initials = `${data.name[0]}${data.family_name[0]}`.toUpperCase();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "start",
        gap: 15,
      }}
    >
      <Avatar
        sx={{
          bgcolor: "var(--brand)",
          width: 150,
          height: 150,
          fontWeight: "600",
          fontSize: "24px",
        }}
      >
        {initials}
      </Avatar>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          gap: 3,
          width: "100%",
          flexDirection: "column",
        }}
      >
        <EmployeeCard data={data}></EmployeeCard>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {data.Teammates.map((t) => (
            <EmployeeBaseProfile
              data={t}
              onClick={() => navigate(`/employee/${t.id}`)}
            ></EmployeeBaseProfile>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const EmployeeCard = ({ data }: { data: Employee }) => {
  return (
    <Card sx={{ boxShadow: 3, width: "100%" }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {data.family_name} {data.name} {data.middle_name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {data.position} - {data.role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.city}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Box>
            <Typography variant="body2" fontWeight="bold">
              Проект:
            </Typography>
            <Typography variant="body2">{data.project}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold">
              Адрес офиса:
            </Typography>
            <Typography variant="body2">{data.office_address}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold">
              Телефон:
            </Typography>
            <Typography variant="body2">{data.phone || "Не указан"}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold">
              Дата рождения:
            </Typography>
            <Typography variant="body2">
              {data.birth_date.toString()}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
