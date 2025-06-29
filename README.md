# Framer Motion

Framer Motion is a powerful animation library for React that allows developers to create smooth and complex animations with minimal effort. It provides an intuitive API for animating components and handles complex scenarios like gestures, drag and drop, and scroll-linked animations. Whether you're building simple transitions or intricate interactions, Framer Motion makes it easy to add a professional touch to your React applications.

## Installation

To get started with Framer Motion, you can install it via npm or yarn:

### Using npm

```bash
npm install framer-motion
```

## Basic Usage

Framer Motion simplifies the process of animating React components. Below are a couple of examples demonstrating its usage.

### Example 1: Simple Fade-In Animation

The following example shows how to create a simple fade-in effect when a component enters the viewport:

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const FadeInComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, World!</h1>
    </motion.div>
  );
};

export default FadeInComponent;
```

### Example 2: Spring Animation with Drag

This example demonstrates a spring animation combined with drag functionality, allowing the user to drag the component across the screen:

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const DraggableComponent: React.FC = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileDrag={{ scale: 1.2 }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'coral',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Drag me!
    </motion.div>
  );
};

export default DraggableComponent;
```

[Framer Motion documentation](https://www.framer.com/motion/).
