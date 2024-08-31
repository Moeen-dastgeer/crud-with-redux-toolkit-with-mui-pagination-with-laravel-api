import React from 'react'
import { Container, Pagination } from '@mui/material'

export const Paginationsystem = () => {
  return (
    <Container>
        <Pagination count={10}/>
        <Pagination count={10} color='primary'/>
        <Pagination count={10} color='error'/>
        <Pagination count={10} color='secondary'/>
        <Pagination count={10} disabled/><br /><br />
        <Pagination count={10} variant='outlined'/>
        <Pagination count={10} variant='outlined' color='primary'/>
        <Pagination count={10} variant='outlined' color='error'/>
        <Pagination count={10} variant='outlined' color='secondary'/>
        <Pagination count={10} disabled/><br /><br />
        <Pagination count={10} variant='outlined' shape='rounded'/>
        <Pagination count={10} variant='outlined' color='primary' shape='rounded'/>
        <Pagination count={10} variant='outlined' color='error' shape='rounded'/>
        <Pagination count={10} variant='outlined' color='secondary' shape='rounded'/>
        <Pagination count={10} disabled shape='rounded'/><br /><br />
        <Pagination count={10} shape='rouned'/>
        <Pagination count={10} shape='rounded' color='primary'/>
        <Pagination count={10} shape='rounded' color='error'/>
        <Pagination count={10} shape='rounded' color='secondary'/>
        <Pagination count={10} shape='rounded' disabled/><br /><br />
        <Pagination count={10} variant='outlined' size='small'/>
        <Pagination count={10} variant='outlined' color='primary'/>
        <Pagination count={10} variant='outlined' color='error' size='large'/><br /><br />
        <Pagination count={10} variant='outlined' showFirstButton showLastButton/><br /><br />
    </Container>
  )
}
