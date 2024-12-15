import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/card";
import { PlusIcon } from "./Icons/plusIcon";
import { ShareIcon } from "./Icons/shareIcon";

function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button
          onClick={() => {}}
          variant="primary"
          text="Add content"
          startIcon={<PlusIcon size="md"  />}
          fullWidth={true}
          loading={false}
        ></Button>
        <Button
          onClick={() => {}}
          variant="secondary"
          text="Add content"
          startIcon={<ShareIcon size="md"  />}
          fullWidth={true}
          loading={false}
        ></Button>
      </div>
      <div className="flex gap-4">
        <Card
          title="new project"
          link="https://www.youtube.com/watch?v=aamk2isgLRk"
          type="youtube"
        />
      </div>
    </div>
  );
}

export default App;
