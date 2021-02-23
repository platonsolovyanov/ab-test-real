import React from 'react'
import { TableAppComponet } from "./component/TableAppComponet";
import { makeStyles } from '@material-ui/core/styles';
import { FormComponent } from './component/FormComponent'
import { useDispatch } from 'react-redux';
import { getResponse } from './redux/TableApp/reduser'
import { Input, TextField } from '@material-ui/core';


const useStyle = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: "770px"
  },
  input: {
    fontFamily: 'Ubuntu',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#5D6D97',
  }
})



export const App = () => {

  const styles = useStyle()
  const dispatch = useDispatch()

  fetch('http://localhost/get', { method: 'GET' })
    .then(response => response.json())
    .then(json => dispatch(getResponse(json)))
    .catch(err => console.log(err))

  return (
    <div className={styles.root}>
      <div className={styles.wrapper} >
        {/* <Input className={styles.input} input></Input> */}
        <TextField className={styles.input}></TextField>
        <FormComponent />
        <TableAppComponet />

      </div >
    </div>
  )
}
