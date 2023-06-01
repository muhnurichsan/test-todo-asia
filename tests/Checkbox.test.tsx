import renderer from "react-test-renderer";
import { Checkbox } from "../components";

test("should render component and match snapshot", () => {
  const component = renderer.create(<Checkbox onChange={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
