import { MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { motion } from "framer-motion";

function SelectBox({ value, dispatch, label, delay = 0, options }) {
  function handleChange(e) {
    dispatch({
      type: "rent/select",
      payload: { [e.target.name]: e.target.value },
    });
  }

  return (
    <motion.div
      initial={{ width: 150, scale: 0 }}
      animate={{ scale: 0.85 }}
      transition={{ delay }}
    >
      <FormControl variant="outlined" sx={{ width: "100%" }}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          sx={{ display: "flex", padding: 1 }}
          labelId={label}
          name={label.toLowerCase().split(" ").join("")}
          value={value}
          onChange={handleChange}
          label="Location"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((value, idx) => (
            <MenuItem key={idx} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </motion.div>
  );
}

export default SelectBox;
