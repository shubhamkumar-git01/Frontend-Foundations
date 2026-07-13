# 00 Web & Internet Basics 🌐

Before writing a single line of HTML, I realized I needed to understand what happens when a user types `google.com` into the URL bar and hits enter. Without this, I was just blindly writing code without knowing how the internet actually functions.

## 📝 Key Theoretical Learnings

### 1. How the Internet Works (DNS & TCP/IP)
When I type `google.com`:
1. **DNS Resolution**: The browser doesn't know what "google.com" is. It checks its cache, the OS cache, and then queries a DNS (Domain Name System) server to translate `google.com` into an IP Address (like `142.250.190.46`). Think of DNS as the phonebook of the internet.
2. **TCP/IP Connection**: Once the browser has the IP address, it establishes a connection with the server using the TCP/IP protocol. It performs a "3-way handshake" (SYN, SYN-ACK, ACK) to ensure the connection is reliable.
3. **HTTP Request/Response**: The browser sends an HTTP request (e.g., `GET / HTTP/1.1`) to the server. The server processes it and sends back an HTTP response containing the HTML file, along with a status code (like `200 OK` or `404 Not Found`).

### 2. Client-Server Architecture
- **Client (Frontend)**: The user's browser (Chrome, Firefox). It requests data and renders the UI.
- **Server (Backend)**: A computer sitting somewhere in a data center waiting for requests. It processes logic, queries the database, and sends data back to the client.

### 3. How a Browser Renders a Webpage (The Critical Rendering Path)
This was a massive "Aha!" moment for me. Browsers don't just magically show a webpage. They follow a strict process:
1. **Parsing HTML -> DOM Tree**: The browser reads the HTML raw bytes, converts them to characters, then to tokens, then to nodes, and finally builds the **DOM (Document Object Model) Tree**.
2. **Parsing CSS -> CSSOM Tree**: Simultaneously, it reads the CSS and builds the **CSSOM (CSS Object Model) Tree**. Note: CSS is "Render Blocking"—the browser won't show anything until the CSSOM is built!
3. **The Render Tree**: The browser combines the DOM and CSSOM to create the Render Tree (only containing visible elements. `display: none` elements are dropped here).
4. **Layout (Reflow)**: The browser calculates exactly where every node should be placed on the screen (width, height, position).
5. **Paint**: The browser converts each node into actual pixels on the screen.

> *Personal Note: Understanding the Render Tree made me realize why manipulating the DOM with JavaScript is so "expensive" and slow. Every time I change a style, I might force the browser to recalculate the Layout (Reflow) and Paint all over again!*

## 🔗 Deep Dive Links
- [How DNS Works (Comic)](https://howdns.works/) - A fantastic visual explanation of DNS.
- [Constructing the Object Model (Google Developers)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model) - Deep dive into DOM and CSSOM.
