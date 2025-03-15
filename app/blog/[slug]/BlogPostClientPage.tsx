"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag, MessageSquare } from "lucide-react"
import { CommentSection } from "@/components/comment-section"
import { ShareButtons } from "@/components/share-buttons"
import { RelatedPosts } from "@/components/related-posts"

export default function BlogPostClientPage({ params }: { params: { slug: string } }) {
  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            March 1, 2025
          </div>
          <div className="flex items-center">
            <Tag className="mr-1 h-4 w-4" />
            <Link href="/blog/category/tutorials" className="text-primary hover:underline">
              Tutorials
            </Link>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Building a Real-time Chat Application with Next.js and Socket.io
        </h1>

        <p className="text-xl text-muted-foreground">
          Learn how to create a fully functional real-time chat application using Next.js, Socket.io, and Tailwind CSS.
          This step-by-step guide covers everything from setup to deployment.
        </p>
      </div>

      <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Blog post cover image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {/* Blog post content goes here */}
        <p>
          Real-time applications are becoming increasingly popular, and chat applications are one of the most common use
          cases. In this tutorial, we'll build a real-time chat application using Next.js and Socket.io.
        </p>

        <h2>Prerequisites</h2>
        <p>Before we begin, make sure you have the following installed:</p>
        <ul>
          <li>Node.js (version 14 or higher)</li>
          <li>npm or yarn</li>
          <li>Basic knowledge of React and Next.js</li>
        </ul>

        <h2>Setting Up the Project</h2>
        <p>Let's start by creating a new Next.js project:</p>

        <pre>
          <code>{`npx create-next-app@latest chat-app
cd chat-app`}</code>
        </pre>

        <p>Next, we need to install Socket.io and its client library:</p>

        <pre>
          <code>{`npm install socket.io socket.io-client`}</code>
        </pre>

        <h2>Creating the Socket.io Server</h2>
        <p>
          We'll create a custom server that integrates Socket.io with Next.js. Create a file called{" "}
          <code>server.js</code> in the root of your project:
        </p>

        <pre>
          <code>{`const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server);

  io.on('connection', (socket) => {
    
    socket.on('message', (data) => {
      io.emit('message', data);
    });
    
    socket.on('disconnect', () => {
      
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    
  });
});`}</code>
        </pre>

        <h2>Creating the Chat Interface</h2>
        <p>
          Now, let's create the chat interface. We'll use Tailwind CSS for styling and create a simple chat UI with a
          message list and an input form.
        </p>

        <p>
          First, let's create a context to manage our Socket.io connection. Create a file called{" "}
          <code>context/socket.js</code>:
        </p>

        <pre>
          <code>{`import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    const socketInstance = io();
    setSocket(socketInstance);
    
    return () => {
      socketInstance.disconnect();
    };
  }, []);
  
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}`}</code>
        </pre>

        <p>
          Now, let's create our chat component. Create a file called <code>components/Chat.js</code>:
        </p>

        <pre>
          <code>{`import { useState, useEffect, useRef } from 'react';
import { useSocket } from '../context/socket';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const socket = useSocket();
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    if (!socket) return;
    
    socket.on('message', (message) => {
      setMessages((prev) => [...prev, message]);
    });
    
    return () => {
      socket.off('message');
    };
  }, [socket]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || !username.trim() || !socket) return;
    
    const message = {
      text: input,
      username,
      id: Date.now(),
    };
    
    socket.emit('message', message);
    setInput('');
  };
  
  if (!username) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center">Enter Your Username</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            const value = e.target.username.value.trim();
            if (value) setUsername(value);
          }}>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded"
              placeholder="Username"
              required
            />
            <button
              type="submit"
              className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Join Chat
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-blue-500 text-white">
        <h1 className="text-xl font-bold">Real-time Chat</h1>
        <p>Logged in as: {username}</p>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={\`mb-4 p-3 rounded-lg \${
              message.username === username
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-200'
            } max-w-xs\`}
          >
            <p className="font-semibold">{message.username}</p>
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-l"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded-r hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}`}</code>
        </pre>

        <p>
          Finally, let's update our <code>pages/_app.js</code> file to include the Socket.io provider:
        </p>

        <pre>
          <code>{`import '../styles/globals.css';
import { SocketProvider } from '../context/socket';

function MyApp({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  );
}

export default MyApp;`}</code>
        </pre>

        <p>
          And update our <code>pages/index.js</code> file to include the Chat component:
        </p>

        <pre>
          <code>{`import Chat from '../components/Chat';

export default function Home() {
  return (
    <div>
      <Chat />
    </div>
  );
}`}</code>
        </pre>

        <h2>Running the Application</h2>
        <p>
          Now, let's update the <code>package.json</code> file to use our custom server:
        </p>

        <pre>
          <code>{`"scripts": {
  "dev": "node server.js",
  "build": "next build",
  "start": "NODE_ENV=production node server.js"
}`}</code>
        </pre>

        <p>Run the application with:</p>

        <pre>
          <code>{`npm run dev`}</code>
        </pre>

        <p>
          Visit <code>http://localhost:3000</code> in your browser, and you should see the chat application. Open
          multiple browser windows to test the real-time functionality.
        </p>

        <h2>Conclusion</h2>
        <p>
          In this tutorial, we've built a real-time chat application using Next.js and Socket.io. We've learned how to:
        </p>
        <ul>
          <li>Set up a custom server with Socket.io</li>
          <li>Create a Socket.io context for React</li>
          <li>Build a chat interface with real-time messaging</li>
        </ul>
        <p>
          You can extend this application by adding features like user authentication, private messaging, typing
          indicators, and more.
        </p>
      </div>

      <div className="border-t border-b py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Share this post:</span>
            <ShareButtons
              url={`https://codecraft.com/blog/${params.slug}`}
              title="Building a Real-time Chat Application with Next.js and Socket.io"
            />
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">5 Comments</span>
          </div>
        </div>
      </div>

      <CommentSection postSlug={params.slug} />

      <div>
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
        <RelatedPosts currentSlug={params.slug} />
      </div>
    </article>
  )
}

