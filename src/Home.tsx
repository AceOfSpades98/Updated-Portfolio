import { useState } from "react";
import ContactCard from "./components/ContactCard";
import ContactModal from "./components/ContactModal";
import HomeSections from "./components/HomeSections";

import "./styles/index.css";
import "./styles/styles.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <div className="wrapper">
        <ContactCard onContactClick={() => setIsModalOpen(true)} />
        <HomeSections />
        <ContactModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </main>
  );
}
