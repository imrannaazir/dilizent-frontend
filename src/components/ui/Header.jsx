import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
// eslint-disable-next-line react/prop-types
export default function Header({ pageName }) {
  return (
    <div className="text-center bg-gradient-to-b from-primary/10 to-transparent py-20">
      <h1 className="text-[3rem] font-bold">{pageName}</h1>

      <p className="flex items-center gap-1 justify-center">
        <Link className="text-primary font-semibold" to="/">
          Home
        </Link>
        <GoPrimitiveDot className="mt-1 text-primary" />
        <span>{pageName}</span>
      </p>
    </div>
  );
}
