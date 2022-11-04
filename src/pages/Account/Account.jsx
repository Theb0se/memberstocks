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
import axios from "axios";
import React from "react";
import { useState } from "react";
import { DataState } from "../../Context/DataContext";
import "./Account.css";

function Account() {
  const { user, setisLogin, isLogin } = DataState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [NewEmail, setNewEmail] = useState();
  const [password, setpassword] = useState();
  const [NewPass, setNewPass] = useState();
  const [cnfPass, setcnfPass] = useState();
  const [isLoadingpass, setisLoadingpass] = useState(false);
  const [isLoadingEmail, setisLoadingEmail] = useState(false);
  const toast = useToast();

  // email change

  const ChnageEmail = () => {
    setisLoadingEmail(true);
    const data = {
      email: NewEmail,
      password: password,
      userId: user.id,
      currEmail: user.email,
    };

    axios
      .post("https://smmboostclub.herokuapp.com/user/updateEmail", data)
      .then(function (response) {
        console.log(response.data);
        const userData = JSON.stringify(response.data);
        localStorage.setItem("user", userData);
        setisLogin(isLogin ? false : true);
        setisLoadingEmail(false);
        setNewEmail("");
        setpassword("");
        toast({
          title: "Email Changed",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
      })
      .catch(function (error) {
        toast({
          title: error.response.data,
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
        setisLoadingEmail(false);
      });
  };

  // password Change
  const changePass = () => {
    if (!password || !NewPass || !cnfPass) {
      toast({
        title: "Please Fill All The Fields",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    } else if (NewPass !== cnfPass) {
      toast({
        title: "Password Does Not Match",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    } else {
      setisLoadingpass(true);
      const data = {
        email: user.email,
        userId: user.id,
        currPassword: password,
        password: NewPass,
      };
      axios
        .post("https://smmboostclub.herokuapp.com/user/updatePassword", data)
        .then(function (response) {
          setisLoadingpass(false);
          setNewPass("");
          setcnfPass("");
          setpassword("");
          toast({
            title: response.data,
            status: "success",
            duration: 1500,
            isClosable: true,
            position: "top",
          });
        })
        .catch(function (error) {
          setisLoadingpass(false);
          toast({
            title: error.response.data,
            status: "error",
            duration: 1500,
            isClosable: true,
            position: "top",
          });
        });
    }
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
                  isLoading={isLoadingEmail}
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
          value={password}
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
          value={NewPass}
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
          value={cnfPass}
          onChange={(e) => {
            setcnfPass(e.target.value);
          }}
        />
        <div className="btn">
          <Button
            size="md"
            mt="5"
            onClick={changePass}
            isLoading={isLoadingpass}
          >
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
