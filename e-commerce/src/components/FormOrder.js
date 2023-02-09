import { FormControl, Button, Box, Heading, Text, Divider } from "@chakra-ui/react"
import { useState } from "react"
import FormInput from "./FormInput"

const FormOrder = ({onGenerate, price}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onGenerate(name, email, phone)
    }


    return (
        <Box p='25px' width='20%' textAlign='center' marginInline='auto'>
            <Heading fontSize='xl' > Completa tus datos y confirmá la compra </Heading>
            <Divider m='20px' />
            <form onSubmit={handleSubmit}>
               <FormControl  isRequired >
                   <FormInput name='Nombre y Apellido' type='text' input={name} setInput={setName} />
                   <FormInput name='Email' type='email' input={email} setInput={setEmail} />
                   <FormInput name='Telefono' type='number' input={phone} setInput={setPhone} />
                   <Button type='submit' m='20px' colorScheme='green' >Confirmar</Button>
               </FormControl>
            </form>
            <Text >
                Total price: 
                <Text as='b' m='5px' >${price}</Text>
            </Text>
        </Box>
    )
}

export default FormOrder