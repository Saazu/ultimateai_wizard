import { screen, render } from "@testing-library/react";
import IntentListCard from "./IntentListCard";
import intents from "../../constants/intents.constants.json";

describe("IntentListCard", () => {
  const props = {
    id: intents[0].id,
    name: intents[0].name,
    description: intents[0].description,
    examples: intents[0].trainingData.expressions,
    removeFromSelected: jest.fn(),
    addToSelected: jest.fn(),
    selected: true,
  };

  test("renders IntentListCard", () => {
    render(<IntentListCard {...props} />);
    expect(screen.queryByText(intents[0].description)).toBeInTheDocument();
  });
});
