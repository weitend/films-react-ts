import { Menu, ActionIcon } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import ButtonDeleteAccount from "../button-delete-account/ButtonDeleteAccount";
import classes from "./HeaderMenu.module.css";

export default function HeaderMenu() {
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon>
          <IconUserCircle />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item className={classes.menu}>
          <ButtonDeleteAccount />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
