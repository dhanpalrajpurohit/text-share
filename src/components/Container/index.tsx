import React, { useState } from 'react';
import { Box, Grid, TextField, Button, FormControl } from '@mui/material';
import QRCode from "react-qr-code";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function Container() {
  const [value, setValue] = useState("hello world");
  const [modalVisible, setModalVisible] = useState(false);
  const [qrValue, setQrValue] = useState('');

  const handleClickEvent = () => {
    console.log(value);
    setQrValue(value);
    setModalVisible(true);
  }

  const handleClose = () => {
    setModalVisible(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const Backdrop = styled('div')(({ theme }) => ({
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }));


  return (
    <div style={{backgroundColor:'#e6f6fe'}}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <img src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-software-developers-and-programmers-at-work-picture-image_8689569.png" alt="Your Image" style={{ width: '100%', height: '100%' }} />
        </Grid>
       
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              width: 1000,
              height: 500,
              maxWidth: '100%',
            }}
          >
            <FormControl
              sx={{
                width: 1000,
                height: 500,
                maxWidth: '100%',
              }}>
              <TextField
                id="my-input"
                fullWidth
                multiline
                rows={15}
                placeholder='Type or Paste Text To Share'
                onChange={(event) => setValue(event?.target.value)}
                InputProps={{ disableUnderline: true }}
                sx={{
                  height: 500,
                  "& fieldset": { border: 'none' },

                }}
              />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickEvent}
                  sx={{ marginRight: 0, backgroundColor:'#f88a50' }}
                >
                  Generate QR Code
                </Button>
              </div>

            </FormControl>
          </Box>
        </Grid>
        {modalVisible && (
          <Backdrop>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={modalVisible}
            >
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Scanner the QR Code
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent dividers sx={{ height: 400, width: 450 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <QRCode
                    style={{ height: "auto", maxWidth: "300", width: "300" }}
                    value={qrValue}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </DialogContent>
            </BootstrapDialog>
          </Backdrop>
        )}

      </Grid>
    </div>
  );
}

export default Container;
