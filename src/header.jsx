import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";


function Header() {
  return (
    <header class='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
      <h1>
        <LibraryBooksIcon> </LibraryBooksIcon> Keeper App
      </h1>
    </header>
  );
}

export default Header;
