import Header from "@/components/Header";

export default function TarotAmorPage() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)), url('/IMG/fondoweb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          fontFamily: "'Cinzel', serif",
        }}
      >
{/* HERO */}

<section
  style={{
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px 40px",
    textAlign: "center",
  }}
>
  <h1
    style={{
      fontSize: "58px",
      color: "#ff5c8a",
      fontWeight: "900",
      marginBottom: "20px",
      textShadow: "0 0 18px rgba(255,92,138,.7)",
    }}
  >
    Tarot del Amor
  </h1>

  <p
    style={{
      fontSize: "28px",
      color: "#FFD700",
      marginBottom: "40px",
    }}
  >
    Descubre qué siente esa persona por ti
  </p>

  <img
    src="/IMG/img3.jpeg"
    alt="Tarot del Amor"
    style={{
      width: "100%",
      maxWidth: "520px",
      borderRadius: "22px",
      border: "2px solid rgba(255,92,138,.6)",
      boxShadow: "0 0 30px rgba(255,92,138,.35)",
      marginBottom: "40px",
    }}
  />

  <p
    style={{
      maxWidth: "850px",
      margin: "0 auto",
      fontSize: "22px",
      lineHeight: "1.9",
    }}
  >
    El Tarot del Amor te ayuda a comprender la situación sentimental que estás viviendo.
    Si tienes dudas sobre una relación, una reconciliación o deseas saber cómo evoluciona
    un vínculo, realizo una lectura completa mediante el Tarot de Marsella para ofrecerte
    una orientación clara y sincera.
  </p>
</section>
{/* ¿QUÉ PUEDES DESCUBRIR? */}

<section
  style={{
    maxWidth: "1100px",
    margin: "70px auto",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#FFD700",
      marginBottom: "45px",
      textShadow: "0 0 15px rgba(255,215,0,.7)",
    }}
  >
    ¿Qué puedes descubrir?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "30px",
    }}
  >
    <div
      style={{
        background: "rgba(255,255,255,.06)",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid rgba(255,92,138,.35)",
      }}
    >
      <h3 style={{ color: "#ff5c8a", marginBottom: "15px" }}>
        ❤️ Sus sentimientos
      </h3>

      <p style={{ lineHeight: "1.8" }}>
        Descubre qué siente realmente esa persona por ti y cómo vive vuestra relación.
      </p>
    </div>

    <div
      style={{
        background: "rgba(255,255,255,.06)",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid rgba(255,92,138,.35)",
      }}
    >
      <h3 style={{ color: "#ff5c8a", marginBottom: "15px" }}>
        💕 Futuro sentimental
      </h3>

      <p style={{ lineHeight: "1.8" }}>
        Comprende hacia dónde evoluciona la relación y qué posibilidades existen.
      </p>
    </div>

    <div
      style={{
        background: "rgba(255,255,255,.06)",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid rgba(255,92,138,.35)",
      }}
    >
      <h3 style={{ color: "#ff5c8a", marginBottom: "15px" }}>
        ✨ Orientación
      </h3>

      <p style={{ lineHeight: "1.8" }}>
        Obtén una visión clara para tomar decisiones con mayor serenidad y confianza.
      </p>
    </div>
  </div>
</section>
{/* EL TAROT DE MARSELLA */}

<section
  style={{
    maxWidth: "950px",
    margin: "90px auto",
    padding: "0 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#FFD700",
      marginBottom: "35px",
      textShadow: "0 0 15px rgba(255,215,0,.7)",
    }}
  >
    El Tarot de Marsella
  </h2>

  <p
    style={{
      fontSize: "22px",
      lineHeight: "1.9",
      marginBottom: "30px",
    }}
  >
    Trabajo con el Tarot de Marsella utilizando sus <strong>22 Arcanos Mayores</strong>.
    Cada consulta se adapta a tu situación y a las preguntas que deseas resolver.
  </p>

  <p
    style={{
      fontSize: "22px",
      lineHeight: "1.9",
      marginBottom: "30px",
    }}
  >
    No interpreto las cartas una por una de forma aislada. La verdadera fuerza
    de una lectura está en comprender la relación que existe entre todas ellas
    y el mensaje que construyen en conjunto.
  </p>

  <p
    style={{
      fontSize: "24px",
      color: "#ff5c8a",
      fontWeight: "700",
      fontStyle: "italic",
      lineHeight: "1.8",
    }}
  >
    Cada tirada cuenta una historia. Mi trabajo consiste en interpretarla con
    claridad y sinceridad para ayudarte a comprender mejor tu situación
    sentimental.
  </p>
</section>
{/* SERVICIOS Y PRECIOS */}

