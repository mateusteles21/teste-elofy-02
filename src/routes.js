import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Teste from "./teste/teste";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Teste }  path="/" exact />
       </BrowserRouter>
   )
}

export default Routes;