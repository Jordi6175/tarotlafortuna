import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tarot en Girona | Consultas Presenciales y Online",
  description:
    "Tarotista en Girona. Consultas presenciales con cita previa y también por WhatsApp o llamada para toda España.",
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('/IMG/fondoweb.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "60px 20px 100px",
  } as React.CSSProperties,

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    color: "white",
    fontFamily: "'Cinzel', serif",
  } as React.CSSProperties,

  h1: {
    color: "#FFD700",
    fontSize: "48px",
    textAlign: "center",
    marginBottom: "25px",
    textShadow: "0 0 12px rgba(255,215,0,.5)",
  } as React.CSSProperties,

  h2: {
    color: "#FFD700",
    fontSize: "34px",
    marginBottom: "20px",
  } as React.CSSProperties,

  p: {
    fontSize: "20px",
    lineHeight: "1.9",
  } as React.CSSProperties,

  section: {
    marginTop: "70px",
  } as React.CSSProperties,

  divider: {
    width: "80%",
    height: "2px",
    background:
      "linear-gradient(to right, transparent, #FFD700, transparent)",
    margin: "55px auto",
  } as React.CSSProperties,
};

export default function Page() {
 return (
  <>
    <Header />
    
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Tarot en Girona</h1>

        <p style={styles.p}>
          Si buscas un tarotista en Girona, puedes realizar tu consulta de forma
          presencial con cita previa o, si lo prefieres, mediante WhatsApp o
          llamada desde cualquier punto de España.
        </p>
        <section
  style={{
    marginTop: "45px",
    marginBottom: "45px",
    padding: "35px 25px",
    textAlign: "center",
    border: "1px solid rgba(255,215,0,0.65)",
    borderRadius: "18px",
    background: "rgba(0,0,0,0.72)",
    boxShadow: "0 0 30px rgba(255,215,0,0.12)",
  }}
>
  <h2
    style={{
      color: "#FFD700",
      fontSize: "34px",
      marginBottom: "15px",
      fontFamily: "serif",
      fontStyle: "italic",
    }}
  >
    ✨ Promoción de bienvenida ✨
  </h2>

  <p
    style={{
      color: "#FFD700",
      fontSize: "38px",
      fontWeight: "bold",
      margin: "10px 0 25px",
    }}
  >
    20 minutos · 10 €
  </p>

  <p
    style={{
      ...styles.p,
      maxWidth: "700px",
      margin: "0 auto 25px",
    }}
  >
    Si es tu primera consulta de tarot con Tarot La Fortuna, puedes
    aprovechar esta promoción especial de bienvenida.
  </p>

  <p
    style={{
      color: "#FFD700",
      fontSize: "19px",
      fontStyle: "italic",
      marginBottom: "30px",
    }}
  >
    Oferta para nuevos clientes.
  </p>

  <a
    href="https://wa.me/34622091189"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "260px",
      height: "62px",
      borderRadius: "35px",
      background: "#16a34a",
      color: "white",
      textDecoration: "none",
      fontSize: "22px",
      fontWeight: "bold",
      boxShadow: "0 0 22px rgba(22,163,74,.45)",
    }}
  >
    ✆ Reservar consulta
  </a>
</section>

        <div style={styles.divider}></div>

        <section style={styles.section}>
          <h2 style={styles.h2}>Consultas presenciales en Girona</h2>

          <p style={styles.p}>
            Cada consulta se realiza con tranquilidad, privacidad y el tiempo
            necesario para atender tus preguntas. El objetivo es ofrecerte una
            lectura clara, personalizada y adaptada a tu situación.
          </p>
          <div style={styles.divider}></div>

<section style={styles.section}>
  <h2 style={styles.h2}>Consultas online para toda España</h2>

  <p style={styles.p}>
    Si no puedes desplazarte a Girona, también puedes realizar tu consulta por
    WhatsApp o mediante llamada telefónica. Es una forma cómoda, privada y
    sencilla de recibir tu lectura estés donde estés.
  </p>
