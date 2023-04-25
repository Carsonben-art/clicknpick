
import { Box,Flex, Text,Input,Button,Select, NumberInputField,NumberInputStepper,NumberIncrementStepper
,NumberDecrementStepper,NumberInput } from "@chakra-ui/react";
import { useState,useRef } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./newProduct.css";

import "antd/dist/antd";

import UploadFile from "../../components/dropFile/UploadFile";
import { FormControl, FormLabel} from '@chakra-ui/react';

export default function AddProduct(){

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editorRef = useRef(null);
    const handleSubmit = (event) => {
       event.preventDefault();

        const productName = document.getElementById("name").value;
        const productCategory = document.getElementById("category").value;
        const price = document.getElementById("price").value;
        const unit = document.getElementById("unit").value;
        if (editorRef.current) {
            const editorState = editorRef.current.getEditorState();
            const contentState = editorState.getCurrentContent();
            const contentRaw = convertToRaw(contentState);
            const editorText = contentRaw.blocks.map(block => block.text).join("\n");
            console.log(editorText);
        }
        console.log(productName,productCategory,price,unit)
    }   

    return(
        <Box
        className = "newProduct" padding="2rem">
            <Text 
            fontWeight="bold" fontSize="2rem">
                New Product
            </Text>
            <FormControl isRequired>
            <FormLabel>Product Name:</FormLabel>
            <Input type='text'
            variant="flushed"
            id="name" />
           
            </FormControl>
            
            <FormControl isRequired>
                <FormLabel>Product Category:</FormLabel>
                <Select placeholder='Select category' variant="flushed" id="category">
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Cereals</option>
                    <option>Others</option>
                </Select>
                </FormControl>

            <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <NumberInput max={1000000} min={10} variant="flushed" id="price">
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl isRequired>
            <FormLabel> Units:</FormLabel>
            <Input type='text'
            variant="flushed"
            id="unit" />
           
            </FormControl>
            <Editor 
                marginTop="2rem"
                ref={editorRef}
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                wrapperStyle={{ width: 800, border: "1px solid gray" }}
            />
            <Flex padding="2rem" justifyContent="">
            <UploadFile />
            </Flex>
            <Flex justifyContent="right">
            <Button className="addProductButton"bg="green.400" color="#ffffff" onClick={handleSubmit}>Create</Button>
            </Flex>
        </Box>

    )
}