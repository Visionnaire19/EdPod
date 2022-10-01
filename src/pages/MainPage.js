import Input from "../components/Input";
import '../utils.css'
import './MainPage.css'
const MainPage = () => {

    document.title = "Main Page";
  
    return (
        <div className="MainPage-container" >
            <div>
            <Input></Input>
            <AiFillCaretDown size={20} onClick={handleListDisplay} ></AiFillCaretDown>
            </div>

        </div>
        
    );


};
export default MainPage;

const subjects = [
    "Calculus",
    "Multivariable Calculus",
    "Data Structures",
    "Python",
    "Java",
    "Sewing",
    "The World??"
]