import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { DataState } from "../../Context/DataContext";
import "./Account.css";

function Account() {
  const { user } = DataState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [NewEmail, setNewEmail] = useState();
  const [password, setpassword] = useState();
  const [NewPass, setNewPass] = useState();
  const [cnfPass, setcnfPass] = useState();
  const [isLoading, setisLoading] = useState(false);
  const toast = useToast();

  const changePass = () => {
    if (!password || !NewPass || !cnfPass) {
      toast({
        title: "Please Fill All The Fields",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    } else {
      setisLoading(true);
    }
  };

  const ChnageEmail = () => {
    console.log(user.email, NewEmail);
    setisLoading(true);
  };

  return (
    <div className="account">
      <div className="card emailchng">
        <label htmlFor="name">User Name</label>
        <input type="text" disabled value={user?.name} />

        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" disabled value={user?.email} />
        </div>

        <div className="model">
          <Button onClick={onOpen} mt="5" size="md" background="#ff8355">
            Change Email
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
            isCentered
            size={"sm"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader p="5">Change Email Address</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="emailChng">
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" disabled value={user?.email} />
                  <br />
                  <label htmlFor="newEmail">New Email</label>
                  <input
                    type="email"
                    id="newEmail"
                    value={NewEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                    }}
                  />
                  <br />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
              </ModalBody>

              <ModalFooter>
                <Button
                  size={"sm"}
                  colorScheme="red"
                  onClick={ChnageEmail}
                  isLoading={isLoading}
                >
                  Change Email Address
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div className="card password">
        <label htmlFor="currPass">Current Password</label>
        <input
          type="password"
          id="currPass"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="newPass">New Password</label>
        <input
          type="password"
          id="newPass"
          onChange={(e) => {
            setNewPass(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="cnfnewPass">Confirm New Password</label>
        <input
          type="text"
          id="cnfnewPass"
          onChange={(e) => {
            setcnfPass(e.target.value);
          }}
        />
        <div className="btn">
          <Button size="md" mt="5" onClick={changePass} isLoading={isLoading}>
            Change Password
          </Button>
        </div>
      </div>

      <div className="card timezone">
        <label htmlFor="timezone">
          <label>Time Zone</label>
          <select>
            <option selected>
              ( UTC + 5:30 ) Indian Standard Time , Sri Lanka Time
            </option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Account;
