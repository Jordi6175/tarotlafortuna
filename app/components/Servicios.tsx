export default function Servicios() {
  const servicios = [
    { nombre: "1 pregunta", precio: "5 €" },
    { nombre: "Consulta directa y clara (20 min)", precio: "15 €" },
    { nombre: "Consulta express amor y parejas", precio: "25 €" },
    { nombre: "Tirada 30 minutos", precio: "25 €" },
    { nombre: "Lectura completa y orientación (1 hora)", precio: "50 €" },
    { nombre: "Análisis profundo y guía completa", precio: "50 €" },
  ];

  return (
    <section className="pergamino max-w-2xl mx-auto p-8 my-12">
      <h2 className="text-3xl text-center mb-6">Servicios y Precios</h2>

      <div className="flex flex-col gap-4">
        {servicios.map((s, i) => (
          <div key={i} className="flex justify-between text-xl">
            <span>{s.nombre}</span>
            <span className="font-bold">{s.precio}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a href="https://wa.me/34622091189" className="btn grande">
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}
