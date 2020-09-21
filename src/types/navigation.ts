import { Shop } from "./shop";

export type RootStackParamList = {
  Home: undefined;
  Main: undefined;
  Shop: { shop: Shop };
  User: undefined;
  CreateReview: { shop: Shop };
};
