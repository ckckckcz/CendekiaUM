import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Team from "../components/Team";
import Tujuan from "../components/Tujuan";
import Materi from "../components/Materi";
import Evaluasi from "../components/Evaluasi";
export default function App() {
    return(
        <>
            <Navbar />
            <Header />
            <Team/>
            <Tujuan/>
            <Materi/>
            <Evaluasi/>
        </>
    );
}