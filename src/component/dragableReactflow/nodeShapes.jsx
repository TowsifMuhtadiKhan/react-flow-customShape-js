// Flow.jsx
import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import TextUpdaterNode from "./TextUpdaterNode";
import CircleNode from "./CircleNode";
import TriangleNode from "./TriangleNode"; // Import the new triangle node
import DiamondNode from "./DiamondNode";

import "./text-updater-node.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "circleNode",
    position: { x: 150, y: 0 },
    data: { value: 456 },
  },
  {
    id: "node-3",
    type: "triangleNode", // Use the new triangle node type
    position: { x: 300, y: 0 },
    data: { value: 789 },
  },
  {
    id: "node-4",
    type: "diamondNode", // Use the new diamond node type
    position: { x: 450, y: 0 },
    data: { value: 987 },
  },
];

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  circleNode: CircleNode,
  triangleNode: TriangleNode,
  diamondNode: DiamondNode, // Add the new node type
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </div>
  );
}

export default Flow;
