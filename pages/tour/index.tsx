import { Title, Text, Anchor, Button, Image, Box, Center, Group, Flex } from '@mantine/core';
import { GizmoHelper, GizmoViewport, Grid, Html, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';

export default function Tour() {


  return (
    <>
      <Title align="center" mt={50}>
        Plano del<br />
        <Text inherit variant="gradient" component="span">
          Apartamento
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Clic en cualquier punto para comenzar.
      </Text>
      <Center>
      <div style={{ width: "100%", height: '50vh'}}>
      <Canvas orthographic camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
        <group>
          <mesh position={[0,0, 0]}>
        <Html center>
        <Image src='/planos.png' width="25rem" />
        </Html>
        </mesh>
          <mesh position={[0, 0, 0]}>
        <Html center>
        <Flex
              gap="lg"
              justify="center"
              align="center"
              direction="row"
        >
        <Link href="/tour/hall">
        <Button size="xs" compact>Hall</Button>
        </Link>
        <Link href="/tour/cocina">
        <Button size="xs" compact>Cocina</Button>
        </Link>
        <Link href="/tour/salon">
        <Button size="xs" compact>Salón</Button>
        </Link>
        </Flex>
        </Html>
        </mesh>
        </group>
      <Grid infiniteGrid/>
          <GizmoHelper alignment="center-center" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
      </Canvas>
      </div>
      </Center>
    </>
  );
}
