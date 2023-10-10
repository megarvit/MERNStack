//export before function is namespace export
//props is an object {name:ethnus}
function Header(props) {
    return (
      <div>
        <h1>Header {props.name}</h1>
      </div>
    );
  }
//export default Header; //default export
//in html code u r writing the js it need to be present inside the {}

export function Footer(props)
{
    return (
        <div>
            <h1>Footer {props.brand}</h1>
        </div>
    );
}

export default Header;