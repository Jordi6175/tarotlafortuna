import type { Metadata } from "next";
import Header from "@/components/Header";
export const metadata = {
  title: "Tarot del Amor | Consultas Sentimentales y de Pareja",
  description:
    "Consulta el tarot del amor para resolver dudas sobre relaciones,reconciliaciones, sentimientos y futuro sentimental. Atención presencial y online.",
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
        <h1 style={styles.h1}>Tarot del amor

        </h1>

        <p style={styles.p}>
        El amor es una de las consultas más habituales en el tarot. Si necesitas comprender mejor
         una relación, saber qué siente una persona o descubrir hacia dónde se dirige tu vida
          sentimental, una lectura personalizada puede ayudarte a encontrar respuestas y claridad.
        </p>

        <div style={styles.divider}></div>

        <section style={styles.section}>
          <h2 style={styles.h2}>Consultas de tarot para el amor</h2>

          <p style={styles.p}>
            Cada situación sentimental es diferente. Las cartas del tarot,
             pueden ayudarte a comprender mejor tus emociones, aclarar dudas
             y afrontar con mayor seguridad las decisiones relacionadas con el amor.
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
  <li>❤️ ¿Volverá mi expareja?</li>
  <li>💕 ¿Qué siente realmente por mí?</li>
  <li>💍 Futuro de la relación.</li>
  <li>💔 Separaciones y reconciliaciones.</li>
  <li>🌹 Nuevos comienzos sentimentales.</li>
</ul>
  <img
  src="/IMG/img3.jpeg"
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
      ¿Puede el tarot ayudarme en temas de amor?
    </h3>

    <p style={styles.p}>
      Sí,puede ofrecerte orientación y claridad sobre tus relaciones,
       sentimientos y decisiones sentimentales.
    </p>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
      ¿Es posible consultar por una expareja?
    </h3>

    <p style={styles.p}>
      Sí,pudes consultar por parejas,exparejas o alguien que te atraiga

    </p>
  </div>

  <div>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
     ¿Las consultas son confidenciales?
    </h3>

    <p style={styles.p}>
      Si,son confidenciiales siempre.
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