import "./App.css";
import { useState } from "react";

import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/card";
import { CreateContentModal } from "./components/ui/CreateContentModal";
import { PlusIcon } from "./Icons/plusIcon";
import { ShareIcon } from "./Icons/shareIcon";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="p-2">
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex justify-end gap-4">
        <div>
        <Button onClick={() => {setModalOpen(true)
        }} variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
        </div>
        <div>
        <Button onClick={() => {
        }} variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
        </div>
      </div>
      <div className="flex gap-4">
        <Card
          title="new project"
          link="https://www.youtube.com/watch?v=aamk2isgLRk"
          type="youtube"
        />
        <Card title="tweet" link="https://x.com/CricCrazyJohns/status/1868279004803047466" type="twitter" />
      </div>
    </div>
  );
}

export default App;
