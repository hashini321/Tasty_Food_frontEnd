import { Avatar, Box, Card,  CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFoodAction, getMenuItemsByRestaurantId } from '../../component/State/Menu/MenuAction';


export const MenuTable = () => {
  const dispatch=useDispatch()
  const jwt = localStorage.getItem("jwt")
  const{restaurant, ingredients,menu} = useSelector((state) => state)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getMenuItemsByRestaurantId({
      jwt,
      restaurantId:restaurant.usersRestaurant.id,
      vegetarian: true,
      nonveg: false,
      seasonal: false,
      foodCategory:""
      

      }))
  },[])

  const handleDeleteFood =(foodId)=>{
    dispatch(deleteFoodAction({foodId,jwt}))
  }

  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader 
            action={
                <IconButton onClick={()=> navigate("/admin/restaurant/add-menu")}>
                     <CreateIcon /> 
                </IconButton>
            
            }
            title={"Menu"}
            sx={{pt:2,alignItems:"center"}}/>
        
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="left">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Ingredient</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Avaibilty</TableCell>
            <TableCell align="right">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {menu.menuItems.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Avatar src={item.images[0]}></Avatar>
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.ingredients.map((ing)=><Chip label={ing.name}/> )}</TableCell>
              <TableCell align="right">LKR{item.price}</TableCell>
              <TableCell align="right">{item.available?<span className='text-green-500'>in_stoke</span>:<span className='text-red-500'>out_of_stock</span>}</TableCell>
              <TableCell align="right"><IconButton color='primary' onClick={()=>handleDeleteFood(item.id)}><DeleteIcon/></IconButton></TableCell>
  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Card>
      
    </Box>
  )
}


