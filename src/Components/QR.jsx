import {  Box, Button, Center, Container, Flex, Heading, HStack, Image, Input, SimpleGrid, Stack, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// import styles from './mystyle.module.css'; 

export function Qrsection(){
    return <div>
         <SimpleGrid gap={"10px"}>
     
      <Stack width={"77%"} alignContent={"center"} justifyContent={"center"} marginLeft={"150px"} marginTop={"5%"}>
        <Box >
          <Image borderRadius={"10px"} src="https://a.travel-assets.com/travel-assets-manager/cmct-5255/POSa-HP-Hero-D-928x398.jpg" alt=""/>
      
        </Box>
        <Box  color={"white"}>
        <Text marginTop={"-355px"} marginLeft={"-600px"} fontWeight={"700"} fontSize={"29px"}> Save instantly with <br /> Expedia Rewards</Text>      
      <Text marginTop={"00px"} marginLeft={"-600px"}>You can enjoy access to perks like Member Prices,<br /> saving you 10% or more on select hotels. Terms <br /> may apply.</Text>
      <Button marginTop={"0px"} marginLeft={"-600px"}  backgroundColor={"#3662d8"}>See Member Prices</Button>
        </Box>
      </Stack>     
      <Stack width={"100%"} alignContent={"center"} justifyContent={"center"} marginLeft={"150px"}  marginTop={"5%"}>
        <Box width={"100%"}>
          <Image width={"77%"}  height={"400px"} marginBottom={"100px"} borderRadius={"10px"} src="https://a.travel-assets.com/travel-assets-manager/gmvd-1482-bookearly-emea/667x320.jpg" alt=""/>
        </Box>
        <Box>
            
        </Box>
      </Stack>       
      <Container maxWidth={"80%"} gap={2}>
          <Flex border={"1px solid grey"} borderRadius={"5px"} gap={4}>
          <Box maxW={"25%"}><Image boxSize={"200px"} objectFit={"cover"} src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg" alt="Images1"/></Box>
          <Box maxW={"50%"}>
            <Heading fontSize={"18px"}>Our app takes you further</Heading>
            <Text fontSize={"12px"}>When you book on the app you can save up to 25% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Text>
            <Heading fontSize={"12px"}>Text yourself a download link for easy access</Heading>
            <HStack>
            <Input placeholder="Countrycode"/><Input placeholder="Phone number"/><Button maxW={"2xl"}bgColor="blue" color={"white"}>app</Button>
            </HStack>
            <Text fontSize={"12px"}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
          </Box>
          <Box maxWidth={"25%"}><Image boxSize={"200px"} objectFit={"contain"} src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/1_QR_FOOTER_BNA_HP.png" alt="Qr code" />
          <Center><Text fontSize={"12px"}>Scan QR Code</Text></Center>
          </Box>
          </Flex>
       
      </Container>
    </SimpleGrid>

    </div>
}