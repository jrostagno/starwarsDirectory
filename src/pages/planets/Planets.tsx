import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import MainLayout from "../../layouts/MainLayout";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";

import InnerContent from "../../components/content/GeneralContent";
import GeneralContent from "../../components/content/GeneralContent";
import { useQuery } from "@tanstack/react-query";
import { getAllStarWarPlanets } from "../../actions/search-planets";
import EmptyState from "../../components/states/EmptyState";
import ButtonPagination from "../../components/pagination/Pagination";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Planets = () => {
  const theme = useTheme();

  const [searchInput, setSearchInput] = useState<string>("");
  const [localSearch, setLocalSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const smallDevices = useMediaQuery(theme.breakpoints.down(1300));

  const { data, isLoading } = useQuery({
    queryKey: ["planets", { page, searchInput }],
    queryFn: () => getAllStarWarPlanets(page, searchInput),
    staleTime: 60 * 1000 * 1000,
    // keepPreviousData: true,
  });

  const handleLocalSearche = (search: string) => {
    setLocalSearch(search);
  };

  const handleInputChange = (search: string) => {
    setSearchInput(search);
  };

  const onNextPage = () => {
    if (!data) return;
    if (data?.length === 0) return;
    if (data?.length < 10) return;
    setPage(page + 1);
  };

  const onPrevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <MainLayout>
      <GeneralContent>
        <InnerContent>
          <Stack sx={{ width: "100%", paddingTop: 2 }}>
            <Typography fontSize={smallDevices ? 45 : 70} textAlign={"start"}>
              STAR WARS PLANETS
            </Typography>

            <TextField
              variant="standard"
              value={searchInput}
              onChange={(e) => handleInputChange(e.target.value)}
              InputProps={{
                startAdornment: <SearchRoundedIcon fontSize="medium" />,
              }}
              sx={{
                input: {
                  color: "black",
                  fontSize: smallDevices ? "0.8rem" : "1.3rem",
                  height: smallDevices ? "30px" : "50px",
                },
                height: smallDevices ? "30px" : "50px",
              }}
              placeholder="Search planets..."
              size="medium"
            />

            <Box sx={{ width: "auto", minHeight: 393, marginTop: 7 }}>
              <Box
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  marginTop: 5,
                  // display: isFilterByName ? "none" : "flex",
                }}
              >
                <ButtonPagination
                  page={page}
                  onPrevPage={onPrevPage}
                  onNextPage={onNextPage}
                />
                <TextField
                  value={localSearch}
                  onChange={(e) => handleLocalSearche(e.target.value)}
                  variant="standard"
                  sx={{ input: { color: "black" } }}
                  placeholder="Filter local"
                  size="small"
                />
              </Box>
              {isLoading ? (
                <CircularProgress size={50} />
              ) : data && data.length > 0 ? (
                <Masonry columns={smallDevices ? 4 : 7} spacing={2}>
                  {data
                    .filter(
                      (el) =>
                        el.name
                          ?.toLocaleLowerCase()
                          .includes(localSearch.toLocaleLowerCase()) ||
                        el.terrain
                          .toLocaleLowerCase()
                          .includes(localSearch.toLocaleLowerCase())
                    )
                    .map((data, index) => (
                      <Item
                        key={index}
                        sx={{
                          height: data.diameter,
                          minHeight: "130px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            marginBottom: 2,
                            color: "#0A192F",
                          }}
                        >
                          {data.name}
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                          {data.terrain === "unknown" ? "" : data.terrain}
                        </Typography>
                      </Item>
                    ))}
                </Masonry>
              ) : (
                <EmptyState
                  title={"No Planets available"}
                  subtitle={"Please try again"}
                />
              )}
            </Box>
          </Stack>
        </InnerContent>
      </GeneralContent>
    </MainLayout>
  );
};

export default Planets;
