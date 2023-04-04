import { Title, Text, Anchor, Image, Button, BackgroundImage, Box, Center, SimpleGrid } from '@mantine/core';
import useStyles from './Welcome.styles';
import Link from 'next/link';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        TourVirtual<br />
        <Text inherit variant="gradient" component="span">
          Apartamento #1
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Este es el tour virtual demo como ejercicio del <Anchor  href="https://pantallaverde.co/toursvirtuales" target="_blank">Curso Tours Virtuales</Anchor>.
      </Text>
      <br/>
      <Center>
      <SimpleGrid cols={1}>
      <Image src="/GS__0090.JPG" radius="lg" width="35rem" />
      <Link href="/tour">
      <Button fullWidth>Comenzar</Button>
      </Link>
      </SimpleGrid>
      </Center>
      
    </>
  );
}
