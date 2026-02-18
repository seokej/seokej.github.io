import { useRouter } from "next/router";
import TossComponent from "@/components/toss/TossComponent";

export default function Toss() {
  const router = useRouter();
  const variantParam = router.query.variant;

  const variant =
    variantParam === "sub" || variantParam === "main"
      ? (variantParam as "main" | "sub")
      : "main";

  return <TossComponent variant={variant} />;
}
