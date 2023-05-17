import React from "react";

function Nav(props) {
    const { selectedTab, setSeletedTab } = props;

    return (
        <nav>
            <ul className="flex-row mobile-view">
                <li className={selectedTab === "About" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSeletedTab("About")}>About</span>
                </li>
                <li className={selectedTab === "Projects" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSeletedTab("aProjects")}>Projects</span>
                </li>
                <li className={selectedTab === "Resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSeletedTab("Resume")}>Resume</span>
                </li>
                <li className={selectedTab === "Contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setSeletedTab("Contact")}>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;