import hamburgerMenu from "./navbar.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) =>
{
    hamburgerMenu(".panel-btn",".panel",".menu a");
});
