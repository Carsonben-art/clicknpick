import "./newProduct.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Box,Flex,Text,Input,Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
// import Upload from "antd/es/upload/Upload";
import "antd/dist/antd";
// import { Upload } from "antd";
import UploadFile from "../../components/dropFile/UploadFile";

export default function NewProduct() {
  return (
    <Box className="newProduct" padding="2rem">
      <Text fontWeight="bold" fontSize="2rem">New Product</Text>
      <form className="addProductForm">
        <Flex  alignItems="center">
          <Text>Product Name:  </Text>
          <Input placeholder="Name" required width="50%" variant="flushed" marginLeft="2rem"></Input>
        </Flex>
        <Flex alignItems="center">
          <Text>Product Category: </Text>
          <Select placeholder="Select Category" width="auto" variant="flushed"  marginLeft="2rem">
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Cereals</option>
          </Select>
        </Flex>
        <Flex alignItems="center">
          <Text>Price: </Text>
          <Input type="number" placeholder="Amount" required width="50%" variant="flushed"  marginLeft="2rem"></Input>
        </Flex>
        <Flex alignItems="center">
          <Text>Unit: </Text>
          <Input type="text" placeholder="Kgs" required width="50%" variant="flushed"  marginLeft="2rem"></Input>
        </Flex>
        <Text>Description</Text>
      <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: 800, border: "1px solid gray" }}
      />
      <Flex padding="2rem" justifyContent="">
        {/* <Upload.Dragger 
        multiple 
        listType="picture"
        accept=".png,.jpg,.jpeg"
        required
        action={"https://localhost:3000/"}>
          Drag & drop Files <br/> OR <br/>
          <Button>Upload</Button>
        </Upload.Dragger> */}
        <UploadFile />
        {/* <DropFileInput /> */}
      </Flex>
      <Flex justifyContent="right">
        <Button className="addProductButton"bg="green.400" color="#ffffff">Create</Button>
        </Flex>
      </form>
    </Box>
  );
}
