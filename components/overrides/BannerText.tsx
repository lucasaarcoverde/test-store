import { SectionOverride } from "@faststore/core";
import { CustomBannerText } from "../CustomBannerText";
import { CustomBannerTextContent } from "../CustomBannerTextContent";

const SECTION = "BannerText" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    BannerText: { Component: CustomBannerText },
    BannerTextContent: { Component: CustomBannerTextContent },
  },
};

export { override };