export default function Testimonios() {
  const testimonios = [
    { ciudad: "Girona", texto: "Una lectura muy clara y directa. Me ayudó muchísimo." },
    { ciudad: "Barcelona", texto: "César tiene un don especial. Muy recomendable." },
    { ciudad: "España", texto: "Orientación profunda y precisa. Volveré sin duda." },
  ];

  return (
    <section className="pergamino max-w-2xl mx-auto p-8 my-12">
      <h2 className="text-3xl text-center mb-6">Testimonios</h2>

      <div className="flex flex-col gap-6">
        {testimonios.map((t, i) => (
          <div key={i} className="text-lg">
            <p className="italic">"{t.texto}"</p>
            <p className="text-right mt-2">— {t.ciudad}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
