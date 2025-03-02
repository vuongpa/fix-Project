import React from "react";
import { useEditor, Element } from "@craftjs/core";
import { elementConfigs } from "../../../data";
import { ImageLayout } from "./image-layout";


export const ImageIcon: React.FC = () => {
  const { connectors: { create } } = useEditor();
  const containerData = elementConfigs.find((el) => el.name === "Image");

  if (!containerData) return <div>Container not found</div>;

  return (
    <div
      className="flex flex-col items-center gap-2 p-1  cursor-pointer"
      ref={(ref: HTMLDivElement) => {
        create(
          ref,
          <Element
            canvas
            is={ImageLayout}
          />
        )
      }}
    >
      <img src={containerData.iconUrl} alt={containerData.name} className="w-6 h-6" />
      <span className="text-xs font-medium">{containerData.name}</span>
    </div>
  );
};
