import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IoCart, IoClose } from "react-icons/io5";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Cart</h1>

        <IoClose size={30} onClick={toggleDrawer(false)} />
      </div>
      <Divider />

      <div></div>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <IoCart size={30} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
