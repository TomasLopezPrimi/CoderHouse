import { FormLabel, Input } from "@chakra-ui/react"

const FormInput = ({name, type, input, setInput}) => {
  
    const handleInputChange = (e) => setInput(e.target.value)


    return (
        <>
            <FormLabel>{name}</FormLabel>
            <Input type={type} value={input} placeholder={name} onChange={handleInputChange} />
        </>
    )
}

export default FormInput