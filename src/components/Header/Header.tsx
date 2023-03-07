import { useSidebarDrawer } from "@/context";
import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Logo, NotificationNav, Profile, Search } from ".";
export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          aria-label="Open navigation"
        />
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />

        <Profile
          showProfileData={isWideVersion}
        />
      </Flex>
    </Flex>
  )
}