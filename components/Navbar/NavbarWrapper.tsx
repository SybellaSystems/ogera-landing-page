import Navbar from "./Navbar";

export default function NavbarWrapper({ solid = false }: { solid?: boolean }) {
  return <Navbar solid={solid} />;
}
