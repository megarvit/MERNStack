//export before function is namespace export
function Header() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
//export default Header; //default export

export function Footer()
{
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
}

export default Header;