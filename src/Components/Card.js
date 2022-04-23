import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTranslation, withTranslation, Trans } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "wheat",
  border: "1px solid green",
  boxShadow: 24,
  p: 4,
};
const Card = ({ food }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t, i18n } = useTranslation();

  let curlang = i18n.language;
  return (
    <>
      <div onClick={() => handleOpen()} className="Card">
        <img src={food.img} alt="food img" />
        <div className="text">
          <h2>{food.name?.[curlang]}</h2>
          <p>{food?.price}</p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={food.img} alt="" />
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {/* {food.name} */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {food?.sastav?.map((s) => {
              return <span style={{ padding: "5px" }}>{s}</span>;
            })}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {food.price}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default Card;
