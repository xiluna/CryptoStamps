import React from "react"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Button from "@mui/material/Button"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Link as RouterLink } from "react-router-dom"

const Item = (props) => {
  const { carrier, service, delivery_days, rate } = props
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {service}
      </TableCell>
      <TableCell>{carrier}</TableCell>
      <TableCell>{delivery_days} Business Days</TableCell>
      <TableCell>${rate}</TableCell>
      <TableCell align="right">
        <Button
          component={RouterLink}
          to="/cart"
          variant="outlined"
          endIcon={<AddCircleIcon />}
        >
          Add to Cart
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default Item