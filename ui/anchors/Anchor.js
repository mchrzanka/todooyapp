import Link from "next/link" 
import {HyperLink, HyperLinkButton} from "./styles"
 
 function Anchor({href, children, ...props}) {
    return (
      <Link href={href}>      
        <HyperLink {...props}>
          {children}
        </HyperLink> 
      </Link>
    )
}

function AnchorButton({href,label, children, ...props}) {
  return (
        <Link href={href}>
          <HyperLinkButton {...props}>
          {children} 
          </HyperLinkButton> 
        </Link>
  )
}

export {Anchor, AnchorButton}