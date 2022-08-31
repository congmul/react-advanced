import { ReactComponent as HomeSVG } from '../../assets/img/home-icon.svg';

export const navMenu = [
    {
        name: "Link1",
        icon: () => <HomeSVG width="1rem" fill="black" />,
        link: ''
    },
    {
        name: "Link2",
        icon: () => "Link2",
        link: 'link2'
    }, 
    {
        name: "Link3",
        link: 'link3'
    }, 
    {
        name: "Link4",
        link: 'link4'
    }
];