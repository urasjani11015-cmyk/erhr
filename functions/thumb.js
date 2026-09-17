export async function onRequest(context) {
  try {
    // 1. Apni image/GIF ka DIRECT image link yahan rakhein
    // (Yeh kisi bhi online image/GIF ka direct URL ho sakta hai)
    const directImageUrl = "https://raw.githubusercontent.com/urasjani11015-cmyk/erhr/refs/heads/main/ththth%20(1).gif"; 

    // Image ko fetch karein
    const response = await fetch(directImageUrl);

    if (!response.ok) {
      return new Response('Image not found', { status: 404 });
    }

    // Image ka binary buffer lein
    const imageBuffer = await response.arrayBuffer();

    // 2. Exact same headers set karein
    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/gif',
        'Content-Disposition': 'inline; filename="thumb.gif"',
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response('Error: ' + error.message, { status: 500 });
  }
}
