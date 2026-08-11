
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Tarot a Girona en català | Consulta presencial | Tarot La Fortuna",
  description:
    "Consulta de tarot a Girona en català. Lectures presencials amb cita prèvia, per trucada o per WhatsApp. Promoció de benvinguda: 20 minuts per 10 €.",
alternates: {
  canonical: "https://tarotlafortuna.com/tarot-girona-cat",
  languages: {
    "ca-ES": "https://tarotlafortuna.com/tarot-girona-cat",
    "es-ES": "https://tarotlafortuna.com/tarot-girona",
  },
},
}
  



const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px 100px",
    backgroundColor: "#000",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('/IMG/fondoweb.jpg')",
    backgroundSize: "100% auto",
    backgroundPosition: "center top",
    backgroundRepeat: "repeat-y",
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
      <header
  style={{
    width: "100%",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    background: "rgba(0,0,0,0.80)",
    borderBottom: "2px solid #FFD700",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  }}
>
  <Link
    href="/"
    style={{
      color: "#FFD700",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    🏠 Inici
  </Link>

  <a
    href="/tarot-amor"
    style={{
      color: "#FFD700",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    ❤️ Amor
  </a>

  <a
    href="/tarot-girona-cat"
    style={{
      color: "#FFD700",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    📍 Girona
  </a>

  <a
    href="/tarot-online"
    style={{
      color: "#FFD700",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    📱 Online
  </a>

  <a
    href="/tarot-whatsapp"
    style={{
      color: "#FFD700",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    💬 WhatsApp
  </a>
</header>

      <main style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.h1}>
            Tarot a Girona
          </h1>
          <div
  style={{
    margin: "10px auto 45px",
    padding: "30px 25px",
    maxWidth: "700px",
    textAlign: "center",
    borderRadius: "20px",
    background: "rgba(0,0,0,0.65)",
    border: "2px solid #FFD700",
    boxShadow: "0 0 30px rgba(255,215,0,0.20)",
  }}
>
  <h2
    style={{
      color: "#FFD700",
      fontSize: "30px",
      marginBottom: "10px",
      textTransform: "uppercase",
    }}
  >
    Promoció de benvinguda
  </h2>

  <p
    style={{
      color: "#FFD700",
      fontSize: "42px",
      fontWeight: "bold",
      margin: "10px 0",
      textShadow: "0 0 12px rgba(255,215,0,.45)",
    }}
  >
    20 minuts · 10 €
  </p>

  <p
    style={{
      ...styles.p,
      marginBottom: "25px",
    }}
  >
    Primera consulta per a nous clients.
  </p>

  <p
    style={{
      ...styles.p,
      marginBottom: "25px",
    }}
  >
    Pots fer la teva primera consulta presencial, per telefon o whatsapp a Girona i conèixer
    el servei per només 10 €.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
      marginTop: "25px",
    }}
  >
    <a
      href="tel:+34622091189"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
        height: "58px",
        padding: "0 25px",
        borderRadius: "32px",
        background: "#FFD700",
        color: "#000",
        textDecoration: "none",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      📞 Trucar
    </a>

    <a
      href="https://wa.me/34622091189"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
        height: "58px",
        padding: "0 25px",
        borderRadius: "32px",
        background: "#16a34a",
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      💬 WhatsApp
    </a>
  </div>
</div>

          <p style={styles.p}>
            Busques una consulta de tarot a Girona?
          </p>

          <p style={styles.p}>
            A Tarot La Fortuna trobaràs un espai tranquil on cada lectura es
            realitza amb calma, respecte i absoluta confidencialitat.
          </p>

          <p style={styles.p}>
            Pots reservar una consulta presencial a Girona amb cita prèvia o,
            si ho prefereixes, fer-la per WhatsApp o per telèfon des de
            qualsevol punt de Girona i comarca.
          </p>

          <div style={styles.divider}></div>

          <section style={styles.section}>
            <h2 style={styles.h2}>
              Consultes presencials a Girona
            </h2>

            <p style={styles.p}>
              Les consultes presencials permeten crear un espai de calma,
              escolta i connexió. Cada persona arriba amb una història
              diferent i cada lectura és completament personalitzada.
            </p>

            <p style={styles.p}>
              Durant la sessió podràs plantejar totes les preguntes que
              necessitis amb el temps necessari, sense presses i amb absoluta
              confidencialitat.
            </p>

            <Image
              src="/IMG/img01.jpeg"
              alt="Consulta de tarot presencial a Girona a Tarot La Fortuna"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "800px",
                display: "block",
                margin: "50px auto 20px",
                borderRadius: "16px",
                boxShadow: "0 0 25px rgba(255,215,0,0.30)",
              }}
            />
          </section>
<div
  style={{
    ...styles.section,
    textAlign: "center",
    background: "rgba(0,0,0,0.45)",
    padding: "35px 25px",
    borderRadius: "20px",
    border: "1px solid rgba(255,215,0,0.35)",
  }}
>
  <h2 style={styles.h2}>
    Tarifes i formes de consulta
  </h2>

  <p style={styles.p}>
    Pots escollir el format que et resulti més còmode. Si vius a Girona
    o a les comarques gironines, la consulta presencial és l&apos;opció
    recomanada per poder disposar d&apos;un espai tranquil i personal.
  </p>

  <div
    style={{
      margin: "35px auto",
      padding: "25px",
      maxWidth: "650px",
      borderRadius: "16px",
      background: "rgba(255,215,0,0.08)",
      border: "1px solid rgba(255,215,0,0.45)",
    }}
  >
    <h3
      style={{
        color: "#FFD700",
        fontSize: "28px",
        marginBottom: "15px",
      }}
    >
      🏠 Consulta presencial a Girona
    </h3>

    <p style={styles.p}>
      <strong>30 minuts — 30 €</strong>
      <br />
      <strong>60 minuts — 50 €</strong>
    </p>
  </div>

  <div
    style={{
      margin: "25px auto",
      padding: "25px",
      maxWidth: "650px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.04)",
    }}
  >
    <h3
      style={{
        color: "#FFD700",
        fontSize: "28px",
        marginBottom: "15px",
      }}
    >
      📞 Consulta per trucada
    </h3>

    <p style={styles.p}>
      El mateix preu que la consulta presencial, segons el temps de la
      consulta.
      <br />
      <strong>30 minuts — 30 €</strong>
      <br />
      <strong>60 minuts — 50 €</strong>
    </p>
  </div>

  <div
    style={{
      margin: "25px auto",
      padding: "25px",
      maxWidth: "650px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.04)",
    }}
  >
    <h3
      style={{
        color: "#FFD700",
        fontSize: "28px",
        marginBottom: "15px",
      }}
    >
      💬 Consulta per WhatsApp
    </h3>

    <p style={styles.p}>
      <strong>1 pregunta ràpida — 5 €</strong>
    </p>
  </div>

  <p
    style={{
      ...styles.p,
      marginTop: "35px",
    }}
  >
    <strong>Formes de pagament:</strong>
    <br />
    Bizum o efectiu.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
      marginTop: "30px",
    }}
  >
    <a
      href="tel:+34622091189"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "220px",
        height: "60px",
        padding: "0 25px",
        borderRadius: "35px",
        background: "#FFD700",
        color: "#000",
        textDecoration: "none",
        fontSize: "21px",
        fontWeight: "bold",
      }}
    >
      📞 Trucar
    </a>

    <a
      href="https://wa.me/34622091189"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "220px",
        height: "60px",
        padding: "0 25px",
        borderRadius: "35px",
        background: "#16a34a",
        color: "white",
        textDecoration: "none",
        fontSize: "21px",
        fontWeight: "bold",
      }}
    >
      💬 WhatsApp
    </a>
  </div>
