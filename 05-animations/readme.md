# Three.js Journey

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Note

the pourpose of requestAnimationFrame is to call the function provided on the next frame
we are going to call the same function on each new frame.

to get constent stedy animation sequence regardless of the display refreshrate we now use
time and delte to caltulate it. delta = difference between current and previous
