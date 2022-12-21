import { 
  HStack, 
  Breadcrumb, 
  BreadcrumbLink, 
  BreadcrumbItem,
  ButtonGroup,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Image, 
} from "@chakra-ui/react";

import {ChevronRightIcon, HamburgerIcon} from '@chakra-ui/icons'
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import CartWidget from "./CartWidget";


export default function Navbar(){
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
        <BreadcrumbLink href="/">
          <Image src='/logo.png' h='6vw' bg='yellow.400' borderRadius='15px' href='/' />
        </BreadcrumbLink>
        </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/ropahombres'>Ropa Hombres</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem >
        <BreadcrumbLink href='/ropamujeres'>Ropa Mujeres</BreadcrumbLink>
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
          <Link href="/">Primi's</Link>
        </MenuItem>
        <MenuItem> <Link href="/ropahombres">Hombres</Link></MenuItem>
        <MenuItem> <Link href="/ropamujeres">Mujeres</Link></MenuItem>
      </MenuList>
    </Menu>
    <ButtonGroup alignItems='center' spacing='5'>
      <CartWidget />
      <Link fontStyle='italic' fontSize='2xl' >Iniciar Sesión</Link>
      {/* <ColorModeSwitcher /> */}
    </ButtonGroup>
  </HStack>
  )
}