import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  onPrevPage: () => void;
  onNextPage: () => void;
  page: number;
}

const ButtonPagination = ({ onPrevPage, onNextPage, page }: Props) => {
  const theme = useTheme();

  const smallDevices = useMediaQuery(theme.breakpoints.down(1300));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: smallDevices ? 2 : 5,
        marginBottom: 2,
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        size={smallDevices ? "small" : "medium"}
        onClick={onPrevPage}
      >
        Prev
      </Button>
      <Typography>{page}</Typography>
      <Button
        variant="outlined"
        onClick={onNextPage}
        size={smallDevices ? "small" : "medium"}
      >
        Next
      </Button>
    </Box>
  );
};

export default ButtonPagination;
