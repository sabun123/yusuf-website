import TopNav from "./components/topnav";
import BottomNav from "./components/bottomnav";
import ShowCase from "./components/showcase";
import ToolShowCase from "./components/toolshowcase";

function App() {
  return (
    <main className="flex flex-col w-full h-screen bg-base-100">
      <TopNav />
      <div className="flex flex-col mt-15">
        <ShowCase />
        <ToolShowCase />
      </div>
      <BottomNav />
    </main>
  );
}
export default App;
