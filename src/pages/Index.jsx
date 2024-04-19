import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <Image src="https://images.unsplash.com/photo-1590102426319-c7526718cd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MHx8fHwxNzEzNTAyNzI1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" borderRadius="full" />
      </Flex>
      <SimpleGrid columns={2} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$50,000" percentage="4.5%" />
        <StatBox icon={FaShoppingCart} title="Sales" amount="1,200" percentage="3.8%" />
        <StatBox icon={FaUsers} title="New Customers" amount="80" percentage="2.0%" />
        <StatBox icon={FaChartLine} title="Growth" amount="7.2%" percentage="1.1%" />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentage }) => {
  return (
    <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
      <Flex alignItems="center">
        <Box as={Icon} size="3rem" mr={2} color="blue.500" />
        <Box>
          <StatLabel fontWeight="bold">{title}</StatLabel>
          <StatNumber>{amount}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {percentage}
          </StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
