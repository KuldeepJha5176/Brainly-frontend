import "./App.css";
import { useState } from "react";

import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/card";
import { CreateContentModal } from "./components/ui/CreateContentModal";
import { PlusIcon } from "./Icons/plusIcon";
import { ShareIcon } from "./Icons/shareIcon";
import { Sidebar } from "./components/ui/Sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false); // Type modal state

  return (<>
  <div>
    <Sidebar />
    
    <div className=" ml-72 min-h-screen bg-gray-100 border-2">
      {/* Create Content Modal */}
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <div>
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          />
        </div>
        <div>
          <Button
            onClick={() => {}}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-4">
        <Card
          title="New Project"
          link="https://www.youtube.com/watch?v=aamk2isgLRk"
          type="youtube"
        />
        <Card
          title="Tweet"
          link="https://x.com/CricCrazyJohns/status/1868279004803047466"
          type="twitter"
        />
        
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
