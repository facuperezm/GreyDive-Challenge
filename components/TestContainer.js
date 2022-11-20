export default function Items({ data, idx }) {
  const { transcripcion, preguntas, linkVideo, cliente, escenario } = data;
  return (
    <>
      <div className="flex flex-col px-10 space-y-5 h-full min-h-screen">
        <h1 className="font-bold text-4xl capitalize mt-16">{cliente}</h1>
        <h2 className="font-semibold text-2xl">Test: {escenario}</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe frameBorder="0" src={linkVideo} allowfullscreen></iframe>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-semibold">Transcripción</h1>
          <div className="h-52 contain overflow-y-scroll px-5 mb-3 ">
            {transcripcion}
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Tareas</h1>
            <h2 className="border-b py-4 my-4 border-b-2 font-semibold">
              Escenario: {escenario}
            </h2>
            {preguntas.map((item, index) => (
              <div key={item.texto} className="border-b-2">
                <div className="my-4">
                  <h2 className="text-xl font-semibold">Tarea {index + 1}:</h2>
                  <h3 className="text-xl font-semibold">{item.texto}</h3>
                </div>
                <p className="text-xl font-semibold my-2">
                  Respuesta: {item.respuesta}
                </p>
                <p className="text-lg text-red-400 my-2">
                  Duración de la tarea: {item.tiempo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// - Cliente
// - Testeador
// - Url del video
// - Tareas
// - Transcripción
