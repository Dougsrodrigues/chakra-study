import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
}

type SidebarDrawerContextData = ReturnType<typeof useDisclosure>

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)


export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)