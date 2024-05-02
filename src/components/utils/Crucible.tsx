import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Crucible({
  backTitle,
  backLink,
  presentTitle,
}: {
  backLink: string;
  backTitle: string;
  presentTitle: string;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mt-4 text-sm">
      <Link to={backLink} className="font-medium">
        {backTitle}
      </Link>
      <MoveRight />
      <span className="text-neutral-600">{presentTitle}</span>
    </div>
  );
}
