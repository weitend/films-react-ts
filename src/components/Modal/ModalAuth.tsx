import { userSelector } from "../../redux/selectors";
import ModalEmail from "./ModalEmail";
import ModalToken from "./ModalToken";
import { useSelector } from "react-redux";

export default function ModalAuth({ close }: { close: () => void }) {
  const userState = useSelector(userSelector);

  return userState.email ? <ModalToken close={close} /> : <ModalEmail />;
}
