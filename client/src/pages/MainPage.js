import React from "react";
import Input from "../components/Input";
import '../index.css'
import './MainPage.css'
const MainPage = () => {

    document.title = "Main Page";
  
    return (
        <div className="wrapper">
            <header className="MainPage-header">
               <h1> EdPod </h1>
            </header>
                <main className="MainPage-container">
                    <Input></Input>
                     </main>
                <footer className="MainPage-footer">
                     <p> Footer </p>
                    </footer>
                    </div>
        
    );


};
export default MainPage;

