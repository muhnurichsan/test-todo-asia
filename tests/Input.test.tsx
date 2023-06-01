import renderer from "react-test-renderer";
import { Input } from "../components";

test("should render component and match snapshot", () => {
  const component = renderer.create(<Input type="text" onChange={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
