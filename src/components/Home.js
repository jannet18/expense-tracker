import React, { useState } from 'react';
import { Button, Container, Dialog, Typography } from '@mui/material';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';
// import { useAuth } from '../firebase/auth';

const Home = () => {
    const [login, setLogin] = useState(false);

    const REDIRECT_PAGE = '/header';
  // configure firebaseui
  const uiConfig = {
    signInFlow: '/popup',
    signInSuccessUrl: REDIRECT_PAGE,
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID

    ]
  }
  return (
<>
    <h1>
        <title>Expense tracker</title>
    </h1>
         <main>
        <Container className="container">
          <Typography variant="h1">Welcome to Expense Tracker!</Typography>
          {/* <Typography variant="h2">Add, view, edit, and delete expenses</Typography> */}
          <div className="btn">
            <Button variant="contained" color="secondary"
                    onClick={() => setLogin(true)}>
              Login / Register
            </Button>
          </div>
          <Dialog onClose={() => setLogin(false)} open={login}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
          </Dialog>
        </Container>
      </main>
      </>



  )
}

export default Home;