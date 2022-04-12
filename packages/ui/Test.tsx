import * as React from "react";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Test = ({ data, parentField }: {data: any, parentField: any}) => {

  return (

        <div>
          {data.text && (
            <div
              data-tinafield={`${parentField}.text`}
              className={`prose prose-lg mx-auto lg:mx-0 mb-10`}
            >test
              <TinaMarkdown content={data.text} />
            </div>
          )}

        </div>
  );
};

export const testBlockSchema: TinaTemplate = {
  name: "test",
  label: "Test",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
  ],
};