<section
  style={{
    maxWidth: "1200px",
    margin: "90px auto",
    padding: "0 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#ff5c8a",
      marginBottom: "50px",
      textShadow: "0 0 15px rgba(255,92,138,.6)",
    }}
  >
    Servicios y Precios
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "30px",
    }}
  >

    <div
      style={{
        background: "linear-gradient(180deg,#70002a 0%,#3b0017 100%)",
        borderRadius: "24px",
        padding: "30px",
        border: "1px solid rgba(255,92,138,.45)",
      }}
    >
      <div style={{ fontSize: "58px" }}>❤️</div>

      <h3
        style={{
          color: "#FFD700",
          fontSize: "28px",
          marginTop: "18px",
        }}
      >
        1 Pregunta
      </h3>

      <p style={{ marginTop: "15px", lineHeight: "1.8" }}>
        Resuelve una duda concreta sobre tu situación sentimental.
      </p>

      <p
        style={{
          marginTop: "35px",
          fontSize: "64px",
          color: "#FFD700",
          fontWeight: "900",
        }}
      >
        5€
      </p>
    </div>

    <div
      style={{
        background: "linear-gradient(180deg,#8b0038 0%,#520020 100%)",
        borderRadius: "24px",
        padding: "30px",
        border: "1px solid rgba(255,92,138,.45)",
      }}
    >
      <div style={{ fontSize: "58px" }}>💕</div>

      <h3
        style={{
          color: "#FFD700",
          fontSize: "28px",
          marginTop: "18px",
        }}
      >
        Tirada del Amor
      </h3>

      <p style={{ marginTop: "15px", lineHeight: "1.8" }}>
        Lectura completa para comprender el presente y la evolución de la relación.
      </p>

      <p
        style={{
          marginTop: "35px",
          fontSize: "64px",
          color: "#FFD700",
          fontWeight: "900",
        }}
      >
        15€
      </p>
    </div>

    <div
      style={{
        background: "linear-gradient(180deg,#70002a 0%,#3b0017 100%)",
        borderRadius: "24px",
        padding: "30px",
        border: "1px solid rgba(255,92,138,.45)",
      }}
    >
      <div style={{ fontSize: "58px" }}>🔮</div>

      <h3
        style={{
          color: "#FFD700",
          fontSize: "28px",
          marginTop: "18px",
        }}
      >
        Consulta Completa
      </h3>

      <p style={{ marginTop: "15px", lineHeight: "1.8" }}>
        Consulta personalizada de aproximadamente 30 minutos.
      </p>

      <p
        style={{
          marginTop: "35px",
          fontSize: "64px",
          color: "#FFD700",
          fontWeight: "900",
        }}
      >
        30€
      </p>
    </div>

  </div>

  <p
    style={{
      marginTop: "45px",
      color: "#FFD700",
      fontSize: "22px",
      lineHeight: "1.8",
      fontStyle: "italic",
    }}
  >
    📷 Si la consulta se realiza por WhatsApp recibirás una fotografía de la tirada junto con su interpretación completa.
  </p>
</section>
{/* BOTONES */}

<section
  style={{
    textAlign: "center",
    marginTop: "70px",
    marginBottom: "90px",
  }}
>
  <a
    href="https://wa.me/34622091189"
    target="_blank"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "290px",
      height: "74px",
      background: "#ff4f8a",
      color: "white",
      fontSize: "26px",
      fontWeight: "bold",
      borderRadius: "40px",
      textDecoration: "none",
      boxShadow: "0 0 20px rgba(255,80,140,.55)",
      marginBottom: "20px",
      gap: "12px",
    }}
  >
    💬 WhatsApp
  </a>

  <br />

  <a
    href="tel:622091189"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "290px",
      height: "74px",
      background: "#d63384",
      color: "white",
      fontSize: "26px",
      fontWeight: "bold",
      borderRadius: "40px",
      textDecoration: "none",
      boxShadow: "0 0 20px rgba(214,51,132,.55)",
      gap: "12px",
    }}
  >
    📞 Llamar ahora
  </a>
</section>
{/* OPINIONES */}

