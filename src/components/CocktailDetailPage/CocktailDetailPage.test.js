import { render } from "@testing-library/react";
import CocktailDetailPage from "./CocktailDetailPage";
import { Provider } from "react-redux";
import configureStore from "../../configureStore";

const store = configureStore();

test("<CocktailDetailPage/> renders correctly", () => {
  const match = { params: { id: 11060 } };
  const component = render(
    <Provider store={store}>
      <CocktailDetailPage match={match} />
    </Provider>
  );
  expect(component).toBeTruthy();
});
