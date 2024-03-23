import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Room({ position, children }) {
  return (
    <group position={position}>
      {/* Cube transparent */}
      <mesh>
        <boxGeometry attach="geometry" args={[10, 3, 5]} />
        <meshStandardMaterial attach="material" transparent opacity={0.5} />
      </mesh>
      {/* Partition verticale */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry attach="geometry" args={[0.1, 3, 5]} /> {/* Ajustez les dimensions pour une séparation verticale */}
        <meshStandardMaterial attach="material" transparent opacity={0.5} />
      </mesh>
      {children}
    </group>
  );
}

function Door({ position, args, color }) {
  return (
    <mesh position={position}>
      <boxGeometry attach="geometry" args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function DoorOpen({ position, args, color }) {
  return (
    <mesh position={position} rotation={[0, 4.8, 0]}>
      <boxGeometry attach="geometry" args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Window({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry attach="geometry" args={[1, 1.5, 0.1]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
}

function WindowOpen({ position }) {
  return (
    <mesh position={position} rotation={[0, 4.8, 0]}>
      <boxGeometry attach="geometry" args={[1, 1.5, 0.1]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
}

function Floor() {
  return (
    <mesh position={[0, -1.5, 0]}>
      <boxGeometry attach="geometry" args={[10, 0.1, 5]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

function CoffeeTable({ position }) {
  const tableTopPosition = [0, 0.5, 0];
  const tableTopSize = [1, 0.1, 1];
  const legSize = [0.1, 1, 0.1];
  const legPositions = [
    [-0.45, 0.1, -0.45],
    [0.45, 0.1, -0.45],
    [-0.45, 0.1, 0.45],
    [0.45, 0.1, 0.45],
  ];

  return (
    <group position={position}>
      {/* Table top */}
      <mesh position={tableTopPosition}>
        <boxGeometry attach="geometry" args={tableTopSize} />
        <meshStandardMaterial color="brown" />
      </mesh>
      {/* Legs */}
      {legPositions.map((legPosition, index) => (
        <mesh key={index} position={legPosition}>
          <boxGeometry attach="geometry" args={legSize} />
          <meshStandardMaterial color="brown" />
        </mesh>
      ))}
    </group>
  );
}

function Sofa({ position }) {
  const seatSize = [2, 0.5, 1];
  const backrestSize = [2, 0.5, 0.2];
  const armrestSize = [0.2, 0.5, 1];

  return (
    <group position={position} rotation={[0, Math.PI / -2, 0]}>
      {/* Siège */}
      <mesh position={[0, -0.25, 0]}>
        <boxGeometry attach="geometry" args={seatSize} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Dossier */}
      <mesh position={[0, 0.25, -0.4]}>
        <boxGeometry attach="geometry" args={backrestSize} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Accoudoirs */}
      <mesh position={[-0.9, 0, 0]}>
        <boxGeometry attach="geometry" args={armrestSize} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0.9, 0, 0]}>
        <boxGeometry attach="geometry" args={armrestSize} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

function Bed({ position }) {
  const bedSize = [2, 0.1, 3];
  const headboardSize = [2, 1, 0.1];
  const pillarSize = [0.1, 0.5, 0.1];
  const pillarPositions = [
    [-0.95, -0.25, -1.45],
    [0.95, -0.25, -1.45],
    [-0.95, -0.25, 1.45],
    [0.95, -0.25, 1.45],
  ];

  return (
    <group position={position} rotation={[0, Math.PI / -2, 0]}>
      {/* Cadre de lit */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry attach="geometry" args={bedSize} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Tête de lit */}
      <mesh position={[0, 0.5, -1.5]}>
        <boxGeometry attach="geometry" args={headboardSize} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Piliers */}
      {pillarPositions.map((pillarPosition, index) => (
        <mesh key={index} position={pillarPosition}>
          <boxGeometry attach="geometry" args={pillarSize} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
}

function Lamp({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry attach="geometry" args={[0.2, 16, 16]} />
      <meshStandardMaterial color="white" emissive="white" emissiveIntensity={1} />
      <pointLight distance={10} intensity={100} />
    </mesh>
  );
}
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
      <planeGeometry attach="geometry" args={[20, 20]} />
      <meshStandardMaterial attach="material" color="#95f5af" />
    </mesh>
  );
}
function App() {
  const [doorState, setDoorState] = useState({
    door1: false,
    door2: true,
    window1: true,
    window2: true
  })
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 15] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls />
          <Floor />
          {/* Maison avec séparation verticale */}
          <Room position={[0, 0, 0]}>
            <Ground />
            {/* Première chambre */}
            <group position={[-2.55, 0, 0]}>
              {
                !doorState.door1 ? <Door position={[0, 0, -2.5]} args={[1, 2.5, 0.1]} color={'brown'} /> : <><DoorOpen position={[0, 0, -2.9]} args={[1, 2.5, 0.1]} color={'brown'} /> </>
              }
              {
                !doorState.window1 ? <Window position={[0, 0, 2.5]} /> : <WindowOpen position={[0, 0, 2.9]} />
              }
              <Sofa position={[0.5, -1, 0]} />
              <CoffeeTable position={[-1.2, -1.2, 0]} />
              <Lamp position={[0, 1.2, 0]} />
            </group>
            {/* Deuxième chambre */}
            <group position={[2.55, 0, 0]}>
              {
                !doorState.door2 ? <Door position={[-2.6, 0, 0]} args={[0.02, 2.5, 1.5]} color={'brown'} /> : <DoorOpen position={[-3.2, 0, 0]} args={[0.02, 2.5, 1.5]} color={'brown'} />
              }
              <Door position={[-7.5, 0, 0]} args={[0.02, 1.2, 2]} color={'black'} />
              {
                !doorState.window2 ? <Window position={[0, 0, -2.5]} /> : <WindowOpen position={[0, 0, -2.9]} />
              }
              <CoffeeTable position={[1.8, -1.2, 1.8]} />
              <Bed position={[1, -1, 0]} />
              <CoffeeTable position={[1.8, -1.2, -1.8]} />
              <Lamp position={[0, 1.2, 0]} /> {/* Positionner l'ampoule au plafond */}
            </group>
          </Room>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
