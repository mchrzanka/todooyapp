 import {TextSpacer} from './styles'
 
 
 function Spacer({children, ...props}) {
    return (
        <TextSpacer {...props}>
            <hr/> <p>{children}</p> <hr/>
        </TextSpacer>
    )
}

export default Spacer