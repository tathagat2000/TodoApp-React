import "./App.css";
import { TodoApp } from "./components/TodoApp";
import { Header } from "./components/Header";
import { SnackbarProvider } from "./components/SnackbarProvider";
function App() {
  return (
    <>
      <SnackbarProvider>
        <Header />
        <TodoApp />
      </SnackbarProvider>
    </>
  );
}

export default App;
