export default function Page() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/img/fondoweb.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* TÍTULO */}
      <h1
        className="titulo-mistico"
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "900",
          color: "#FFD700",
          fontFamily: "'UnifrakturCook', 'Cinzel', serif",
          letterSpacing: "4px",
        }}
      >
        TAROT LA FORTUNA
      </h1>

      {/* HERO CENTRADO IGUAL EN PC Y MÓVIL */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginTop: "40px",
          width: "100%",
        }}
      >

        {/* ENCAPUCHADO
         */}
        
        <img
  src="/img/encapuchado.png"
  alt="encapuchado"
  style={{
    width: "260px",
    height: "auto",
    marginBottom: "20px",
  }}
/>


        {/* SPEECH CENTRADO */}
        <div
          style={{
            color: "white",
            fontFamily: "'Cinzel', serif",
            fontSize: "20px",
            lineHeight: "1.4",
            maxWidth: "90%",
            marginBottom: "30px",
          }}
        >
          <p>Soy César, tarotista con experiencia.</p>
          <p style={{ marginTop: "10px" }}>
            Te ayudo a entender tu situación y tomar decisiones con claridad.
          </p>
        </div>

      </div>

      {/* BOTONES PRINCIPALES (UNO SOBRE OTRO EN PC Y MÓVIL) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "60px",
        }}
      >
        {/* WHATSAPP */}
        <a
          href="https://wa.me/34622091189"
          target="_blank"
          style={{
            width: "260px",
            height: "70px",
            backgroundColor: "#00A000",
            fontFamily: "'Cinzel', serif",
            color: "#FFFFFF",
            fontSize: "24px",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 20px rgba(0,255,0,0.5)",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "32px" }}>✆</span>
          WhatsApp
        </a>

        {/* LLAMAR */}
        <a
          href="tel:622091189"
          style={{
            width: "260px",
            height: "70px",
            backgroundColor: "#0066FF",
            fontFamily: "'Cinzel', serif",
            color: "#FFFFFF",
            fontSize: "24px",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 20px rgba(0,102,255,0.6)",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "32px" }}>✆</span>
          Llamar ahora
        </a>
      </div>

      {/* SERVICIOS */}
      <section
        className="text-center text-white"
        style={{ marginTop: "160px" }}
      >
        <h2
          className="text-4xl font-bold mb-16"
          style={{
            fontFamily: "'Cinzel', serif",
            marginTop: "40px",
            color: "#FFD700",
            textShadow: "0 0 15px rgba(255,215,0,0.8)",
          }}
        >
          Servicios y Precios
        </h2>

        <div
          className="flex flex-row justify-center flex-wrap gap-10"
          style={{ marginTop: "40px" }}
        >

          {/* CAJA 1 */}
          <div
            className="w-[260px] h-[300px] flex flex-col items-center rounded-3xl"
            style={{
              backgroundColor: "#7A001F",
              padding: "20px",
              border: "3px solid #FFD700",
              boxShadow: "0 0 20px rgba(255,215,0,0.8)",
            }}
          >
            <div className="text-6xl simbol-mistic" style={{ color: "#FFD700" }}>✦</div>
            <h3 className="text-2xl font-bold mt-3" style={{ color: "#FFD700" }}>1 Pregunta</h3>
            <p className="mt-1" style={{ color: "#FFD700" }}>Respuesta directa y clara</p>
            <div style={{ flexGrow: 1 }}></div>
            <p
              style={{
                color: "#FFD700",
                fontSize: "90px",
                fontWeight: "900",
                lineHeight: "1",
                textShadow: "0 0 15px rgba(255,215,0,0.8)",
              }}
            >
              5€
            </p>
          </div>

          {/* CAJA 2 */}
          <div
            className="w-[260px] h-[300px] flex flex-col items-center rounded-3xl"
            style={{
              backgroundColor: "#7A001F",
              padding: "20px",
              border: "3px solid #FFD700",
              boxShadow: "0 0 20px rgba(255,215,0,0.8)",
            }}
          >
            <div className="text-6xl simbol-mistic" style={{ color: "#FFD700" }}>♡</div>
            <h3 className="text-2xl font-bold mt-3" style={{ color: "#FFD700" }}>Tirada del Amor</h3>
            <p className="mt-1" style={{ color: "#FFD700" }}>Relaciones y sentimientos</p>
            <div style={{ flexGrow: 1 }}></div>
            <p
              style={{
                color: "#FFD700",
                fontSize: "90px",
                fontWeight: "900",
                lineHeight: "1",
                textShadow: "0 0 15px rgba(255,215,0,0.8)",
              }}
            >
              20€
            </p>
          </div>

          {/* CAJA 3 */}
          <div
            className="w-[260px] h-[300px] flex flex-col items-center rounded-3xl"
            style={{
              backgroundColor: "#7A001F",
              padding: "20px",
              border: "3px solid #FFD700",
              boxShadow: "0 0 20px rgba(255,215,0,0.8)",
            }}
          >
            <div className="text-6xl simbol-mistic" style={{ color: "#FFD700" }}>♱</div>
            <h3 className="text-2xl font-bold mt-3" style={{ color: "#FFD700" }}>Consulta 30 min</h3>
            <p className="mt-1" style={{ color: "#FFD700" }}>Lectura completa</p>
            <div style={{ flexGrow: 1 }}></div>
            <p
              style={{
                color: "#FFD700",
                fontSize: "90px",
                fontWeight: "900",
                lineHeight: "1",
                textShadow: "0 0 15px rgba(255,215,0,0.8)",
              }}
            >
              30€
            </p>
          </div>

          {/* CAJA 4 */}
          <div
            className="w-[260px] h-[300px] flex flex-col items-center rounded-3xl"
            style={{
              backgroundColor: "#7A001F",
              padding: "20px",
              border: "3px solid #FFD700",
              boxShadow: "0 0 20px rgba(255,215,0,0.8)",
            }}
          >
            <div className="text-6xl simbol-mistic" style={{ color: "#FFD700" }}>✧</div>
            <h3 className="text-2xl font-bold mt-3" style={{ color: "#FFD700" }}>Consulta 1 Hora</h3>
            <p className="mt-1" style={{ color: "#FFD700" }}>Guía profunda</p>
            <div style={{ flexGrow: 1 }}></div>
            <p
              style={{
                color: "#FFD700",
                fontSize: "90px",
                fontWeight: "900",
                lineHeight: "1",
                textShadow: "0 0 15px rgba(255,215,0,0.8)",
              }}
            >
              50€
            </p>
          </div>

        </div>
      </section>

      {/* BOTÓN RESERVAR */}
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://wa.me/34622091189"
          target="_blank"
          style={{
            backgroundColor: "#00A000",
            color: "white",
            padding: "25px 60px",
            fontSize: "32px",
            fontWeight: "900",
            borderRadius: "50px",
            textDecoration: "none",
            fontFamily: "'Cinzel', serif",
            boxShadow: "0 0 20px rgba(0,255,0,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span style={{ fontSize: "40px" }}>✆</span>
          Reservar por WhatsApp
        </a>
      </div>

      {/* TESTIMONIOS */}
      <section
        style={{
          marginTop: "80px",
          textAlign: "center",
          color: "white",
          fontFamily: "'Cinzel', serif",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "900",
            marginBottom: "40px",
            color: "#FFD700",
            textShadow: "0 0 15px rgba(255,215,0,0.8)",
          }}
        >
          Testimonios
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "2px solid #FFD700",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 0 15px rgba(255,215,0,0.4)",
            }}
          >
            <p style={{ fontSize: "22px", opacity: 0.9 }}>
              “Muy acertado, directo y amable. Me ayudó a ver mi situación con claridad.”
            </p>
            <p style={{ marginTop: "10px", fontWeight: "bold", color: "#FFD700" }}>
              — Laura, Girona
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "2px solid #FFD700",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 0 15px rgba(255,215,0,0.4)",
            }}
          >
            <p style={{ fontSize: "22px", opacity: 0.9 }}>
              “La lectura fue muy clara y precisa. Volveré sin duda.”
            </p>
            <p style={{ marginTop: "10px", fontWeight: "bold", color: "#FFD700" }}>
              — Marta, Barcelona
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "2px solid #FFD700",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 0 15px rgba(255,215,0,0.4)",
            }}
          >
            <p style={{ fontSize: "22px", opacity: 0.9 }}>
              “Me sorprendió lo exacto que fue. Muy recomendable.”
            </p>
            <p style={{ marginTop: "10px", fontWeight: "bold", color: "#FFD700" }}>
              — Ana, España
            </p>
          </div>
        </div>
      </section>

      {/* BIZUM + GIRONA */}
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          fontFamily: "'Cinzel', serif",
          color: "white",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #FFD700, transparent)",
            margin: "0 auto 40px auto",
          }}
        ></div>

        <h3
          style={{
            fontSize: "36px",
            fontWeight: "900",
            color: "#FFD700",
            textShadow: "0 0 15px rgba(255,215,0,0.8)",
          }}
        >
          Pago por Bizum Disponible
        </h3>
        <p style={{ fontSize: "22px", marginTop: "10px", opacity: 0.9 }}>
          Número: <strong style={{ color: "#FFD700" }}>622 091 189</strong>
        </p>

        <h3
          style={{
            fontSize: "36px",
            fontWeight: "900",
            marginTop: "50px",
            color: "#FFD700",
            textShadow: "0 0 15px rgba(255,215,0,0.8)",
          }}
        >
          Consultas Presenciales en Girona
        </h3>
        <p style={{ fontSize: "22px", marginTop: "10px", opacity: 0.9 }}>
          Reserva tu cita por WhatsApp o llamada
        </p>

        <div
          style={{
            width: "80%",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #FFD700, transparent)",
            margin: "40px auto 0 auto",
          }}
        ></div>
      </div>

      {/* FOOTER FINAL */}
      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
          color: "white",
          fontFamily: "'Cinzel', serif",
          opacity: 0.9,
        }}
      >
        <p style={{ fontSize: "22px" }}>
          Gracias por confiar en Tarot La Fortuna.
        </p>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          Te acompaño con claridad, sinceridad y respeto.
        </p>

        <div
          style={{
            width: "80%",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #FFD700, transparent)",
            margin: "40px auto 20px auto",
          }}
        ></div>

        <p style={{ fontSize: "16px", opacity: 0.7 }}>
          © 2026 Tarot La Fortuna — Girona
        </p>
      </div>

      {/* BOTÓN WHATSAPP STICKY (SOLO MÓVIL) */}
      <a
        href="https://wa.me/34622091189"
        target="_blank"
        className="whatsapp-sticky"
      >
        <span>✆</span>
      </a>

    </main>
  );
}
