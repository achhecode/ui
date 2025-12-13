import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Check() {
  return (
    <div>
        {/* Logo */}
        <Image src="/achhecodelogo.jpg" height={50} width={50} alt="Company Logo" />
        {/* Home */}
        
        <Button variant="secondary" className="btn-transparent">Home
            {/* <ArrowRight className="group-hover:hidden" /> */}
            {/* <Check className="hidden group-hover:inline-block" /> */}
        </Button>
    </div>
  );
}
