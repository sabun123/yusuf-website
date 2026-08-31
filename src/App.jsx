import AuroraBackground from "./components/AuroraBackground";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-void text-white">
      <AuroraBackground />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6"
        >
          <h1 className="text-gradient-animated font-display text-5xl font-bold md:text-7xl">
            Yusuf Ismail
          </h1>
        </section>
      </main>
    </div>
  );
}

export default App;
