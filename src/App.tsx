import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/card'
import { PlusIcon } from './Icons/plusIcon' 
import { ShareIcon } from './Icons/shareIcon' 

function App() {

  return (
    <>

<Button 
        variant={"secondary"}
        startIcon={<PlusIcon size={"md"} />} 
        endIcon={<ShareIcon size={"md"} />} 
        size="md" 
        title={"Share"}
      ></Button>

      <Card />
      
    </>
  ) 
}

export default App