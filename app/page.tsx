import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import Link from "next/link";

export default function App() {
  return (
    <>
      <NavBar />
      <LandingSection />
      <Footer />
    </>
  );
}

function LandingSection() {
  return (
    <main>
      <h1>A super fancy, title here.</h1>
      <p>A super descriptive, and concise description here.</p>
      <Link href="/login">
        <button>Log in</button>
      </Link>
      <Link href="/register">
        <button>Register</button>
      </Link>
    </main>
  );
}
