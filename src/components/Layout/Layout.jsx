import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { LayoutStyle } from "./Layout.styles";

export function Layout({ children }) {
  return (
      <LayoutStyle>
        <Header />
        {children}
        <Footer />
      </LayoutStyle>
  )
}