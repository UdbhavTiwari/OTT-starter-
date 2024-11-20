import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useState } from "react";

export const AuthUserPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  function showPopover() {
    console.log("on hover executed");
    setIsOpen(true);
  }

  function hidePopover() {
    setIsOpen(false);
  }
  return (
    <div onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      <Popover
        isOpen={isOpen}
        triggerType="menu"
        placement="bottom"
        showArrow={true}
      >
        <PopoverTrigger>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
