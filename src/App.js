import React from 'react'
import { TableAppComponet } from "./component/TableAppComponet";
import { makeStyles } from '@material-ui/core/styles';
import { FormComponent } from './component/FormComponent'
import { InputComponent } from './component/InputComponent'
import { TextField } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export const App = () => {
  const styles = useStyle()
  return (
    <div className={styles.root} >
      <FormComponent />
      <TableAppComponet />
    </div >
  )
}
