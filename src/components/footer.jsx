import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import {Link} from 'react-router-dom';

export default function App({loggedIn}) {
  let s
  if(loggedIn){
    s = {
    fontSize: '0.7rem',visibility:"hidden"
   }
  }
  else{
    s = {
      fontSize: '0.7rem',visibility:"visible"
     }
  }
  return (
    <MDBFooter id='footer' className='text-center text-white' style={{ minHeight: '30vh', backgroundColor: 'black', marginTop: '0.5rem' }}>
      <MDBContainer className='p-4 pb-0' style={{ backgroundColor: 'black' }}>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright Prabhjit Singh
        <div >
          <p style={s}>Admin? <Link style={{ fontSize: '0.7rem' }} to="login"> Log-in</Link></p>
        </div>
      </div>
    </MDBFooter>
  );
}