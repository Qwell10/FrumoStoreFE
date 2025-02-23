import { Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";


export default function goods() {
  const [weight, setWeight] = useState("");
  const [stockBalance, setActualStockBalance] = useState("");
  const [waste, setWaste] = useState("");
  const [boxes, setBoxes] = useState("");


  const handleClickSaveNewIncome = async () => {
    const newIncome = { weight };
    console.log(newIncome);

    try {
        const response = await fetch("http://localhost:8080/goods/newIncome", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newIncome),
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData?.message || response.statusText}`); 
        }

        console.log("New income goods was saved to database.");

    } catch (error) {
        console.error("Error saving new income:", error);
        alert("An error occurred while saving the income. Please try again later."); 
    } 
};

  const handleClickWaste = () => {
    const newWaste = {waste};
    fetch("http://localhost:8080/goods/waste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWaste),
    }).then(() => {
      console.log("Wased", newWaste ,"was saved to database");
    });
  };

  const handleClickBoxes = () => {
    const allBoxes = {boxes};
    fetch("http://localhost:8080/goods/outcome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allBoxes),
    }).then(() => {
      console.log("All boxes", allBoxes ,"was saved to database");
    });
  };

  const handleClickStockBalance = () => {
    axios
      .get("http://localhost:8080/goods/getActualStockBalance")
      .then((res) => {
        setActualStockBalance(res.data.weight),
          console.log("Actual stock balance: ", res.data);
      });
  };


  return (
    <Container
      component="form"
      sx={{
        "& > :not(style)": { m: 3, width: "ch" },
        "& .MuiOutlinedInput-root": {
          color: "black",
          "& fieldset": {
            borderColor: "black",
          },
          "&:hover fieldset": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
          },
        },
        "& .MuiInputLabel-root": {
          color: "black",
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          id="weight"
          label="NOVÝ PŘÍJEM"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Button variant="contained" onClick={handleClickSaveNewIncome}>
          Uložit
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <TextField 
        id="waste" 
        label="ODPAD" 
        variant="outlined"
        value={waste}
        onChange={(e)=>setWaste(e.target.value)}
        />
        <Button variant="contained" onClick={handleClickWaste}>
          Uložit
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          id="outcome"
          label="POČET BEDÝNEK"
          variant="outlined"
          value={boxes}
          onChange={(e) => setBoxes(e.target.value)}
        />
        <Button variant="contained" onClick={handleClickBoxes}>
          Uložit
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          id="stock-balance"
          label="AKTUÁLNÍ STAV SKLADU"
          variant="outlined"
          value={stockBalance}
        />
        <Button variant="contained" onClick={handleClickStockBalance}>
          Ukázat
        </Button>
      </Stack>
    </Container>
  );
}
