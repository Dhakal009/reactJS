
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from "./header";
import MainComponent from "./mainComponet"
import Footer from './footer';

const root = createRoot(document.getElementById('root'))




root.render(
  <>
  <Header/>
  <MainComponent/>
  <Footer/>
  </>

  
)
