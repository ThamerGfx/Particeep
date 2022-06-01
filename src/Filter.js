import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { selectCategory } from "./store/actions";
import { motion } from "framer-motion";


export default function Filter({ data }) {
  const [filterItem, setFilterItem] = useState([]);
  const dispatch = useDispatch();

  const handleShowCat = (itemTab) => {
    dispatch(selectCategory(itemTab));
  };

  useEffect(() => {
    data.forEach((c) => {
      if (!filterItem.includes(c.category)) {
        setFilterItem([...filterItem, c.category]);
      }
    });
  });
  return (
    <motion.div layout className="popular-filters">
      {filterItem.map((item) => (
        <div key={item} style={{ marginLeft: "1%", textAlign: "center" }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleShowCat(item)}
          >
            {item}
          </Button>
        </div>
      ))}
    </motion.div>
  );
}
