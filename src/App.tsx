import { Switch, Route, Router as WouterRouter } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";
import PAAI from "@/pages/products/PAAI";
import SDLCFactory from "@/pages/products/SDLCFactory";
import LegalPA from "@/pages/products/LegalPA";
import AIUniverse from "@/pages/products/AIUniverse";
import GlobalTutor from "@/pages/products/GlobalTutor";
const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/paai" component={PAAI} />
      <Route path="/products/sdlc-factory" component={SDLCFactory} />
      <Route path="/products/legalpa" component={LegalPA} />
      <Route path="/products/aiuniverse" component={AIUniverse} />
      <Route path="/products/global-tutor" component={GlobalTutor} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/insights" component={Insights} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
