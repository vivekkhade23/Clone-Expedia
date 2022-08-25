import {
    Box,
    Flex,
    // Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    // Tabs,
    Image,
    Tabs,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
    // AddIcon,
    // BellIcon,
    ChevronDownIcon,
  } from "@chakra-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate, useNavigate } from "react-router-dom";
  
  const Links = ["🌐"," English", "Support", "Trips"];
  
  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const auth =useContext(AuthContext);
  const navigate=useNavigate()
  console.log("auth",auth);
  const Logout=(e)=>{
e.preventDefault();
auth.handleLogout();
  }
  const moveTo=()=>{
    navigate("/login")
  }
    return (
      < Box    justifyContent={"space-around"}>
        <Box
    
          bg={useColorModeValue("white")}
          px={4}
        //   border={"1px solid grey"}
          justifyContent={"center"}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack alignItems={"center"}>
              <Box>
                <Image
                  src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2"
                  alt="Logo"
                  width={"100%"}
                  objectFit={"contain"}
                />
              </Box>
              <HStack>
              <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition='all 0.2s'
                    border={"none"}
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                  >
                    More Travel<ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Stays</MenuItem>
                    <MenuItem>Flights</MenuItem>
                    <MenuItem>Cars</MenuItem>
                    <MenuItem>Packages</MenuItem>
                    <MenuItem>Things To Do</MenuItem>
                    <MenuItem>Cruises</MenuItem>
                    <MenuItem>Deals</MenuItem>
                    <MenuItem>Groups&Meetings</MenuItem>
                  </MenuList>
                  </Menu>
                </HStack>
              <Flex alignItems={"center"} justifycontent={"left"} spacing={4}>
                <HStack
                  as={"nav"}
                  marginLeft={"870px"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
                </HStack>
              </Flex>
            </HStack>
            <Flex alignItems={"center"} justifyContent={"left"} spacing={4}>
              {/* <BellIcon boxSize={"1.5em"} /> */}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  // onClick={Navigate("/login")}
                >
                  {/* <Avatar
                    size={"sm"}
                    src='https://bit.ly/broken-link' 
                  /> */}
                 {auth.state.isAuth===true?<h3>{auth.state.name}</h3>: <h3>Signin</h3>}
                </MenuButton>
                <MenuList>
                <Button bgColor={"blue"} borderRadius={"5px"} maxW={"100%"}><Link >{auth.state.isAuth===true?<h3 onClick={Logout}>Logout</h3>:<h3 onClick={moveTo}>Signin</h3> }</Link></Button>
                {auth.state.isAuth===true?null: <Box><Link to="/login" ><Tabs>Signup,it's free</Tabs></Link>
                  <MenuItem>List of Favourites</MenuItem>
                  <MenuItem>Expedia Rewards</MenuItem>
                  <MenuDivider />
                  <MenuItem>Feedback</MenuItem></Box>}
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}  >
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink  key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
  
        <hr />
      </Box>
    );
  }