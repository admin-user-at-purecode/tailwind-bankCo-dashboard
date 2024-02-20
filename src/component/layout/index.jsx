import Sidebar from "./sidebar/index";
import SidebarV2 from "./sidebar/SidebarV2";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import { useState } from "react";
import { createContext } from "react";
import HomeTwo from "../../pages/homeTwo";

export const ThemeContext = createContext(null);

function Overlay() {
    return (
        <div
            style={{ zIndex: "25" }}
            className="aside-overlay fixed left-0 top-0 block h-full w-full bg-black bg-opacity-30 sm:hidden"
        ></div>
    );
}

function Layout({ bg, overlay }) {
    const [sidebar, setSidebar] = useState(true);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") === "" || localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : ""
    );

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div
                className={`layout-wrapper ${
                    sidebar && "active"
                }  w-full dark:bg-darkblack-600 `}
                style={{
                    borderColor: "#2a313c",
                }}
            >
                <div className="relative flex w-full">
                    <Sidebar handleActive={() => setSidebar(!sidebar)} />
                    {overlay ? overlay : <Overlay />}
                    <SidebarV2 />
                    <div
                        className={`body-wrapper flex-1 overflow-x-hidden ${
                            bg ? bg : "dark:bg-darkblack-500"
                        } `}
                    >
                        <HeaderOne handleSidebar={() => setSidebar(!sidebar)} />
                        <HeaderTwo handleSidebar={() => setSidebar(!sidebar)} />
                        <HomeTwo />
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default Layout;
