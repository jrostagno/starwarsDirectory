import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MainLayout from "../../layouts/MainLayout";

const Home = () => {
  const test = [
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
  ];

  return (
    <MainLayout>
      <>
        <Typography>STAR WARS PERSONALITIES</Typography>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={""}
          onChange={(event) => {
            //   const cleanValue = removeExtraSpaces(event.target.value.toString()) as string;
            //   setQuery(cleanValue);
          }}
          placeholder="Search"
          size="small"
        />

        <Typography fontSize={40} marginTop={10}>
          'TEST{" "}
        </Typography>

        <Box
          sx={{
            overflowY: "scroll",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            marginTop: "20px",
            display: "grid",
            gridColumnGap: "16px",
            gridRowGap: "8px",
            height: "90%",
          }}
        >
          {test.map((t) => (
            <Box
              sx={{ background: "red", height: 100, width: 100, marginTop: 2 }}
            >
              <Typography>{t.name}</Typography>
            </Box>
          ))}
        </Box>
      </>
    </MainLayout>
  );
};

export default Home;
