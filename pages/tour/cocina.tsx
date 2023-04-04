import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Loader, Title, Button, Container, Image, Navbar, Text } from '@mantine/core';
import { Environment, EnvironmentMap, GizmoHelper, GizmoViewport, Grid, Html, OrbitControls } from '@react-three/drei';
import THREE from 'three';
import Link from 'next/link';

export default function Cocina() {

  return (
    <>
    <div style={{ position: "relative", width: "100%", height: '100vh' }}>
      {/* <Box
          sx={(theme) => ({
            width: '100px',
            height: '100px',
            textAlign: 'center',
            padding: '100px',
            borderRadius: theme.radius.md,
            cursor: 'pointer',
            position: 'static',
            top: '100%',
            left: '0%',
          })}
          >
        jfisfasfas
    </Box> */}
      <Canvas flat >
        <Suspense fallback={<Html center><Text align='center'>Dándole duro...<Loader /></Text></Html>} >
          <Environment background files='/GS__0094.hdr' />
          <group>
            <mesh position={[100,-100, 300]}>
              <Html center>
                <Link href="/tour/hall"><Button compact>Hall</Button></Link>
              </Html>
              <meshBasicMaterial color="white"/>
            </mesh>
            <mesh position={[300,-100, -100]}>
              <Html center>
                <Link href="/tour/salon"><Button compact>Salón</Button></Link>
              </Html>
              <meshBasicMaterial color="white"/>
            </mesh>
          </group>
          <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
        </Suspense>
      </Canvas>
    </div></>
  );
}