</div>




          <div style={styles.divider}></div>


          <section style={styles.section}>
            <h2 style={styles.h2}>
              Consultes per WhatsApp i telèfon
            </h2>

            <p style={styles.p}>
              Si no pots desplaçar-te fins a Girona, també pots realitzar la
              consulta per WhatsApp o per telèfon des de qualsevol punt de
              Girona i comarca.
            </p>

            <p style={styles.p}>
              El format és diferent, però l&apos;objectiu és el mateix:
              oferir-te una lectura clara, propera i adaptada al moment que
              estàs vivint.
            </p>
          </section>

          <div style={styles.divider}></div>

          <section style={styles.section}>
            <h2 style={styles.h2}>
              En què et puc ajudar?
            </h2>

            <p style={styles.p}>
              Les consultes de tarot poden abordar diferents aspectes de la
              vida. Pots plantejar una pregunta concreta o explicar
              simplement el moment que estàs vivint.
            </p>

            <ul
              style={{
                fontSize: "20px",
                lineHeight: "2",
                paddingLeft: "30px",
              }}
            >
              <li>❤️ Amor i relacions.</li>
              <li>💼 Feina i decisions professionals.</li>
              <li>💰 Diners i projectes personals.</li>
              <li>🌙 Moments de canvi i incertesa.</li>
              <li>🔮 Consultes generals d&apos;orientació.</li>
            </ul>
          </section>

          <div style={styles.divider}></div>

          <section style={styles.section}>
            <h2 style={styles.h2}>
              Tarot a Girona i a les comarques gironines
            </h2>

            <p style={styles.p}>
              Si vius a Girona o en algun municipi de les comarques gironines
              i estàs buscant una consulta de tarot, pots contactar amb Tarot
              La Fortuna per reservar una sessió presencial amb cita prèvia.
            </p>

            <p style={styles.p}>
              Atenc persones de Girona i de poblacions properes com Salt,
              Sarrià de Ter, Banyoles, Figueres, Olot i altres municipis de la
              demarcació.
            </p>

            <p style={styles.p}>
              L&apos;objectiu és oferir un espai proper i confidencial per
              poder parlar amb calma sobre allò que et preocupa o sobre les
              decisions que estàs valorant en aquest moment.
            </p>
          </section>

          <div style={styles.divider}></div>

          <section style={styles.section}>
            <h2 style={styles.h2}>
              Una consulta presencial, amb calma
            </h2>

            <p style={styles.p}>
              Una consulta presencial a Girona permet disposar d&apos;un espai
              tranquil per parlar de la situació que estàs vivint i plantejar
              les preguntes que consideris importants.
            </p>

            <p style={styles.p}>
              No cal arribar amb una pregunta perfectament formulada. Pots
              explicar què et preocupa, què ha canviat o simplement quin
              moment estàs travessant. A partir d&apos;aquí, la lectura
              s&apos;adapta a la teva situació.
            </p>

            <p style={styles.p}>
              Cada consulta és personal i confidencial. L&apos;objectiu és que
              puguis agafar-te el temps necessari per expressar-te i entendre
              millor allò que vols consultar.
            </p>
          </section>

          <div style={styles.divider}></div>

          <section style={styles.section}>
            <h2 style={styles.h2}>
              Tracte personal i confidencialitat
            </h2>

            <p style={styles.p}>
              Cada consulta es realitza amb respecte, discreció i absoluta
              confidencialitat. Pots parlar amb llibertat sobre allò que et
              preocupa, sabent que la teva consulta és un espai privat.
            </p>

            <p style={styles.p}>
              No hi ha dues consultes iguals. Per això, la lectura
              s&apos;adapta a cada persona i al moment concret que està
              vivint.
            </p>

            <p style={styles.p}>
              La intenció és oferir-te una atenció propera i personalitzada,
              sense presses i amb el temps necessari per poder abordar les
              qüestions que vulguis consultar.
            </p>
          </section>

          <div style={styles.divider}></div>

          <section style={styles.section}>
            <h2 style={styles.h2}>
              Preguntes freqüents
            </h2>

            <div style={{ marginBottom: "35px" }}>
              <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
                Cal demanar cita per a una consulta presencial?
              </h3>

              <p style={styles.p}>
                Sí. Les consultes presencials a Girona es realitzen amb cita
                prèvia per poder dedicar a cada persona el temps i
                l&apos;atenció necessaris.
              </p>
            </div>

            <div style={{ marginBottom: "35px" }}>
              <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
                On es realitzen les consultes?
              </h3>

              <p style={styles.p}>
                Les consultes presencials es realitzen a Girona. Si vols
                informació sobre el lloc i la disponibilitat, pots contactar
                directament abans de reservar.
              </p>
            </div>

            <div style={{ marginBottom: "35px" }}>
              <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
                Puc fer una pregunta concreta?
              </h3>

              <p style={styles.p}>
                Sí. Pots venir amb una pregunta concreta o explicar simplement
                la situació que estàs vivint. La lectura s&apos;adapta a cada
                consulta.
              </p>
            </div>

            <div style={{ marginBottom: "35px" }}>
              <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
                La consulta és confidencial?
              </h3>

              <p style={styles.p}>
                Sí. La confidencialitat i el respecte per la privacitat formen
                part de cada consulta.
              </p>
            </div>

            <div>
              <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
                Puc consultar per WhatsApp o per telèfon?
              </h3>

              <p style={styles.p}>
                Sí. També pots fer la teva consulta per WhatsApp o per telèfon
                si prefereixes no fer-la presencialment.
              </p>
            </div>
            
