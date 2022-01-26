import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import { menuItems } from "../config/menuConfig";

const Navbar = () => {
  const menuItem = menuItems.map((item, index) => (
    <Link href={item.path} passHref key={index}>
      <MenuItem icon={item.icon}>{item.label}</MenuItem>
    </Link>
  ));
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            color="red.400"
          />
          <MenuList>{menuItem}</MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
