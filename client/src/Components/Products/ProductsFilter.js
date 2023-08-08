import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BsChevronDown } from "react-icons/bs";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const ProductsFilter = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Price Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <input
            placeholder="₹ min price"
            className="w-full border border-black-500 rounded px-2 text-sm py-2"
          />
          <input
            placeholder="₹ max price"
            className="w-full border border-black-500 rounded px-2 text-sm py-2 mt-2"
          />
          <button className="w-full mt-2 bg-[rgb(237,242,247)] border border-[rgb(237,242,247)] py-1 rounded">
            Apply
          </button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Small" />
            <FormControlLabel control={<Checkbox />} label="Medium" />
            <FormControlLabel control={<Checkbox />} label="Large" />
          </FormGroup>
          <button className="w-full mt-2 bg-[rgb(237,242,247)] border border-[rgb(237,242,247)] py-1 rounded">
            Apply
          </button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel2a-content"
          id="panel3a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Clothes" />
            <FormControlLabel control={<Checkbox />} label="Shoes" />
          </FormGroup>
          <button className="w-full mt-2 bg-[rgb(237,242,247)] border border-[rgb(237,242,247)] py-1 rounded">
            Apply
          </button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel2a-content"
          id="panel4a-header"
        >
          <Typography>Colour</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Black" />
            <FormControlLabel control={<Checkbox />} label="White" />
            <FormControlLabel control={<Checkbox />} label="Green" />
            <FormControlLabel control={<Checkbox />} label="Red" />
            <FormControlLabel control={<Checkbox />} label="Blue" />
          </FormGroup>
          <button className="w-full mt-2 bg-[rgb(237,242,247)] border border-[rgb(237,242,247)] py-1 rounded">
            Apply
          </button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductsFilter;
