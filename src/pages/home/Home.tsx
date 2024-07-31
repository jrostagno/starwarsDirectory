import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import MainLayout from "../../layouts/MainLayout";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useEffect, useState } from "react";

import InnerContent from "../../components/content/GeneralContent";
import GeneralContent from "../../components/content/GeneralContent";

import { getAllStarWarPeople } from "../../actions/get-people";
import { useQuery } from "@tanstack/react-query";
import EmptyState from "../../components/states/EmptyState";
import { useTheme } from "@mui/material/styles";
import ButtonPagination from "../../components/pagination/Pagination";
import { useDebounceValue } from "../../hooks/useDebounce";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const theme = useTheme();

  const [searchInput, setSearchInput] = useState<string>("");
  const [localSearch, setLocalSearch] = useState<string>("");

  const [isFilterByName, setIsFilterByName] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);

  const debounceValue = useDebounceValue(searchInput);

  const smallDevices = useMediaQuery(theme.breakpoints.down(1300));
  const handleInputChange = (search: string) => {
    setIsFilterByName(true);
    setSearchInput(search);
  };

  const handleLocalSearche = (search: string) => {
    setLocalSearch(search);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["people", { page, debounceValue }],
    queryFn: () => getAllStarWarPeople(page, debounceValue),
    staleTime: 60 * 1000 * 1000,
    // keepPreviousData: true,
  });

  useEffect(() => {
    if (searchInput === "") {
      setIsFilterByName(false);
    }
  }, [searchInput]);

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
              STAR WARS PEOPLE
            </Typography>

            <TextField
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
              placeholder="Search people..."
              size="medium"
            />

            <Box
              sx={{
                width: "auto",
                minHeight: 393,
                marginTop: 7,
              }}
            >
              <Box
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: isFilterByName ? "none" : "flex",
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
                <CircularProgress sx={{ marginTop: 15 }} size={40} />
              ) : data && data.length > 0 ? (
                <Masonry columns={smallDevices ? 4 : 7} spacing={2}>
                  {data
                    .filter(
                      (el) =>
                        el.homeword_name
                          ?.toLocaleLowerCase()
                          .includes(localSearch.toLocaleLowerCase()) ||
                        el.name
                          ?.toLocaleLowerCase()
                          .includes(localSearch.toLocaleLowerCase()) ||
                        el.spcies_name
                          ?.toLocaleLowerCase()
                          .includes(localSearch.toLocaleLowerCase())
                    )
                    .map((data, index) => (
                      <Item
                        key={index}
                        sx={{
                          height: data.height,
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
                          {data.homeword_name}
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                          {data.spcies_name}
                        </Typography>
                      </Item>
                    ))}
                </Masonry>
              ) : (
                <EmptyState
                  title={"No data available"}
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

export default Home;
