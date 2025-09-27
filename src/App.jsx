import Theme from "./components/Theme";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen justify-center gap-8 bg-gray-200 text-black  ">
        <Todo />
        <Theme />
      </div>
    </>
  );
}

export default App;
