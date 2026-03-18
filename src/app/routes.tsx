import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { ResearchPage } from "./pages/ResearchPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "applications", Component: ApplicationsPage },
      { path: "technology", Component: TechnologyPage },
      { path: "research", Component: ResearchPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
