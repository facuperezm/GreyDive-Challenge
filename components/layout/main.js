// components/layout.js

import Navbar from "../Navbar";

export default function Main({ children, router }) {
  return (
    <div className="lg:px-48 lg:py-10 px-10 py-5 bg-gradient-to-b from-[#282643] to-[#41416d] text-[#ffffff] h-full min-h-screen">
      <Navbar path={router.asPath} />
      <main className="">{children}</main>
    </div>
  );
}
