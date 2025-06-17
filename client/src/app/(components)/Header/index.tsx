// Header component for displaying page titles
// Props: name (string) - the title to display
type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  // Render the header title with styling
  return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
};

export default Header;
