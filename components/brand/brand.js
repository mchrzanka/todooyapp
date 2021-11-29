import Link from 'next/link'
import { Logo } from "components/icons/logo"
import {BrandStyles} from "./styles"


function Brand ({...props}){
  return(
    <Link href="/">
    <BrandStyles {...props}>
      <Logo {...props}/>
      <figcaption><h2>2doolyst</h2></figcaption>
    </BrandStyles>
    </Link>
  )
}

export default Brand