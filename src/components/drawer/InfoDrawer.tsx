import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

/**
 * This component is used to see the information of this map
 */
function InfoDrawer({ isOpenInfoDrawer, onCloseInfoDrawer, btnRef }: any) {
  return (
    <>
      <Drawer
        isOpen={isOpenInfoDrawer}
        placement="right"
        onClose={onCloseInfoDrawer}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Map Information</DrawerHeader>

          <DrawerBody>
            <List>
              <ListItem></ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Oxygen ရရှိနိုင်သော နေရာများကို fact checking လုပ်၍
                ထည့်သွင်းပေးထားခြင်းဖြစ်ပါသည်။{" "}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                ၂နာရီခြားတစ်ခါ မြေပြင်နှင့်ဆက်သွယ်ပြီး Data
                ထည့်သွင်းပေးထားပါသည်။
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onCloseInfoDrawer}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default InfoDrawer;
