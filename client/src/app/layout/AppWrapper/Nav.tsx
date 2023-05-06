import styled from "@emotion/styled";
import tw from "twin.macro";

import { ReactComponent as LogoIcon } from "app/assets/icons/Logo.svg";
import links from "./links";

export default function Nav() {
  return (
    <NavWrapper>
      <LogoIcon />

      <div className="pt-[80px]">
        {links.map((link) => (
          <NavLink key={link.name}>
            {link.icon}
            <p className="text-[1.6rem]">{link.name}</p>
          </NavLink>
        ))}
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  ${tw`bg-dark p-[20px] h-full`}
`;

const NavLink = styled.div`
  ${tw`flex items-center gap-[15px] mb-[10px] py-[10px] cursor-pointer text-grey hover:text-white border-none`}
`;
