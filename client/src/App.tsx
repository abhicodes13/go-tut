import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "/api";

function App() {
  return (
    <Stack h="100vh" spacing="40px">
      <Navbar />
      <Stack spacing={"30px"}>
        <Container>
          <p className="hello">
            {" "}
            <Text fontSize={"13px"}>
              Build fast, efficient APIs with Go and Fiber; manage state and
              data fetching in a React frontend using TanStack Query.
            </Text>
          </p>
          <TodoForm />
          <TodoList />
        </Container>
      </Stack>
    </Stack>
  );
}

export default App;
