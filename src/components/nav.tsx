import Image from "next/image";
import Dropdown from "./dropdown";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="flex items-center">
        <Image
          src="https://nux.ai/static/img/icons/nux.png"
          alt="logo"
          width={20}
          height={20}
        />
        <span className="text-lg font-semibold text-white pl-1">NUX.ai</span>
      </a>
      <ul className="flex items-center [&>li]:px-5 [&>li]:py-8 [&>li]:tracking-[-.01rem]">
        <li className="text-white font-bold">
          <a href="#">Explore</a>
        </li>
        <li className="text-white font-bold">
          <a href="#">Docs</a>
        </li>
        <li className="text-white font-bold">
          <Dropdown item="Learn" items={["Learning Center", "FAQ"]} />
        </li>
        <li className="text-white font-bold">
          <Dropdown
            item="Company"
            items={["About", "Careers", "Trust & Security", "Contact"]}
          />
        </li>
      </ul>
      <a
        href="#"
        className="text-white font-bold bg-[#00a587] rounded-full px-5 py-2 tracking-[-.01rem]"
      >
        Start building
      </a>
    </nav>
  );
}
