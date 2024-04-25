import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Last from "./components/Last";

const App = () => {

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Landing />
      </div>

      <div className="container">
        <Projects />
      </div>

      <div className="container">
        <Skills />
      </div>

      <div className="container">
        <Work />
      </div>

      <div className="container bg-[#111418]">
        <Last />
      </div>
    </>

  );
}

export default App
