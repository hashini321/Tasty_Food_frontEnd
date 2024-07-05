import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo =[
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
    },
    {
      category:"Protein",
      ingredients:["Ground beef","Bacon strips"]
    },
]

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value");
  }
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
     <div className='lg:flex items-center justify-between'>
        <div className='lg:flex items-center lg:gap-5' >
            <img className='w-[7rem] h-[7rem] object-cover' src='https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg'
             alt=''/>
             <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-x1'>Burger</p>
                <p>Rs:900/=</p>
                <p className='text-gray-400'>nice food here</p>
             </div>
        </div>

     </div>
    </AccordionSummary>
    <AccordionDetails>
      <form>
        <div className='flex gap-5 flex-wrap'>
          {demo.map((item)=>( 
            <div> 
              <p>{item.category}</p>
              <FormGroup>
                {item.ingredients && item.ingredients.map((item) => (
                    <FormControlLabel  control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                ))} 
              </FormGroup>
            
            </div>
          ))}
        </div>
        <div className='pt-55'>
          <Button variant="contained" disabled={false} type="submit">{true?"Add to card":"Out of Stock"}</Button>
        </div>
      </form>
    </AccordionDetails>
  </Accordion>
  )
}

export default MenuCard