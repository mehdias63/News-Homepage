import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div>
      <div className="">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <header className="relative flex w-full items-center justify-between bg-white">
        <div
          className={`absolute right-0 top-0 ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((preMobileOpen) => !preMobileOpen)}
        >
          {mobileOpen ? (
            <img
              src="/images/icon-menu-close.svg"
              alt="Open"
              className="md:hidden"
            />
          ) : (
            <img
              src="/images/icon-menu.svg"
              alt="Close"
              className="md:hidden"
            />
          )}
        </div>
        <nav className={` ${mobileOpen ? "block" : "hidden md:block"}`}>
          <ul className="md:flex gap-3">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>New</a>
            </li>
            <li>
              <a>Popular</a>
            </li>
            <li>
              <a>Trending</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
