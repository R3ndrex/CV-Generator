import UserDataProvider from "./UserDataProvider.jsx";
import Header from "./components/Header.jsx";
import CvChanger from "./components/CVChanger/CvChanger.jsx";
import CV from "./components/CV.jsx";
import "./App.css";

export default function App() {
    return (
        <UserDataProvider>
            <Header />
            <CvChanger />
            <CV />
        </UserDataProvider>
    );
}