</section>

<div style={styles.divider}></div>

<section style={styles.section}>
  <h2 style={styles.h2}>¿En qué puedo ayudarte?</h2>

  <ul
    style={{
      fontSize: "20px",
      lineHeight: "2",
      paddingLeft: "30px",
    }}
  >
    <li>❤️ Amor y relaciones.</li>
    <li>💼 Trabajo y decisiones profesionales.</li>
    <li>💰 Economía y proyectos personales.</li>
    <li>🌙 Momentos de cambio e incertidumbre.</li>
    <li>🔮 Consultas generales de orientación.</li>
  </ul>
  <img
  src="/IMG/img1.jpeg"
  alt="Tirada de cartas del tarot"
  style={{
    width: "100%",
    maxWidth: "800px",
    display: "block",
    margin: "60px auto",
    borderRadius: "16px",
    boxShadow: "0 0 25px rgba(255,215,0,0.30)",
  }}
/>

  <p
    style={{
      ...styles.p,
      marginTop: "25px",
    }}
  >
    Cada consulta es única. Mi intención es ayudarte a comprender mejor tu
    situación para que puedas tomar tus decisiones con mayor claridad.
  </p>
</section>
    </section>
    <div style={styles.divider}></div>

<section style={styles.section}>
  <h2 style={styles.h2}>Preguntas frecuentes</h2>

  <div style={{ marginBottom: "30px" }}>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
      ¿Es necesario pedir cita?
    </h3>

    <p style={styles.p}>
      Sí. Todas las consultas presenciales se realizan con cita previa para
      poder dedicar el tiempo necesario a cada persona.
    </p>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
      ¿Puedo hacer la consulta desde cualquier ciudad?
    </h3>

    <p style={styles.p}>
      Sí. Atiendo consultas por WhatsApp y por llamada para toda España.
    </p>
  </div>

  <div>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
      ¿Qué métodos de pago aceptas?
    </h3>

    <p style={styles.p}>
      Acepto Bizum y efectivo en las consultas presenciales. No acepto pagos
      con tarjeta.
    </p>
  </div>
</section>

<div style={styles.divider}></div>

<section style={styles.section}>
  <h2 style={{ ...styles.h2, textAlign: "center" }}>
    Una consulta con calma y confidencialidad
  </h2>

  <p
    style={{
      ...styles.p,
      textAlign: "center",
      maxWidth: "760px",
      margin: "0 auto",
    }}
  >
    Cada consulta se realiza con tranquilidad, respeto y absoluta
    confidencialidad. Mi objetivo es ayudarte a comprender mejor tu situación y
    ofrecerte una orientación clara y personalizada.
  </p>
</section>
<div style={styles.divider}></div>

<section
  style={{
    ...styles.section,
    textAlign: "center",
  }}
>
  <h2 style={styles.h2}>Reserva tu consulta</h2>

  <p
    style={{
      ...styles.p,
      marginBottom: "35px",
    }}
  >
    Puedes escribirme directamente por WhatsApp para resolver cualquier duda o
    reservar una consulta. Responderé lo antes posible.
  </p>

  <a
    href="https://wa.me/34622091189"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "280px",
      height: "70px",
      borderRadius: "40px",
      background: "#16a34a",
      color: "white",
      textDecoration: "none",
      fontSize: "24px",
      fontWeight: "bold",
      boxShadow: "0 0 25px rgba(22,163,74,.5)",
      transition: "0.3s",
    }}
  >
    ✆ WhatsApp
  </a>

  <p
    style={{
      marginTop: "45px",
    }}
  >
    <a
      href="/"
      style={{
        color: "#FFD700",
        textDecoration: "none",
        fontSize: "20px",
      }}
    >
      ← Volver a la página principal
    </a>
  </p>
</section>
      </div>
    </main>
  </>
  );
}