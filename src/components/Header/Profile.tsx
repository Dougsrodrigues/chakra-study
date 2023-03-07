import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >

      {showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>Douglas</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            dougsrodrigues@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Douglas Rodrigues"
        src="https://github.com/dougsrodrigues.png"
      />
    </Flex>
  )
}