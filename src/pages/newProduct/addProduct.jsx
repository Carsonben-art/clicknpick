
import { Box,Flex, Text,Input,Button,Select, NumberInputField,NumberInputStepper,NumberIncrementStepper
,NumberDecrementStepper,NumberInput } from "@chakra-ui/react";
import { useState,useRef } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Firebase imports;
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";

import axios from "axios";

import "./newProduct.css";

import "antd/dist/antd";

import UploadFile from "../../components/dropFile/UploadFile";
import { FormControl, FormLabel} from '@chakra-ui/react';

import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";



export default function AddProduct(){

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editorRef = useRef(null);
    let desc = '';
    if(editorRef.current){
        const editorState = editorRef.current.getEditorState();
            const contentState = editorState.getCurrentContent();
            const contentRaw = convertToRaw(contentState);
            desc = contentRaw.blocks.map(block => block.text).join("\n");
            // console.log(editorText);
    }
    
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleClick = (e) =>{
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
              }
            },
            (error) => {
              // Handle unsuccessful uploads
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const product = ({...inputs, img:downloadURL, desc});
                addProduct(product, dispatch);
              });
            }
        );
    }

        
    //   console.log(file);
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
            name="name"
            onChange={handleChange}
            />
           
            </FormControl>
            
            <FormControl isRequired>
                <FormLabel>Product Category:</FormLabel>
                <Select placeholder='Select category' variant="flushed" name="category" onChange={handleChange}>
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Cereals</option>
                    <option>Others</option>
                </Select>
                </FormControl>

            <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <NumberInput max={1000000} min={10} variant="flushed" >
                    <NumberInputField name="price" onChange={handleChange} />
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
            name="unit"
            onChange={handleChange} />
           
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
                // name="description"
                // onChange={handleChange}
            />
            <FormControl isRequired>
            <FormLabel> Image:</FormLabel>
            <Input type='file'
            variant="flushed"
            accept = ".png,.jpg,.jpeg"
            name="image"
            onChange={e => setFile(e.target.files[0])} />
           
            </FormControl>
            {/* <Flex padding="2rem" justifyContent="">
            <UploadFile />
            </Flex> */}
            <Flex justifyContent="right">
            <Button className="addProductButton"bg="green.400" color="#ffffff" onClick={handleClick}>Create</Button>
            </Flex>
        </Box>

    )
}