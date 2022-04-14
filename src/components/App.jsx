import React from "react";
import BgPatternDesktop from "../images/bg-pattern-desktop.svg"
import BoxDesktop from "../images/illustration-box-desktop.svg"
import WomanDesktop from "../images/illustration-woman-online-desktop.svg"
import Accordeon from "./Accordeon"
import items from "../Items"

function App() {
  return (
    <div className="container main-container">
      <img className="box-desktop" src={BoxDesktop}/>
      <main className="row h-100 position-relative">
        <section className="col col-lg-4 col-sm-12 images-container">
            <img className="woman-desktop" src={WomanDesktop}/>
            <img className="bg-pattern-desktop" src={BgPatternDesktop}/>
        </section>

        <section className="col col-lg-5 col-sm-12 ms-auto me-5 h-100 p-4">
          <h1 className="faq">FAQ</h1>
          
          <div className="">
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
