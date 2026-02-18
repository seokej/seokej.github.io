import { useRouter } from "next/router";
import PearlabyssComponent from "@/components/pearlabyss/PearlabyssComponent";

export default function Pearlabyss() {
  const router = useRouter();
  const variantParam = router.query.variant;

  const variant =
    variantParam === "sub" || variantParam === "main"
      ? (variantParam as "main" | "sub")
      : "main";

  return <PearlabyssComponent variant={variant} />;
}
