
import { Box, Button, Card,  CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import CreateIngredientsForm from './CreateIngredientsForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsOfRestaurant, updateStockOfIngredient } from '../../component/State/Ingredients/IngAction';

const menu = [1,1,1,1,1
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const IngredientsTable = () => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  const {restaurant,ingredients} = useSelector(store=>store)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    dispatch(getIngredientsOfRestaurant({jwt, id:restaurant.usersRestaurant.id}))
  },[])

  const handleUpdateStoke = (id) => {

    dispatch(updateStockOfIngredient({jwt, id}))
    
  }

  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader 
            action={
                <IconButton onClick={handleOpen} aria-label="settings">
                     <CreateIcon /> 
                </IconButton>
            
            }
            title={"Ingredients"}
            sx={{pt:2,alignItems:"center"}}/>
        
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Avaibilty</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.ingredients.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleUpdateStoke(item.id)}>{item.inStoke?<span className='text-green-500'>in_stoke</span>:<span className='text-red-500'>out_of_stock</span>}</Button>
              </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Card>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CreateIngredientsForm/>

        </Box>
      </Modal>
    </Box>
  )
}


