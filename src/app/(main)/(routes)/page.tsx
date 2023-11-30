import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-2xl">Hello world</p>
      <Button>
        Click me
      </Button>
      <ModeToggle />
    </div>
  )
}
