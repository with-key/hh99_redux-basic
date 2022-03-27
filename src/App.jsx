import styled from "styled-components";
import Counter from "./components/counter/Counter";
import Header from "./components/common/Header";
import TodoList from "./components/todos/TodoList";
import TodoForm from "./components/todos/TodosForm";

const App = () => {
  return (
    <>
      <Header />
      <StContainer>
        <StTodosSection>
          <TodoForm />
          <TodoList />
        </StTodosSection>
        <StCounterSection>
          <Counter />
        </StCounterSection>
      </StContainer>
    </>
  );
};

export default App;

const StContainer = styled.article`
  padding: 50px;
  display: flex;
`;
const StTodosSection = styled.section`
  width: 50%;
`;
const StCounterSection = styled.section`
  width: 50%;
`;
