import { Link as ChakraLink, Icon, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../";

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType;
  children: string;
  href: string;
}

export function NavLink({
  icon,
  children,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      passHref
    >
      <ChakraLink
        {...rest}
        display='flex'
        alignContent='center'
        color='grey.400'
      >
        <Icon
          as={icon}
          fontSize='20'
        />
        <Text
          ml='4'
          fontWeight='medium'
        >
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>

  )
}