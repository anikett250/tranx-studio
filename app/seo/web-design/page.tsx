"use client"

import Header from "./header"
import Whyus from "./whychooseus"
import Included from "./included"
import Process from "./process"
import Faq from "./faq"
import ContactSection from "@/app/components/contact"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import {
    VscHome,
} from "react-icons/vsc";
import { useRouter } from "next/navigation";


export default function Webdesign() {
    const router = useRouter();
    const items = [
        {
            icon: <VscHome size={18} />,
            label: "Home",
            onClick: () => router.push("/"),
        }
    ];
    return (
        <>
            <Navbar
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
            <Header />
            <Whyus />
            <Included />
            <Process />
            <Faq />
            <ContactSection />
            <Footer />
        </>
    )
}