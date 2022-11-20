import Link from "next/link";

const Navbar = (props) => {
  const { path } = props;
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <h1 className="font-bold text-4xl">
          simula<span className="font-semibold">cr.</span>
        </h1>
      </Link>
      <div className="space-x-10">
        <Link href="/testeador/nebula">Viamo</Link>
        <Link href="/testeador/viamo">Nebula</Link>
      </div>
    </div>
  );
};

export default Navbar;
