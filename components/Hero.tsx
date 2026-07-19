export default function Page() {
  return (
    <main className="p-6">

      {/* TITULAR PRINCIPAL */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Tarot La Fortuna
      </h1>

      {/* HERO EN DOS COLUMNAS (MÓVIL-FIRST) */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6">

        {/* IMAGEN A LA IZQUIERDA */}
        <img 
          src="/img/encapuchado.png" 
          alt="Encapuchado" 
          className="mb-4 md:mb-0"
          style={{ width: "144px", height: "auto", maxWidth: "144px" }}
        />

        {/* TEXTO A LA DERECHA */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">Soy César</h2>
          <p className="opacity-90 leading-relaxed">
            Tarotista con experiencia en lecturas intuitivas y orientación personal.
            Te ayudo a entender tu situación y tomar decisiones con claridad.
          </p>
        </div>

      </section>

    </main>
  );
}
