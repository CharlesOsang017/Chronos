import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant={"outline"}
      size='sm'
      onClick={() => navigate(-1)}
      className='p-4 mr-4'
    >
      <ArrowLeft />  Back
    </Button>
  );
};

export default BackButton;
