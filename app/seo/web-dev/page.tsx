"use client"

import Header from "./header"
import Included from "./dev-services"
import Tech from "./tech-stack"
import Process from "./our-process"
import Faq from "../web-design/faq"
import ContactSection from "@/app/components/contact"
import Security from "./security"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import {
    VscHome,
} from "react-icons/vsc";
import { useRouter } from "next/navigation";

export default function Webdev() {
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
            <Included />
            <Tech />
            <Process />
            <Security />
            <Faq />
            <ContactSection />
            <Footer />
        </>
    )
}