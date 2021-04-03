import { Dialog } from "@material-ui/core";

const ImageModal = ({ imageName, open, handleModal }) => {
  console.log(open);

  return (
    <Dialog
      open={open}
      onClose={handleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <img src={imageName} alt={imageName} />
    </Dialog>
  );
};

export default ImageModal;
