// file: src/routes/properties/[id]/+page.js
import * as constants from "$lib/constants.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const propertyId = params.id;

  const propertyData = Object.values(constants)
    .filter((prop) => typeof prop === "object" && prop !== null)
    .find((prop) => prop.property === propertyId);

  if (!propertyData) {
    error(404, `Property with ID "${propertyId}" not found`);
  }

  return {
    property: propertyData,
  };
}
