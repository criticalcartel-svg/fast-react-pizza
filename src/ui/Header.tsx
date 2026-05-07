import { Link } from "react-router-dom";
import Search from "../features/order/searchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <Search />

      <p>Jonas</p>
    </header>
  );
}
