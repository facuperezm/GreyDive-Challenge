import Link from "next/link";
import database from "../data/db.json";

export default function Home({ testers }) {
  return (
    <div className="mt-14">
      <h1 className="text-lg font-semibold">Bienvenidos a Simulacr.</h1>
      <p>
        A continuación podrán ver los siguientes test para nuestros clientes:
      </p>
      <div className="flex mx-6 justify-center items-center my-4">
        {testers.map((tester) => {
          return (
            <button className="capitalize font-bold mx-4 py-2 px-4 rounded-2xl shadow-sm pointer  bg-[#c70459] hover:bg-red-800 transition duration-300">
              <Link href={`/testeador/${tester.cliente}`}>
                {tester.cliente}
              </Link>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      testers: database,
    },
  };
}
