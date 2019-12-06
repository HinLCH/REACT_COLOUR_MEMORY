import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import {
  Button,
  Typography,
  Grid
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { TextField } from 'formik-material-ui'

import {savePlayersData} from '../util/function'

class ScoreFormDialog extends Component {

    updateData = (values) => {
        savePlayersData(values)
        window.location.reload()
    }

    render () {
       const { open, onClose, score } = this.props 
    
       const schemaConfig = {
         name: Yup.string()
             .required('Please enter your name')
        }

        const validationSchema = Yup.object().shape(schemaConfig)

        const initialValues = {
            name : '',
            score ,
        }

        return (
            <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open} fullWidth>
                <DialogTitle id='simple-dialog-title'>Congratulations!! You get {score} points</DialogTitle>
                <DialogContent dividers> 
                 <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={this.updateData}
                    enableReinitialize
                  >
                    {({ values }) => (
                      <Form>
                        <Typography variant='h6'>Name:</Typography>
                        <Field
                          name='name'
                         placeholder='name'
                          fullWidth
                          component={TextField}
                          variant='outlined'
                         />
                        <Grid container justify='flex-end'>
                          <Button type='submit' variant='contained'>
                            Submit
                          </Button>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </DialogContent>
              </Dialog>
            )
      }
}

export default ScoreFormDialog