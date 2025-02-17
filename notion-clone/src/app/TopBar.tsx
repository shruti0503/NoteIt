
import { Button } from "@/components/ui/button";
interface TopBarProps {
    title?: string;
  }
const TopBar = () => {
  return (
    <div className="flex  justify-between text-black border-b-2">
        <ul className="flex py-2 px-2 gap-3 ps-4 items-center font-bold">
            <li>Home</li>
            <li>Product</li>
            <li>Teams</li>
            <li>Pricing</li>
            <li>Features</li>
        </ul>
        <div className="flex py-2 px-2 gap-3 pe-4 hover:font-bold">
            <Button className="font-bold">Start Now</Button>     
        </div>
    </div>
  )
}

export default TopBar