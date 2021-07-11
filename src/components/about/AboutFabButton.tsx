import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

import "./button.css";

const AboutFabButton: React.FC<AboutFabButtonProps> = ({
  btnRef,
  onOpenInfoDrawer,
}) => {
  return (
    <div className="about-fab-button">
      <IconButton
        ref={btnRef}
        variant="outline"
        aria-label="Send email"
        color="white"
        bgColor="teal"
        isRound
        size="lg"
        onClick={onOpenInfoDrawer}
        icon={<HamburgerIcon />}
      />
    </div>
  );
};

export default AboutFabButton;
