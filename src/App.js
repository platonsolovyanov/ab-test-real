import React from 'react'
import { TableAppComponet } from "./component/TableAppComponet";
import { makeStyles } from '@material-ui/core/styles';
import { FormComponent } from './component/FormComponent'
import { InputComponent } from './component/InputComponent'


const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  wrapper: {
    width: "770px"
  }
})

export const App = () => {
  const styles = useStyle()
  return (
    <div className={styles.wrapper} >
      <FormComponent />
      <TableAppComponet className={styles.root} />
    </div >
  )
}
