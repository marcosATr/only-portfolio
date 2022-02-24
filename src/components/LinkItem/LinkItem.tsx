import Link from "next/link";
import { Link as A } from "@chakra-ui/react";

interface LinkItemProps extends React.HTMLAttributes<Element> {
  href: string;
}

function LinkItem({ href, children }:LinkItemProps){
  return (
    <Link href={href} passHref>
      <A _hover={{ color: "yellow.300" }}>{children}</A>
    </Link>
  );
}

export default LinkItem;
