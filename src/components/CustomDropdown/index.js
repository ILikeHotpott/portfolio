'use client';

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";

export default function CustomDropdown() {

    // const user = useSelector(state => state.user);
    // const dispatch = useDispatch();
    // const {email, avatar} = user;

    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        as="button"
                        className="transition-transform"
                        src={avatar}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold text-black">{email}</p>
                    </DropdownItem>
                    <DropdownItem key="profile" className="text-black" href="/profile">
                        Profile
                    </DropdownItem>
                    <DropdownItem key="settings" className="text-black">
                        Settings
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" className="text-black">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
