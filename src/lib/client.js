import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "m6hefcje",
  dataset: "production",
  apiVersion: "2023-02-06",
  useCdn: true,
  token:
    "sk6C5PbOiM72pgz42mX4AtDc2gmiHAsJ8sSoFRO17Aorxl15SAQTy0AdWkWPjFNAtMFVwvsW4CeOjBuTC1JctnHizaPvFNnQoqiACLkzbgA5QyS192HJVXPTUWBAbLdK45iiiMEZmAJnSH0gyowhXcGI8mEjLCo7ytNSJTmqQPmOoq7d1aCC",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
