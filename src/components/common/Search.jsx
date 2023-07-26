import { motion } from "framer-motion";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function Search({ value, dispatch }) {
  function handleChange(e) {
    dispatch({ type: "rent/search", payload: e.target.value });
  }

  function handleClear() {
    dispatch({ type: "rent/resetSearch"});
  }
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      animate={{ width: "300px" }}
      transition={{ duration: 1 }}
    >
      <TextField
        value={value}
        placeholder="search your house"
        name="search"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: value === "" ? "none" : "flex" }}
              onClick={handleClear}
            >
              <CloseIcon />
            </InputAdornment>
          ),
        }}
      />
    </motion.div>
  );
}

export default Search;
