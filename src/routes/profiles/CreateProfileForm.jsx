import { Button } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { uniqueID } from "../../utils/faker-db-generation";
import { faker } from "@faker-js/faker";
import React from "react";
import { AppContext } from "../../providers/AppProvider/AppContext";

export default function CreateProfileForm() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [profile, setProfile] = React.useState(null);
  const { dispatch } = React.useContext(AppContext);

  function onNameChange(e) {
    setProfile({
      name: e.target.value,
      id: uniqueID(),
      profilePic: faker.image.avatar(),
      userId: 1,
    });
  }
  function onSave() {
    dispatch({
      type: "create-profile",
      payload: profile,
    });
    onClose();
  }
  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create New Profile
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="text" label="Name" onChange={onNameChange} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onSave}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
