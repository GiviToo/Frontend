import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useEffect } from "react";

export default function ProductDetail(props) {
  const [data, setData] = useState();
  const router = useRouter();
  const checkUser = authService.getCurrentUser();

  useEffect(() => {
    if (checkUser) {
      const fetchData = (data, token) => {
        axios
          .get(`https://api.givitoo.isnan.me/project/${data.props}`, {
            headers: { Authorization: `Bearer ${token.access}` },
          })
          .then((response) => {
            setData(response.data);
          })
          .catch(() => {
            if (!(typeof window === undefined)) {
              router.push("/login");
            }
          });
      };
      fetchData(props, checkUser);
    } else {
      if (!(typeof window === undefined)) {
        router.push("/login");
      }
    }
  }, [props]);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=1080"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data?.title}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{data?.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Detail
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Owner</ListItem>
                  <ListItem>Expected Duration</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    {data?.owner.name ? data?.owner.name : "unknown"}
                  </ListItem>
                  <ListItem>
                    {data?.expected_duration
                      ? data?.expected_duration
                      : "unknown"}
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Registrant
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    {data?.registrant ? data?.registrant : "no one applied yet"}
                  </Text>
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Apply
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
