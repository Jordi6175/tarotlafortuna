import type { Metadata } from "next";
import Header from "@/components/Header";
export const metadata = {
  title: "Tarot Online | Consulta por WhatsApp o Llamada",
  description:
    "Consulta de tarot online por WhatsApp o llamada desde cualquier lugar de España. Atención personalizada, privada y con cita previa.",
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
        <h1 style={styles.h1}>Tarot online

        </h1>

        <p style={styles.p}>
Si prefieres realizar tu consulta desde casa, puedes acceder a una consulta de tarot online
 por WhatsApp o mediante llamada telefónica. Recibirás una atención totalmente personalizada,
  con la misma dedicación y confidencialidad que en una consulta presencial.
        </p>

        <div style={styles.divider}></div>

        <section style={styles.section}>
          <h2 style={styles.h2}>Consultas de tarot online</h2>

          <p style={styles.p}>
            Cada situación personal es diferente. Las cartas del tarot,
             pueden ayudarte a comprender mejor tus problemas, aclarar dudas
             y afrontar con mayor seguridad las decisiones de tu vida.
          </p>
          <div style={styles.divider}></div>

<section style={styles.section}>
  <h2 style={styles.h2}>Consultas online para toda España</h2>

  <p style={styles.p}>
   El tarot online te permite realizar tu consulta cómodamente desde cualquier lugar de España.
    Solo necesitas concertar una cita y elegir si prefieres comunicarte por WhatsApp
    o mediante llamada telefónica.
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
  <li>📱 Consultas por WhatsApp.</li>
  <li>☎️ Consultas por llamada telefónica.</li>
  <li>❤️ Consultas sobre amor y relaciones.</li>
  <li>💼 Orientación sobre trabajo y decisiones importantes.</li>
  <li>🔮 Consultas generales de tarot.</li>
</ul>

<img
  
  src="/IMG/img2.jpeg"
  alt="Tirada del tarot online"
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
      ¿Cómo funciona una consulta online?
    </h3>

    <p style={styles.p}>
      Puedes elegir si quieres consultar por WhatsApp o por llamada telefónica
      si es por whatsapp,tu preguntas,yo hago la tirada y respondo por escrito,
      incluyo foto de la tirada,si es por llamada,me haces tu pregunta y hago la tirada
      y respondo y te cuento lo que las cartas dicen.
    </p>
  </div>

  <div style={{ marginBottom: "30px" }}>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
      ¿Necesito instalar alguna aplicación para la consulta?
    </h3>

    <p style={styles.p}>
      No, no necesitas instalar ninguna aplicación.
      Puedes consultar por WhatsApp o por llamada telefónica.

    </p>
  </div>

  <div>
    <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
     ¿Las consulta es privada?
    </h3>

    <p style={styles.p}>
      Si,es privada siempre.
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