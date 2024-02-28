import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="relative flex w-full items-center justify-between lg:col-span-3">
      <div className="ml-4 mt-7">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-[2.81106rem] h-[1.75rem] md:w-[4rem] md:h-[2.5rem]"
        />
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"></div>
      )}

      <div
        className={`relative z-30 ml-auto mr-4 mt-7 block ${
          mobileOpen ? "open" : ""
        }`}
        onClick={() => setMobileOpen((preMobileOpen) => !preMobileOpen)}
      >
        {mobileOpen ? (
          <img
            src="/images/icon-menu-close.svg"
            alt="Open"
            className="md:hidden"
          />
        ) : (
          <img src="/images/icon-menu.svg" alt="Close" className="md:hidden" />
        )}
      </div>
      <nav
        className={`fixed right-0 top-0 z-20 h-full w-2/3 pl-6 pt-[9rem] bg-white md:relative md:pt-[2.7rem] md:w-auto md:mr-4 lg:mr-1 ${
          mobileOpen ? "block" : "hidden md:block"
        }`}
      >
        <ul className="flex flex-col gap-6 md:flex-row text-lg leading-6 md:gap-10">
          <li>
            <a className="link" href="#">Home</a>
          </li>
          <li>
            <a className="link" href="#">New</a>
          </li>
          <li>
            <a className="link" href="#">Popular</a>
          </li>
          <li>
            <a className="link" href="#">Trending</a>
          </li>
          <li>
            <a className="link" href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
