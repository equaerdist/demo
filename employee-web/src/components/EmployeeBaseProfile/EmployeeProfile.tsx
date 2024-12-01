import { Card, Avatar, CardContent, Typography } from "@mui/material";
import { BaseEmployee } from "../../types/Contracts/V1/Common/BaseEmployee";

export const EmployeeBaseProfile = ({
  data,
  onClick,
}: {
  data: BaseEmployee;
  onClick?: () => void;
}) => {
  const { name, family_name, is_general, position } = data;

  // Генерация аватара из первых двух букв имени и фамилии
  const avatarText = `${name[0]}${family_name[0]}`.toUpperCase();

  // Цвет для генерального сотрудника
  const cardColor = is_general ? "var(--brand)" : "var(--bg-dark)";
  const textColor = is_general ? "var(--text)" : "#e0e0e0";

  return (
    <div onClick={onClick}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: cardColor,
          color: textColor,
          borderRadius: "8px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          width: "200px",
          height: "150px",
        }}
      >
        <Avatar
          sx={{
            marginRight: "10px",
            backgroundColor: is_general ? "var(--text)" : "var(--bg)",
            color: is_general ? "var(--bg)" : "var(--text)",
          }}
        >
          {avatarText}
        </Avatar>
        <CardContent sx={{ padding: "0", textAlign: "left" }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            {name} {family_name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "italic", fontSize: "1rem" }}
          >
            {position}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
