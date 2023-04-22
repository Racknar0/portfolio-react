import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script src="https://kit.fontawesome.com/e6cb5c4373.js" crossOrigin="anonymous" ></script>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&family=Titillium+Web:wght@300;400;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/faviconPNG.png" />
                <title>J Torres Dev</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}