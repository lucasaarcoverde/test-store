import { SectionOverride } from "@faststore/core";
import { CustomProductShelf } from "../CustomProductShelf";

const SECTION = "ProductShelf" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    ProductShelf: { Component: CustomProductShelf },
  },
};

export { override };