<div style={{ marginBottom: "35px" }}>
  <h3 style={{ color: "#FFD700", fontSize: "24px" }}>
    És millor una consulta presencial, per trucada o per WhatsApp?
  </h3>

  <p style={styles.p}>
    Les tres opcions permeten fer una consulta de tarot, però la experiència
    és diferent.
  </p>

  <p style={styles.p}>
    La <strong>consulta presencial a Girona</strong> permet disposar de un
    espai tranquil i privat, dedicar més temps a la conversa i viure la lectura
    de manera més personal. Per això, si vius a Girona o a les comarques
    gironines i et pots desplaçar, la consulta presencial és la opció que
    recomano.
  </p>

  <p style={styles.p}>
    Si no pots venir presencialment, també pots fer la consulta{" "}
    <strong>per trucada o per WhatsApp</strong>, des de casa i amb la comoditat
    que ofereix aquest format. El contingut de la consulta s&apos;adapta
    igualment a la pregunta i al moment que estàs vivint.
  </p>

  <p style={styles.p}>
    Si és la teva primera consulta i vius a Girona, també pots aprofitar-la{" "}
    <strong>promoció de benvinguda: 20 minuts per 10 €</strong>.
  </p>
</div>


          </section>

          <div style={styles.divider}></div>

          <section
            style={{
              ...styles.section,
              textAlign: "center",
            }}
          >
            <h2 style={styles.h2}>
              Reserva la teva consulta a Girona
            </h2>

            <p
              style={{
                ...styles.p,
                marginBottom: "35px",
              }}
            >
              Si vols fer una consulta de tarot a Girona, pots posar-te en
              contacte directament per WhatsApp per resoldre qualsevol dubte o
              reservar una cita.
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
              }}
            >
              ✆ WhatsApp
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
