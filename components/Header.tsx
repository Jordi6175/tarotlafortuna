import Link from "next/link";

export default function Header() {
  return (
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
      <Link href="/" style={{ color: "#FFD700", textDecoration: "none", fontWeight: "bold" }}>
        🏠 Inicio
      </Link>

      <Link href="/tarot-amor" style={{ color: "#FFD700", textDecoration: "none", fontWeight: "bold" }}>
        ❤️ Amor
      </Link>

      <Link href="/tarot-girona" style={{ color: "#FFD700", textDecoration: "none", fontWeight: "bold" }}>
        📍 Girona
      </Link>

      <Link href="/tarot-online" style={{ color: "#FFD700", textDecoration: "none", fontWeight: "bold" }}>
        📱 Online
      </Link>

      <Link href="/tarot-whatsapp" style={{ color: "#FFD700", textDecoration: "none", fontWeight: "bold" }}>
        💬 WhatsApp
      </Link>
    </header>
  );
}