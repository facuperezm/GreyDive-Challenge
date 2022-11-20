import TestContainer from "../../components/TestContainer";
import database from "../../data/db.json";

export default function Cliente({ testers }) {
  return (
    <div className="h-full min-h-screen">
      <TestContainer data={testers} />
    </div>
  );
}

export function getStaticProps(context) {
  const cliente = context.params?.cliente;
  const data = database;
  const found = data.find((item) => cliente === item.cliente);
  if (!found) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      testers: found,
    },
  };
}

export async function getStaticPaths() {
  const tester = database;
  return {
    paths: tester
      .map((item) => {
        const cliente = item.cliente;
        return {
          params: {
            cliente,
          },
        };
      })
      .filter(({ params }) => !!params.cliente),
    fallback: false,
  };
}
