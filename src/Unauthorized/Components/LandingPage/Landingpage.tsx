
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  Icon,
  Image,
  Badge,
  Flex,
  Link,
  SimpleGrid,
  AspectRatio,
  IconButton,
  Stack,
  Center
} from '@chakra-ui/react';
import { Star, Shield, Truck, Headphones, ShoppingCart, Heart, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const LandingPage = () => {
  const bgGradient = 'linear(to-br, gray.900, gray.800, black)';
  const cardBg = 'white';
  const textColor = 'gray.600';

    return (
    <Box minH="100vh" bg="white">
      {/* Hero Section */}
      <Box
        bgGradient={bgGradient}
        color="white"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="7xl" py={{ base: 20, md: 32 }}>
          <VStack gap={8} textAlign="center" maxW="4xl" mx="auto">
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              Premium Ayakkabılar
              <Text
                as="span"
                display="block"
                bgGradient="linear(to-r, yellow.400, orange.400)"
                bgClip="text"
                color="transparent"
              >
                Hayalinizdeki Stil
              </Text>
            </Heading>
            
            <Text
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              color="gray.300"
              maxW="3xl"
              lineHeight="tall"
            >
              Konfor, kalite ve şıklığı bir arada sunan ayakkabı koleksiyonumuzla 
              günlük yaşamınızı renklendirin
            </Text>
            
            <HStack
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              justify="center"
              w="full"
            >
              <Button
                size="lg"
                colorScheme="yellow"
                color="black"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: 'xl'
                }}
                transition="all 0.3s"
              >
                <Icon as={ShoppingCart} mr={2} />
                Hemen Alışverişe Başla
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  bg: 'white',
                  color: 'black'
                }}
                transition="all 0.3s"
              >
                Koleksiyonu İncels
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={16}>
            <VStack gap={4} textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="gray.900"
              >
                Neden Bizi Seçmelisiniz?
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="2xl"
              >
                Kalite ve müşteri memnuniyeti odaklı hizmet anlayışımız
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {[
                {
                  icon: Shield,
                  title: 'Premium Kalite',
                  description: 'En kaliteli malzemelerle üretilen, uzun ömürlü ayakkabılar'
                },
                {
                  icon: Truck,
                  title: 'Hızlı Teslimat',
                  description: 'Türkiye geneli ücretsiz ve hızlı kargo imkanı'
                },
                {
                  icon: Headphones,
                  title: '7/24 Destek',
                  description: 'Müşteri hizmetlerimiz her zaman yanınızda'
                }
              ].map((feature, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="lg"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl'
                  }}
                  transition="all 0.3s"
                  p={8}
                  textAlign="center"
                >
                    <Center
                      w={16}
                      h={16}
                      bg="yellow.100"
                      borderRadius="full"
                      mb={6}
                      mx="auto"
                    >
                      <Icon as={feature.icon} w={8} h={8} color="yellow.600" />
                    </Center>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="bold"
                      mb={3}
                      color="gray.900"
                    >
                      {feature.title}
                    </Heading>
                    <Text color={textColor}>
                      {feature.description}
                    </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Products Showcase */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack gap={16}>
            <VStack gap={4} textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="gray.900"
              >
                En Popüler Modeller
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="2xl"
              >
                Müşterilerimizin en çok tercih ettiği ayakkabı modelleri
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {[
                { 
                  name: "Classic Sneaker", 
                  price: "₺899", 
                  image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
                  badge: "En Popüler"
                },
                { 
                  name: "Elegant Oxford", 
                  price: "₺1,299", 
                  image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
                  badge: "Premium"
                },
                { 
                  name: "Comfort Runner", 
                  price: "₺799", 
                  image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
                  badge: "Yeni"
                }
              ].map((product, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="lg"
                  overflow="hidden"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl'
                  }}
                  transition="all 0.3s"
                  position="relative"
                >
                  <Box position="relative" overflow="hidden">
                    <AspectRatio ratio={4/3}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        objectFit="cover"
                        _hover={{
                          transform: 'scale(1.1)'
                        }}
                        transition="transform 0.3s"
                      />
                    </AspectRatio>
                    
                    <Badge
                      position="absolute"
                      top={4}
                      left={4}
                      colorScheme="yellow"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {product.badge}
                    </Badge>
                    
                    <IconButton
                      position="absolute"
                      top={4}
                      right={4}
                      aria-label="Favorilere ekle"
                      bg="white"
                      color="gray.600"
                      borderRadius="full"
                      opacity={0}
                      _groupHover={{ opacity: 1 }}
                      _hover={{
                        bg: 'yellow.500',
                        color: 'white'
                      }}
                      transition="all 0.3s"
                    >
                      <Icon as={Heart} />
                    </IconButton>
                  </Box>
                  
                  <Box p={6}>
                    <VStack gap={4} align="stretch">
                      <Heading
                        as="h3"
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {product.name}
                      </Heading>
                      
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color="yellow.600"
                      >
                        {product.price}
                      </Text>
                      
                      <Button
                        colorScheme="gray"
                        color="white"
                        bg="gray.900"
                        _hover={{
                          bg: 'yellow.500',
                          color: 'black'
                        }}
                        size="lg"
                        transition="all 0.3s"
                      >
                        <Icon as={ShoppingCart} mr={2} />
                        Sepete Ekle
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={16}>
            <VStack gap={4} textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="gray.900"
              >
                Müşteri Yorumları
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                maxW="2xl"
              >
                Binlerce mutlu müşterimizin deneyimleri
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {[
                { 
                  name: "Ahmet Yılmaz", 
                  rating: 5, 
                  comment: "Çok kaliteli ve rahat ayakkabılar. Kesinlikle tavsiye ederim!",
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                },
                { 
                  name: "Elif Kaya", 
                  rating: 5, 
                  comment: "Hızlı teslimat ve mükemmel müşteri hizmeti. Teşekkürler!",
                  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                },
                { 
                  name: "Mehmet Demir", 
                  rating: 5, 
                  comment: "Fiyat performans açısından çok başarılı. Memnun kaldım.",
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                }
              ].map((testimonial, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="lg"
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl'
                  }}
                  transition="all 0.3s"
                  p={6}
                >
                    <VStack gap={4} align="start">
                      <HStack gap={1}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            as={Star}
                            w={5}
                            h={5}
                            color="yellow.400"
                            fill="currentColor"
                          />
                        ))}
                      </HStack>
                      
                      <Text
                        color={textColor}
                        fontStyle="italic"
                        lineHeight="tall"
                      >
                        "{testimonial.comment}"
                      </Text>
                      
                      <HStack gap={3}>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          w={10}
                          h={10}
                          borderRadius="full"
                          objectFit="cover"
                        />
                        <Text
                          fontWeight="bold"
                          color="gray.900"
                        >
                          {testimonial.name}
                        </Text>
                      </HStack>
                    </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        py={{ base: 16, md: 20 }}
        bgGradient="linear(to-r, yellow.500, orange.500)"
        color="white"
      >
        <Container maxW="7xl">
          <VStack gap={8} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
            >
              Hemen Alışverişe Başlayın!
            </Heading>
            
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              maxW="2xl"
            >
              İlk siparişinizde %20 indirim fırsatını kaçırmayın
            </Text>
            
            <HStack
              gap={4}
              direction={{ base: 'column', sm: 'row' }}
              justify="center"
            >
              <Button
                size="lg"
                bg="white"
                color="yellow.600"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  bg: 'gray.100'
                }}
                transition="all 0.3s"
              >
                <Icon as={ShoppingCart} mr={2} />
                Alışverişe Başla
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  bg: 'white',
                  color: 'yellow.600'
                }}
                transition="all 0.3s"
              >
                İletişime Geç
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={12}>
        <Container maxW="7xl">
          <VStack gap={8}>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} w="full">
              <VStack gap={4} align="start">
                <Heading as="h3" fontSize="xl" fontWeight="bold">
                  Ayakkabı Dünyası
                </Heading>
                <Text color="gray.400" lineHeight="tall">
                  Kaliteli ve şık ayakkabılar için doğru adres. 
                  Müşteri memnuniyeti bizim önceliğimiz.
                </Text>
              </VStack>
              
              <VStack gap={4} align="start">
                <Heading as="h4" fontSize="lg" fontWeight="semibold">
                  Hızlı Linkler
                </Heading>
                <VStack gap={2} align="start">
                  {['Ana Sayfa', 'Ürünler', 'Hakkımızda', 'İletişim'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      color="gray.400"
                      _hover={{ color: 'white' }}
                      transition="color 0.3s"
                    >
                      {link}
                    </Link>
                  ))}
                </VStack>
              </VStack>
              
              <VStack gap={4} align="start">
                <Heading as="h4" fontSize="lg" fontWeight="semibold">
                  Müşteri Hizmetleri
                </Heading>
                <VStack gap={2} align="start">
                  {['Sipariş Takibi', 'İade & Değişim', 'Beden Rehberi', 'SSS'].map((service) => (
                    <Link
                      key={service}
                      href="#"
                      color="gray.400"
                      _hover={{ color: 'white' }}
                      transition="color 0.3s"
                    >
                      {service}
                    </Link>
                  ))}
                </VStack>
              </VStack>
              
              <VStack gap={4} align="start">
                <Heading as="h4" fontSize="lg" fontWeight="semibold">
                  İletişim
                </Heading>
                <VStack gap={2} align="start">
                  <HStack gap={2}>
                    <Icon as={Phone} w={4} h={4} color="gray.400" />
                    <Text color="gray.400">+90 (212) 555 0123</Text>
                  </HStack>
                  <HStack gap={2}>
                    <Icon as={Mail} w={4} h={4} color="gray.400" />
                    <Text color="gray.400">info@ayakkabidunyasi.com</Text>
                  </HStack>
                  <HStack gap={2}>
                    <Icon as={MapPin} w={4} h={4} color="gray.400" />
                    <Text color="gray.400">İstanbul, Türkiye</Text>
                  </HStack>
                </VStack>
              </VStack>
            </SimpleGrid>
            
            <Box borderTop="1px" borderColor="gray.800" />
            
            <Text color="gray.400" textAlign="center">
              &copy; 2024 Ayakkabı Dünyası. Tüm hakları saklıdır.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;