import React from "react";
import "@GeisianeAraujo/ds-core/dist/components/card";
import "@GeisianeAraujo/ds-core/dist/components/tag";
import "@GeisianeAraujo/ds-core/dist/components/typography";

import "./style.scss";

export const CardContent = ({
  tagContent,
  headingContent,
  paragraphContent,
}) => {
  return (
    <dsc-card class="card-content">
      <dsc-tag>{tagContent}</dsc-tag>
      <dsc-typography variant="h2" component="heading" size="lg">
        {headingContent}
      </dsc-typography>
      <dsc-typography component="paragraph">{paragraphContent}</dsc-typography>
    </dsc-card>
  );
};
