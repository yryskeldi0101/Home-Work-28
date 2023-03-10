import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useEffect } from 'react'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllOrders } from '../../store/orders/order.thunk'

export default function AllOrders() {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    const meals = useSelector((state) => state.orders.meals)

    const date = (day) => {
        const formatDate = format(new Date(day), 'dd.MM.yy')
        return formatDate
    }

    const handleChangePage = (newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper
            sx={{
                width: '60%',
                overflow: 'hidden',
                marginLeft: '20rem',
                marginTop: '2rem',
            }}
        >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell sx={{ paddingLeft: '4rem' }}>
                                Meals
                            </TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ background: '#2b8bc7' }}>
                        {meals
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((meal) => (
                                <TableRow
                                    // eslint-disable-next-line no-underscore-dangle
                                    key={meal._id}
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                >
                                    <TableCell component="th" scope="row">
                                        <Name>{meal.user.name}</Name>
                                    </TableCell>

                                    <TableCell align="right" scope="row">
                                        <StyledUl>
                                            {meal.items.map((item) => (
                                                <li
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    key={item._id}
                                                >
                                                    <h2>{item.title} </h2>
                                                    <h3>
                                                        {' '}
                                                        price- {item.price}
                                                    </h3>
                                                    <h4>
                                                        count- {item.amount}
                                                    </h4>
                                                </li>
                                            ))}
                                        </StyledUl>
                                    </TableCell>

                                    <TableCell>
                                        <TotalPrice>
                                            {meal.totalPrice}
                                        </TotalPrice>
                                    </TableCell>
                                    <TableCell align="right" scope="row">
                                        <Dates>{date(meal.createdAt)}</Dates>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={meals.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

const StyledUl = styled.ul`
    list-style: none;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid black;
        border-radius: 20px;
        padding: 10px;
        margin-top: 10px;
        background-color: beige;
    }
    h2 {
        max-width: 200px;
        font-size: 15px;
    }
    h4 {
        font-size: 15px;
    }
    h3 {
        font-size: 15px;
    }
`
const Name = styled.h1`
    color: red;
    font-weight: 700;
    max-width: 300px;
`
const TotalPrice = styled.span`
    color: #ae0481;
    font-size: 20px;
    max-width: 200px;
    margin-left: 30px;
    font-weight: 900;
`
const Dates = styled.span`
    font-size: 15px;
    color: #1a0256;
    background-color: #e8df6b;
    padding: 5px;
    font-weight: 800;
`
