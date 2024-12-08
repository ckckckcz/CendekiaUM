import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Team from "../components/Team";
import Tujuan from "../components/Tujuan";
import BahanAjar from "../components/BahanAjar";
import Evaluasi from "../components/Evaluasi";
export default function App() {
    return(
        <>
            <Navbar />
            <Header />
            <Team/>
            <Tujuan/>
            <BahanAjar/>
            <Evaluasi/>
        </>
    );
}