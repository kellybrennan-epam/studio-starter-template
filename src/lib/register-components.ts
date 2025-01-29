import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
  CONTENTFUL_COMPONENTS,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../studio.config";
import { SiteButtonDefinition, SiteButtonComponent } from "@studio/SiteButton";
import {
  ExternalVideoComponent,
  ExternalVideoDefinition,
} from "@studio/ExternalVideo";

defineComponents([
  {
    component: SiteButtonComponent,
    definition: SiteButtonDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: ExternalVideoComponent,
    definition: ExternalVideoDefinition,
  },
  /*
   * After a new folder is created in '/_components' you need to register it below in a JSON format
   */
],
  {
    enabledBuiltInComponents: [
      CONTENTFUL_COMPONENTS.button.id,
      CONTENTFUL_COMPONENTS.divider.id,
      CONTENTFUL_COMPONENTS.heading.id,
      CONTENTFUL_COMPONENTS.richText.id,
      CONTENTFUL_COMPONENTS.text.id,
    ],
  });
defineBreakpoints([
  {
    id: "desktop",
    query: "*",
    displayName: "All Sizes",
    previewSize: "100%",
  },
  {
    id: "tablet",
    query: "<992px",
    displayName: "Tablet",
    previewSize: "820px",
  },
  {
    id: "mobile",
    query: "<576px",
    displayName: "Mobile",
    previewSize: "390px",
  },
]);
/*
 * Primary colors are defined in the studio.config.js file, because we feed these to the EB design tokens, and tailwind!
 */
defineDesignTokens({
  color: {
    Primary: StudioConfig.colors.primary["400"],
    Secondary: StudioConfig.colors.secondary["400"],
    Tertiary: StudioConfig.colors.tertiary["400"],
    Warning: StudioConfig.colors.warning["400"],
    Info: StudioConfig.colors.info["400"],
    Success: StudioConfig.colors.success["400"],
  },
});
