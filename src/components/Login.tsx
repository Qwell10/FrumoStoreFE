import { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  backgroundColor: "theme.palette.background.default",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  width: "100%",
  maxWidth: 400,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: "100%",
}));

function login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    console.log("username:", nickname);
    console.log("password: ", password);
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          nickname,
          password,
        },

        {
          timeout: 5000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login response:", response.data);

      if (response.data.success) {
        console.log("Login successful:", response.data);
        navigate("/goods");
      } else {
        console.log("Login failed:", response.data.message);
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <StyledContainer>
      <StyledBox>
        <Typography variant="h5" align="center" gutterBottom>
          Přihlášení
        </Typography>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Uživatelské jméno"
            variant="outlined"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            fullWidth
            required
          />
          <StyledTextField
            label="Heslo"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <Button variant="contained" onClick={handleSubmit}>
            Přihlasit se
          </Button>
        </form>
      </StyledBox>
    </StyledContainer>
  );
}

export default login;
