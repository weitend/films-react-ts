import { Provider } from "react-redux";
import { store } from "../store";

export function FilmsProvider({ children }: {children: React.ReactNode}) {
  return <Provider store={store}>{children}</Provider>;
}
