export type ImageDimensionParams = {
  width?: number;
  height?: number;
  inferSize?: boolean;
};

export default function findImageDimensionsParams(
  image: string | ImageMetadata
) {
  const imageUrl = typeof image === "string" ? image : image.src;
  const params: ImageDimensionParams = {};

  const matchWidth = imageUrl.match(/&w=(\d+)/);
  if (matchWidth) {
    params.width = parseInt(matchWidth[1], 10);
  }
  const matchHeight = imageUrl.match(/&h=(\d+)/);
  if (matchHeight) {
    params.height = parseInt(matchHeight[1], 10);
  }
  if (!params.width && !params.height) {
    params.inferSize = true;
  }

  return params;
}
