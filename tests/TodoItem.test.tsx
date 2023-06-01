import renderer from "react-test-renderer";
import { TodoItem } from "../components";
import { TodoTypes } from "@/services/data-types";

test("should render component and match snapshot", () => {
  const data: TodoTypes = {
    id: "1",
    done: true,
    task: "beli gorangan",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const component = renderer.create(<TodoItem data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
