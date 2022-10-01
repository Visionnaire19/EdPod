import Input from "../components/Input";
import '../utils.css'
import './MainPage.css'
const MainPage = () => {

    document.title = "Main Page";
  
    return (
        <div class="wrapper">
            <header class="MainPage-header">
               <h1> EdPod </h1>
            </header>
                <main class="MainPage-container">
                    <Input></Input>
                     </main>
                <footer class="MainPage-footer">
                     <p> Footer </p>
                    </footer>
                    </div>
        
    );


};
export default MainPage;

