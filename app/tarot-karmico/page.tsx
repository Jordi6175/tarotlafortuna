import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tarot Kármico y Vidas Pasadas",
  description:
    "Consulta el tarot kármico para entender tus vidas pasadas y el camino kármico que sigues. Atención presencial y online.",
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
        <h1 style={styles.h1}>Tarot Kármico y Vidas Pasadas

        </h1>

        <p style={styles.p}>
        Descubre qué lecciones trae tu alma, qué vínculos proceden de otras vidas
         y cómo comprender los bloqueos que se repiten en tu camino.
        </p>

        <div style={styles.divider}></div>

        <section style={styles.section}>
          <h2 style={styles.h2}>Consultas de tarot kármico</h2>

          <p style={styles.p}>
            Cada lectura de tarot kármico es única y personalizada.
             A través de la interpretación de las cartas, podemos explorar 
             los patrones que se repiten en tu vida, los vínculos que has formado a lo largo de tus vidas
              pasadas y cómo estos influyen en tu presente.
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
    <li>🌙 Relaciones kármicas y almas gemelas.</li>
    <li>🔮 Influencias de vidas pasadas.</li>
    <li>✨ Bloqueos que se repiten en tu vida.</li>
    <li>🕊️ Aprendizajes espirituales.</li>
    <li>⭐ Descubre el propósito de tu camino.</li>
  </ul>
</section>
  <img
  src="/IMG/img4.jpeg"
  alt="Tirada del tarot del amor"
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
  El tarot kármico es una herramienta de reflexión que ayuda a comprender
  patrones que se repiten en la vida, relaciones importantes y aprendizajes
  personales. Cada consulta es única y está orientada a ofrecer claridad,
  serenidad y una nueva perspectiva para ayudarte a tomar tus propias
  decisiones.
</p>

</section>
    
    <div style={styles.divider}></div>

<section style={styles.section}>
  <h2 style={styles.h2}>Preguntas frecuentes</h2>

  <div style={{ marginBottom: "30px" }}>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
      ¿Qué es el tarot kármico?
    </h3>

    <p style={styles.p}>
      El tarot kármico es una herramienta de reflexión que ayuda a comprender
      patrones que se repiten en la vida, relaciones importantes y aprendizajes
      personales.
    </p>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
      ¿Es útil para resolver problemas personales?
    </h3>

    <p style={styles.p}>
      Es una lectura orientada a comprender patrones, relaciones y experiencias
    que muchas personas interpretan como parte de su camino espiritual o
    aprendizaje personal.

    </p>
  </div>

  <div>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
     ¿Puede ayudarme a entender una relación kármica?
    </h3>

    <p style={styles.p}>
       Sí. Muchas personas consultan para comprender vínculos intensos, relaciones
    que se repiten o situaciones difíciles de explicar, buscando una visión más
    amplia de su experiencia.
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