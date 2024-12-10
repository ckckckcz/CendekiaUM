import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TentangKami from "../components/TentangKami";
import Tujuan from "../components/Tujuan";
import Materi from "../components/Materi";
import Evaluasi from "../components/Evaluasi";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function App() {
    return(
        <>
            <Navbar />
            <Header />
            <TentangKami />
            <Tujuan/>
            <Materi/>
            <Evaluasi/>
            <Team/>
            <Footer/>
        </>
    );
}
