import React from "react";
import Nav from "../Nav";

function Header(props) {
    const { selectedTab, setSelectedTab } = props;

    return (
        <header>
            <div>
                <h2> Chris Arechiga's Porfolio</h2>
            </div>
            <div>
                <Nav
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}></Nav>
            </div>
        </header>
    );
}

export default Header;