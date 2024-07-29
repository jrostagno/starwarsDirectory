import { Box, Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import MainLayout from "../../layouts/MainLayout";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useEffect, useState } from "react";
import { starWarApi } from "../../config/api/starWarsAPI";
import InnerContent from "../../components/content/GeneralContent";
import GeneralContent from "../../components/content/GeneralContent";
import InputField from "../../components/SearchInput";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Planets = () => {
  //  const theme = useTheme();
  const [data, setData] = useState();
  const [searchInput, setSearchInput] = useState<string>("");
  useEffect(() => {
    const getResponse = async () => {
      const response = await starWarApi.get("/people/?search='Luke Skywalker");

      setData(response.data);
    };

    getResponse();
  }, []);

  console.log(data);

  const handleInputChange = (search: string) => {
    setSearchInput(search);
  };

  console.log(searchInput);

  return (
    <MainLayout>
      <GeneralContent>
        <InnerContent>
          <Stack sx={{ width: "100%", paddingTop: 10 }}>
            <Typography fontSize={70} textAlign={"start"}>
              STAR WARS PLANETS
            </Typography>

            <InputField
              value={searchInput}
              onChange={(e) => handleInputChange(e.target.value)}
              InputProps={{
                startAdornment: <SearchRoundedIcon fontSize="small" />,
              }}
            />

            <Box sx={{ width: 500, minHeight: 393 }}>
              <Masonry columns={4} spacing={2}>
                {heights.map((height, index) => (
                  <Item key={index} sx={{ height }}>
                    {index + 1}
                  </Item>
                ))}
              </Masonry>
            </Box>
          </Stack>
        </InnerContent>
      </GeneralContent>
    </MainLayout>
  );
};

export default Planets;
