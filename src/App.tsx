import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/card";
import { PlusIcon } from "./Icons/plusIcon";
import { ShareIcon } from "./Icons/shareIcon";

function App() {
  return (
    <div className="p-2">
      <div className="flex justify-end gap-4">
        <div>
        <Button onClick={() => {
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
