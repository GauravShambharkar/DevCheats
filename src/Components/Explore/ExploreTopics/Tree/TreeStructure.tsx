import React, { useState } from "react";
import { ChevronRight, ChevronDown, Folder, File } from "lucide-react";

type TreeNode = {
  [key: string]: TreeNode | null;
};

interface TreeStructureProps {
  rootFolder: string;
  files: string[];
}

// Converts ["src/store/index.ts"] into a nested object tree
const buildTree = (files: string[]): TreeNode => {
  const tree: TreeNode = {};

  files.forEach((path) => {
    const parts = path.split("/");
    let current: TreeNode = tree;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;

      if (!current[part]) {
        current[part] = isFile ? null : {};
      }

      if (!isFile) {
        current = current[part] as TreeNode;
      }
    });
  });

  return tree;
};

interface NodeProps {
  name: string;
  node: TreeNode | null;
}

const Node: React.FC<NodeProps> = ({ name, node }) => {
  const isFile = node === null;
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-4">
      <div
        className="flex items-center gap-1 cursor-pointer select-none"
        onClick={() => !isFile && setOpen(!open)}
      >
        {isFile ? (
          <File size={15} />
        ) : open ? (
          <ChevronDown size={15} />
        ) : (
          <ChevronRight size={15} />
        )}

        {!isFile && <Folder size={15} />}
        <span className={isFile ? "" : "font-medium"}>{name}</span>
      </div>

      {!isFile && open && (
        <div className="ml-4 mt-1">
          {Object.entries(node!).map(([childName, childNode]) => (
            <Node key={childName} name={childName} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeStructure: React.FC<TreeStructureProps> = ({
  rootFolder,
  files,
}) => {
  const tree = {
    [rootFolder]: buildTree(files),
  };

  return (
    <div className="p-3 rounded-lg text-black w-fit text-sm">
      {Object.entries(tree).map(([name, node]) => (
        <Node key={name} name={name} node={node} />
      ))}
    </div>
  );
};

export default TreeStructure;
