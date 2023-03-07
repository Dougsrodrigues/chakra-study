import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink, NavSection } from "./";

export function SidebarNav() {
  return (
    <Stack
      spacing='12'
      align='flex-start'
    >
      <NavSection title='GERAL'>
        <NavLink
          href='/dashboard'
          icon={RiDashboardLine}
        >
          Dashboard
        </NavLink>

        <NavLink
          href='/users'
          icon={RiContactsLine}
        >
          Usuários
        </NavLink>

      </NavSection>

      <NavSection
        title='AUTOMAÇÃO'
      >
        <NavLink
          href='/forms'
          icon={RiDashboardLine}
        >
          Dashboard
        </NavLink>
        <NavLink
          href='/automation'
          icon={RiInputMethodLine}
        >
          Formulários
        </NavLink>
      </NavSection>

    </Stack >
  )
}