import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <main>
        <section className=" h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1>Nick Niven Reed</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a href=" ">linkdIn</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
