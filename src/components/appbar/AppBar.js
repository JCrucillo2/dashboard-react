import React from "react";

// 3rd-party Imports
import { IoNotificationsOutline } from "react-icons/io5";

// Developer Imports
import { AppBarStyles, AppBarItem, AppBarItems } from "./styles";
import { IconButton } from "./../../ui/buttons";

function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>Branding</AppBarItem>
                <AppBarItem>
                    <IconButton>
                        <IoNotificationsOutline color="tomato" size="1.75rem" />
                    </IconButton>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;
