import { render } from "@testing-library/react";
import CocktailsForSpecificIngredientPage from "./CocktailsForSpecificIngredientPage";
import { Provider } from "react-redux";
import configureStore from "../../configureStore";

const store = configureStore();

test("<CocktailsForSpecificIngredientPage/> renders correctly", () => {
  const match = { params: { ingredientName: "vodka" } };
  const component = render(
    <Provider store={store}>
      <CocktailsForSpecificIngredientPage match={match} />
    </Provider>
  );
  expect(component).toBeTruthy();
});
