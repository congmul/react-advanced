import Dropdown from 'react-bootstrap/Dropdown';

function Account():JSX.Element{
    return(<>
    <div className="account-wrapper">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="avatar">
                    <span className="label">JJ</span>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item>Welcome, [Username]</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Preferences</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</>)}

export default Account;