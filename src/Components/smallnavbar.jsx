
import { Box } from '@chakra-ui/react';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Smallnavbar() {
    const baseStyle = {
        color: "black",
        textDecoration: "none",
        marginLeft:"120px"
      };
      
      const activeStyle = {
        color: "#3662d8",
        textDecoration: "none",
        // border: "1px solid",
      padding: "10px",
      boxShadow: "0px 2px #3662d8",
      marginLeft:"120px",
      

      };
      
      
  return (
    <Box   w={"1000px"} marginLeft={"250px"}>
    <NavLink    style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/stays">Stays</NavLink>
    <NavLink    style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/flights">Flight</NavLink>
    <NavLink    style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/cars">Cars</NavLink>
    <NavLink    style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/packages">Packages</NavLink>
    <NavLink    style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/things">Things</NavLink>   
    
    </Box>
  )
}

export default Smallnavbar;