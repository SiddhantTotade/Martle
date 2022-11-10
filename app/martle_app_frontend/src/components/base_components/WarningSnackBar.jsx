import * as React from 'react';
import { SnackbarProvider } from 'notistack';
import { Snackbar } from '@mui/material';

export default class WarningSnackBar extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div>
        <SnackbarProvider maxSnack={3}>
          <React.Fragment>
            <Snackbar />
          </React.Fragment>
        </SnackbarProvider>
      </div>
    )
  }
}