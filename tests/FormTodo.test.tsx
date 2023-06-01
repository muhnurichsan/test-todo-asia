import renderer from "react-test-renderer";
import { FormTodo } from "../components";

test("should render component and match snapshot", () => {
  const component = renderer.create(
    <FormTodo
      handleInputTask={() => {}}
      handleSortTodo={() => {}}
      onSubmit={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
