import React from 'react'
import { TableAppComponet } from "./component/TableAppComponet";
import { makeStyles } from '@material-ui/core/styles';
import { FormComponent } from './component/FormComponent'


const useStyle = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: "770px"
  }
})

export const App = () => {
  const styles = useStyle()
  return (
    <div className={styles.root}>
      <div className={styles.wrapper} >
        <FormComponent />
        <TableAppComponet />
      </div >
    </div>
  )
}
