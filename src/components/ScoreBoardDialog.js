import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import {
    Box,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow
  } from '@material-ui/core'

import { sortAndRank } from '../util/function'

class ScoreBoardDialog extends Component {

    state = {
        currentPlayerScore : []
    }

    componentDidMount () {
        if ( window.localStorage.getItem('Players Data') ){
            let playerScore = window.localStorage.getItem('Players Data')
            playerScore = JSON.parse(playerScore)
            let rankedPlayer = sortAndRank(playerScore)
            this.setState({
                currentPlayerScore : rankedPlayer
            })
        } else {
            return
        }
    }

    render () {
        const { open, onClose } = this.props 
        const { currentPlayerScore } = this.state
        const showData =
            <div>
                <Box mx='auto'>
                    <Box border={1} borderColor='grey.300'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(currentPlayerScore === []
                                    ?   <TableRow>
                                            <TableCell>No Rank</TableCell>
                                            <TableCell>No Name</TableCell>
                                            <TableCell>No Score</TableCell>
                                        </TableRow>
                                    :   currentPlayerScore.map((row , id) => (
                                        <TableRow key={id}>
                                            <TableCell>{row['rank']}</TableCell>
                                            <TableCell>{row['name']}</TableCell>
                                            <TableCell>{row['score']}</TableCell>
                                        </TableRow>
                                    ))
                                    )}
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </div>
        return (
            <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open} fullWidth>
                <DialogTitle id='simple-dialog-title'>SCORE BOARD</DialogTitle>
                <DialogContent dividers> 
                    {showData}
                </DialogContent>
              </Dialog>
            )
      }
}

export default ScoreBoardDialog