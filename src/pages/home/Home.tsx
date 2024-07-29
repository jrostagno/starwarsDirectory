import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
import { starWarApi } from "../../config/api/starWarsAPI";
import InnerContent from "../../components/content/GeneralContent";
import GeneralContent from "../../components/content/GeneralContent";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getResponse = async () => {
      const response = await starWarApi.get("/people/?search='Luke Skywalker");

      setData(response.data);
    };

    getResponse();
  }, []);
  const test = [
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
    { name: "kskks" },
  ];

  console.log(data);

  return (
    <MainLayout>
      <GeneralContent>
        <InnerContent>
          <Stack sx={{ width: "100%" }}>
            <Typography fontSize={40}>
              STAR WARS PERSONALITIES fosinfosijfosjfosij
            </Typography>

            <TextField
              variant="standard"
              sx={{ width: 300, alignItems: "flex-start" }}
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

            <Box
              sx={{
                overflowY: "scroll",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                marginTop: "20px",
                display: "grid",
                gridColumnGap: "16px",
                gridRowGap: "8px",
                height: "100%",
                width: "100%",
                border: "1px solid red",
              }}
            >
              {test.map((t) => (
                <Box
                  sx={{
                    background: "red",
                    height: 100,
                    width: 100,
                    marginTop: 2,
                  }}
                >
                  <Typography>{t.name}</Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </InnerContent>
      </GeneralContent>
    </MainLayout>
  );
};

export default Home;
