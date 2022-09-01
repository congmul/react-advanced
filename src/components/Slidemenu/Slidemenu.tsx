interface PropsType{
    visible: boolean,
    position?: string,
}

function Slidemenu({visible, position = 'left'}: PropsType):JSX.Element{

    return(
    <div className="slide-menu-wrapper">
        Slide Menu
    </div>

)}

export default Slidemenu;