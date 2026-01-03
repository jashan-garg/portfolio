'use client';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
