import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, ActionIcon } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import ModalAuth from "./ModalAuth";
import { useSelector } from "react-redux";
import HeaderMenu from "../header-menu/HeaderMenu";
import { userSelector } from "../../redux/selectors";

export default function ModalFilms() {
  const [opened, { open, close }] = useDisclosure(false);
  const userState = useSelector(userSelector);

  return (
    <>
      <Modal opened={opened} onClose={close} xOffset="0vw">
        {!userState.isAuth && <ModalAuth close={close} />}
      </Modal>

      <Group position="center">
        {userState.isAuth ? (
          <HeaderMenu />
        ) : (
          <ActionIcon onClick={open}>
            <IconUserCircle />
          </ActionIcon>
        )}
      </Group>
    </>
  );
}
