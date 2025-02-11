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

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: "100%",
}));

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      console.log("Login succesful:", response.data);
      navigate("/goods");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <StyledButton variant="contained" color="primary" type="submit">
            Přihlásit
          </StyledButton>
        </form>
      </StyledBox>
    </StyledContainer>
  );
}

export default login;
