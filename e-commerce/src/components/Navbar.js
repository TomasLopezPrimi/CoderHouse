//Librerias
import { 
  HStack, 
  Breadcrumb, 
  BreadcrumbLink, 
  BreadcrumbItem,
  ButtonGroup,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Image,
  Button, 
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {ChevronRightIcon, HamburgerIcon} from '@chakra-ui/icons'

//Components/context
import CartWidget from "./CartWidget";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


export default function Navbar(){

  const {totalQuantity} = useContext(CartContext)


  return (
  <HStack 
    p='25px' 
    spacing='auto' 
    fontSize={{ base: '25px', md: '20px', lg: '30px' }} 
    boxShadow='0 0 10px'
    fontFamily='Montserrat, sans-serif'
    fontWeight='semibold' >

    {/* Para escritorio: */}

    <Breadcrumb 
      display={{base: 'none', md:'block', lg: 'block'}}
      spacing='8px' 
      separator={<ChevronRightIcon color='gray.500' />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/'>
          <Image src='/logo.png' h='6vw' bg='yellow.400' borderRadius='15px' href='/' />
        </BreadcrumbLink>
        </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="category/men">Ropa Hombres</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem >
        <BreadcrumbLink as={Link} to="/category/women">Ropa Mujeres</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    {/* Para mobile: */}

    <Menu>
      <MenuButton
      w='10vw'
      h='10vw'
      display={{base: 'flex', md:'none', lg: 'none'}}
      position='absolute'
      left='7vw'
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon />}
      variant='outline' />
      <MenuList >
        <MenuItem>
          <Link to="/">Primi's</Link>
        </MenuItem>
        <MenuItem> <Link to="category/men">Men</Link></MenuItem>
        <MenuItem> <Link to="/category/women">Women</Link></MenuItem>
      </MenuList>
    </Menu>
    <ButtonGroup alignItems='center' spacing='5'>
      { totalQuantity > 0 && (
        <CartWidget />)}
      <Button fontStyle='italic' fontSize='2xl' >Iniciar Sesión</Button>
    </ButtonGroup>
  </HStack>
  )
}