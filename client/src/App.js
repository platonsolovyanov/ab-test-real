import React from 'react'
import { TableAppComponet } from "./component/TableAppComponet";
import { makeStyles } from '@material-ui/core/styles';
import { FormComponent } from './component/FormComponent'
import { useDispatch } from 'react-redux';
import { getResponse } from './redux/TableApp/reduser'


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
  const dispatch = useDispatch()

  fetch('http://localhost:3001/get', { method: 'GET' })
    .then(response => response.json())
    .then(json => dispatch(getResponse(json)))
    .catch(err => console.log(err))

  return (
    <div className={styles.root}>
      <div className={styles.wrapper} >
        <FormComponent />
        <TableAppComponet />
      </div >
    </div>
  )
}
