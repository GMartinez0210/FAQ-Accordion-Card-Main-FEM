import React from "react";
import BgPatternDesktop from "../images/bg-pattern-desktop.svg"
import BoxDesktop from "../images/illustration-box-desktop.svg"
import WomanDesktop from "../images/illustration-woman-online-desktop.svg"
import Accordeon from "./Accordeon"
import items from "../Items"

function App() {
  return (
    <div className="container main-container">
      
      <main className="row main-subcontainer">
        <div className="col col-lg-6 col-sm-12 images-container">
          <section className="images-subcontainer">
              <img className="woman-desktop" src={WomanDesktop}/>
              <img className="bg-pattern-desktop" src={BgPatternDesktop}/>
          </section>
          <img className="box-desktop" src={BoxDesktop}/>
        </div>
        

        <section className="col col-lg-5 col-sm-12  h-auto p-4 accordeon-container">
          <h1 className="faq">FAQ</h1>
          
          <div className="accordeon-subcontainer">
            {items.map((item, index) => {
              return (<Accordeon 
                key={index}
                id={index}
                title={item.title}
                content={item.content}
              />)
            })}
          </div>

        </section>
      </main>
    </div>
  );
}

export default App;
