import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { motion } from "framer-motion";

function SelectBox({ label, delay = 0 }) {
  const [value, setValue] = useState("");
  return (
    <motion.div
      initial={{ width: 150, scale: 0 }}
      animate={{ scale: .85 }}
      transition={{ delay }}
    >
      <FormControl variant="outlined" sx={{  width: "100%"}}>
        <InputLabel  id={label}>{label}</InputLabel>
        <Select
          sx={{display:"flex",padding:1}}
          labelId={label}
          name={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Location"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem  value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </motion.div>
  );
}

export default SelectBox;