<section
  style={{
    maxWidth: "1200px",
    margin: "100px auto",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#FFD700",
      marginBottom: "50px",
      textShadow: "0 0 15px rgba(255,215,0,.7)",
    }}
  >
    Opiniones de clientes
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "30px",
    }}
  >
    <div
      style={{
        background: "rgba(255,255,255,.06)",
        borderRadius: "24px",
        padding: "30px",
        border: "1px solid rgba(255,92,138,.35)",
      }}
    >
      <div style={{ color: "#FFD700", fontSize: "22px" }}>
        ★★★★★
      </div>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.9",
          fontStyle: "italic",
        }}
      >
        La consulta me ayudó a comprender una situación sentimental que me tenía muy confundida. Me sentí escuchada y la lectura fue muy clara.
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#FFD700",
          fontWeight: "bold",
        }}
      >
        Laura · Madrid
      </p>
    </div>

    <div
      style={{
        background: "rgba(255,255,255,.06)",
        borderRadius: "24px",
        padding: "30px",
        border: "1px solid rgba(255,92,138,.35)",
      }}
    >
      <div style={{ color: "#FFD700", fontSize: "22px" }}>
        ★★★★★
      </div>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.9",
          fontStyle: "italic",
        }}
      >
        Me sorprendió la precisión con la que interpretó la situación. La consulta fue cercana y muy profesional.
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#FFD700",
          fontWeight: "bold",
        }}
      >
        Marta · Barcelona
      </p>
    </div>

    <div
      style={{
        background: "rgba(255,255,255,.06)",
        borderRadius: "24px",
        padding: "30px",
        border: "1px solid rgba(255,92,138,.35)",
      }}
    >
      <div style={{ color: "#FFD700", fontSize: "22px" }}>
        ★★★★★
      </div>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.9",
          fontStyle: "italic",
        }}
      >
        Era mi primera consulta de tarot y me sentí muy cómoda. La explicación fue clara y muy fácil de entender.
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#FFD700",
          fontWeight: "bold",
        }}
      >
        Cristina · Valencia
      </p>
    </div>
  </div>
</section>
{/* PREGUNTAS FRECUENTES */}

<section
  style={{
    maxWidth: "900px",
    margin: "100px auto",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#FFD700",
      marginBottom: "45px",
      textShadow: "0 0 15px rgba(255,215,0,.7)",
    }}
  >
    Preguntas frecuentes
  </h2>

  <div style={{ marginBottom: "35px" }}>
    <h3 style={{ color: "#ff5c8a", fontSize: "28px" }}>
      ¿Cómo se realiza la consulta?
    </h3>

    <p style={{ lineHeight: "1.9", fontSize: "20px" }}>
      Puedes realizar la consulta por WhatsApp, llamada telefónica o de forma
      presencial en Girona con cita previa.
    </p>
  </div>

  <div style={{ marginBottom: "35px" }}>
    <h3 style={{ color: "#ff5c8a", fontSize: "28px" }}>
      ¿Recibiré la fotografía de la tirada?
    </h3>

    <p style={{ lineHeight: "1.9", fontSize: "20px" }}>
      Sí. En las consultas realizadas por WhatsApp recibirás la fotografía de
      la tirada junto con la interpretación completa.
    </p>
  </div>

  <div style={{ marginBottom: "35px" }}>
    <h3 style={{ color: "#ff5c8a", fontSize: "28px" }}>
      ¿Es una consulta privada?
    </h3>

    <p style={{ lineHeight: "1.9", fontSize: "20px" }}>
      Sí. Todas las consultas son totalmente confidenciales y se realizan con
      absoluta discreción.
    </p>
  </div>

  <div>
    <h3 style={{ color: "#ff5c8a", fontSize: "28px" }}>
      ¿Cómo puedo pagar?
    </h3>

    <p style={{ lineHeight: "1.9", fontSize: "20px" }}>
      El pago se realiza cómodamente mediante Bizum antes de comenzar la
      consulta.
    </p>
  </div>
</section>
{/* CTA FINAL */}

<section
  style={{
    maxWidth: "900px",
    margin: "110px auto 90px",
    padding: "0 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "44px",
      color: "#FFD700",
      marginBottom: "30px",
      textShadow: "0 0 15px rgba(255,215,0,.7)",
    }}
  >
    ¿Deseas conocer la verdad?
  </h2>

  <p
    style={{
      fontSize: "22px",
      lineHeight: "1.9",
      maxWidth: "760px",
      margin: "0 auto 45px",
    }}
  >
    Si deseas comprender mejor tu situación sentimental, descubrir qué siente esa
    persona por ti o conocer la evolución de vuestra relación, estaré encantado
    de ayudarte mediante una lectura seria, honesta y personalizada con el
    Tarot de Marsella.
  </p>

  <a
    href="https://wa.me/34622091189"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#ff4f8a",
      color: "white",
      padding: "18px 45px",
      borderRadius: "40px",
      fontSize: "26px",
      fontWeight: "bold",
      textDecoration: "none",
      boxShadow: "0 0 20px rgba(255,80,140,.55)",
      marginBottom: "25px",
    }}
  >
    💬 Reservar por WhatsApp
  </a>

  <br />

  <a
    href="tel:622091189"
    style={{
      display: "inline-block",
      background: "#d63384",
      color: "white",
      padding: "18px 45px",
      borderRadius: "40px",
      fontSize: "26px",
      fontWeight: "bold",
      textDecoration: "none",
      boxShadow: "0 0 20px rgba(214,51,132,.55)",
    }}
  >
    📞 Llamar ahora
  </a>

  <p
    style={{
      marginTop: "45px",
      color: "#FFD700",
      fontSize: "18px",
    }}
  >
    Consultas por WhatsApp, llamada telefónica y presenciales en Girona.
  </p>
</section>


      </main>
    </>
  );
}
