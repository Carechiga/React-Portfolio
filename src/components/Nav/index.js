import React from "react";

function Nav(props) {
    const { selectedTab, setSelectedTab } = props;

    return (
        <nav>
            <ul className="flex-row mobile-view">
                <li className={selectedTab === "About" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSelectedTab("About")}>About</span>
                </li>
                <li className={selectedTab === "Projects" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSelectedTab("Projects")}>Projects</span>
                </li>
                <li className={selectedTab === "Resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSelectedTab("Resume")}>Resume</span>
                </li>
                <li className={selectedTab === "Contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSelectedTab("Contact")}>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;