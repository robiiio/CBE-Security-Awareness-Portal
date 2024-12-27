import { Link } from "react-scroll";
const navigation = [
  { name: "Home", href: "home", current: true },
  { name: "About", href: "about", current: false },
  { name: "Services", href: "service", current: false },
  { name: "Contact", href: "contact", current: false },
];

function Navlogo() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
      <div className="  hidden sm:ml-6 sm:block">
        <div className="flex space-x-3 ">
          {navigation.map((item) => (
            <Link to={item.href} smooth={true} duration={500}  key={item.name}>
              <div
              className={classNames(
                item.current
                  ? "bg-gray-600 text-white"
                  : "text-gray-600 hover:bg-gray-700 hover:text-white",
                "rounded-md px-2 py-2 my-4 m:my-2 md:text-base text-sm  font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
                {item.name} 
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navlogo;
