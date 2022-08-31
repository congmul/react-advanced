interface PropsType{
    children: React.ReactNode;
}

function Footer({children}:PropsType):JSX.Element {
    return(
        <footer>{children}</footer>
    )
}

export default Footer;